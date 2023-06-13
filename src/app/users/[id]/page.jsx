"use client";
import { useState, useEffect } from "react";
import getUser from "../../../../lib/getUser";
import getUserPosts from "../../../../lib/getUserPosts";
import UserPosts from "./UserPosts";
function User({ params }) {
  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getUser(params.id).then((res) => setUser(res));
    getUserPosts(params.id).then((res) => setUserPosts(res));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserPosts
        userPosts={userPosts}
        username={user.name}
        userID={params.id}
      />
    </div>
  );
}

export default User;
