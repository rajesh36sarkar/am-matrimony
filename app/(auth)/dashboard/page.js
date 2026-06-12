"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Dashboard() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  // Fetch user profile from Firestore
  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfile(data);
        setFormData(data);
      } else {
        // No profile exists → redirect to register
        router.push("/register");
      }
    };
    fetchProfile();
  }, [user, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, formData);
      setProfile(formData);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error", error);
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !profile) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">My Profile</h1>
        <div className="flex gap-3">
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="btn-secondary">Edit Profile</button>
          ) : (
            <>
              <button onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="btn-primary">
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </>
          )}
          <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Personal Details</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                {isEditing ? (
                  <input name="fullName" value={formData.fullName || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                {isEditing ? (
                  <input name="dob" type="date" value={formData.dob || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.dob}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                {isEditing ? (
                  <select name="gender" value={formData.gender || ""} onChange={handleChange} className="border p-2 w-full rounded">
                    <option>Male</option><option>Female</option><option>Other</option>
                  </select>
                ) : (
                  <p className="mt-1">{profile.gender}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Religion</label>
                {isEditing ? (
                  <input name="religion" value={formData.religion || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.religion}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Caste / Community</label>
                {isEditing ? (
                  <input name="caste" value={formData.caste || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.caste}</p>
                )}
              </div>
            </div>
          </div>

          {/* Family Details */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Family Details</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Family Type</label>
                {isEditing ? (
                  <select name="familyType" value={formData.familyType || ""} onChange={handleChange} className="border p-2 w-full rounded">
                    <option>Nuclear</option><option>Joint</option>
                  </select>
                ) : (
                  <p className="mt-1">{profile.familyType}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                {isEditing ? (
                  <input name="fatherName" value={formData.fatherName || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.fatherName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                {isEditing ? (
                  <input name="motherName" value={formData.motherName || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.motherName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Siblings Count</label>
                {isEditing ? (
                  <input name="siblingsCount" type="number" value={formData.siblingsCount || 0} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.siblingsCount}</p>
                )}
              </div>
            </div>
          </div>

          {/* Partner Preferences */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-3">Partner Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Age Range</label>
                {isEditing ? (
                  <div className="flex gap-2">
                    <input name="prefAgeMin" type="number" value={formData.prefAgeMin || ""} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Min" />
                    <input name="prefAgeMax" type="number" value={formData.prefAgeMax || ""} onChange={handleChange} className="border p-2 w-full rounded" placeholder="Max" />
                  </div>
                ) : (
                  <p className="mt-1">{profile.prefAgeMin} – {profile.prefAgeMax} years</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Religion</label>
                {isEditing ? (
                  <input name="prefReligion" value={formData.prefReligion || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.prefReligion || "Any"}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Caste</label>
                {isEditing ? (
                  <input name="prefCaste" value={formData.prefCaste || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.prefCaste || "Any"}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Location</label>
                {isEditing ? (
                  <input name="prefLocation" value={formData.prefLocation || ""} onChange={handleChange} className="border p-2 w-full rounded" />
                ) : (
                  <p className="mt-1">{profile.prefLocation || "Any"}</p>
                )}
              </div>
            </div>
          </div>

          {/* Profile Visibility */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isProfilePublic"
                checked={formData.isProfilePublic || false}
                onChange={(e) => setFormData({ ...formData, isProfilePublic: e.target.checked })}
                disabled={!isEditing}
                className="w-4 h-4"
              />
              <span>Make my profile visible to other registered users on the homepage</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}