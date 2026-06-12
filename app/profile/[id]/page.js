"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Mail, Phone, Calendar, MapPin, Users, Heart } from "lucide-react";

export default function PublicProfile({ params }) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = params; // profile ID = Firebase UID

  useEffect(() => {
    if (!authLoading && !user) router.push("/login");
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      } else {
        setProfile(null);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user, id]);

  if (authLoading || loading) return <div className="text-center py-20">Loading...</div>;
  if (!profile) return <div className="text-center py-20">Profile not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-primary text-white p-6">
          <div className="flex items-center gap-4">
            <img src={profile.photoURL || "/avatar-placeholder.png"} alt={profile.fullName} className="w-24 h-24 rounded-full border-4 border-white" />
            <div>
              <h1 className="text-3xl font-bold">{profile.fullName}</h1>
              <p className="text-lg opacity-90">{profile.age} years, {profile.location || "India"}</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><Calendar className="inline mr-2" /> <strong>Date of Birth:</strong> {profile.dob}</div>
            <div><Heart className="inline mr-2" /> <strong>Gender:</strong> {profile.gender}</div>
            <div><Users className="inline mr-2" /> <strong>Religion:</strong> {profile.religion}</div>
            <div><Users className="inline mr-2" /> <strong>Caste:</strong> {profile.caste}</div>
            <div><Users className="inline mr-2" /> <strong>Family Type:</strong> {profile.familyType}</div>
            <div><Users className="inline mr-2" /> <strong>Family Values:</strong> {profile.familyValues || "Traditional"}</div>
          </div>

          <hr />

          <div>
            <h2 className="text-xl font-semibold mb-3">Partner Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><strong>Age Range:</strong> {profile.prefAgeMin} – {profile.prefAgeMax} years</div>
              <div><strong>Preferred Religion:</strong> {profile.prefReligion || "Any"}</div>
              <div><strong>Preferred Caste:</strong> {profile.prefCaste || "Any"}</div>
              <div><strong>Preferred Location:</strong> {profile.prefLocation || "Any"}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-gray-600">Interested in this profile? Contact us to express your interest.</p>
            <button className="btn-primary mt-3">Send Interest (Coming Soon)</button>
          </div>
        </div>
      </div>
    </div>
  );
}