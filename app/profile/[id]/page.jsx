"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation"; // Import useParams
import { Suspense } from "react"; // Import NextSuspense
import Profile from "@components/Profile";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const params = useParams(); // Get dynamic route parameters

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`); // Use params.id directly
      const data = await response.json();

      setUserPosts(data);
    };

    if (params.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default function WrappedUpdateUser() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Wrap with NextSuspense */}
      <UserProfile />
    </Suspense>
  );
}
