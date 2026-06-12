"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function NewPost() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "", category: "", body: "", metaTitle: "", metaDesc: "", status: "draft"
  });
  const [featuredImage, setFeaturedImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.email !== "admin@am-matrimony.com")) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) setFeaturedImage(data.url);
      else alert("Upload failed");
    } catch (err) {
      console.error(err);
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const slug = form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      await addDoc(collection(db, "blog_posts"), {
        ...form,
        slug,
        featuredImage,
        author: user.email,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      router.push("/admin/blog");
    } catch (error) {
      console.error("Save error", error);
      alert("Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-primary mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" className="border p-2 w-full rounded" required value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        <input type="text" placeholder="Category (e.g., Advice, Culture)" className="border p-2 w-full rounded" required value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
        <div>
          <label className="block text-sm font-medium">Featured Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploading && <p className="text-sm text-blue-500">Uploading...</p>}
          {featuredImage && <img src={featuredImage} className="h-32 mt-2" />}
        </div>
        <textarea placeholder="Body (HTML allowed)" rows="10" className="border p-2 w-full rounded" required value={form.body} onChange={e => setForm({...form, body: e.target.value})}></textarea>
        <input type="text" placeholder="Meta Title (SEO)" className="border p-2 w-full rounded" value={form.metaTitle} onChange={e => setForm({...form, metaTitle: e.target.value})} />
        <textarea placeholder="Meta Description (SEO)" rows="2" className="border p-2 w-full rounded" value={form.metaDesc} onChange={e => setForm({...form, metaDesc: e.target.value})}></textarea>
        <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="border p-2 rounded">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <div className="flex gap-2">
          <button type="submit" disabled={saving} className="btn-primary">{saving ? "Saving..." : "Publish Post"}</button>
          <button type="button" onClick={() => router.back()} className="btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}