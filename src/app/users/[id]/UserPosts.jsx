import Loading from "@/app/loading";
import Link from "next/link";
import React from "react";
export default function UserPosts({ userPosts, username, userID }) {
  console.log(userPosts, username);

  if (username !== undefined) {
    return (
      <div className="flex min-h-screen flex-col items-center gap-4 pt-6 px-24">
        <h1 className=" text-2xl">{username}'s Posts</h1>
        <Link className="hover:text-red-400" href={`/users`}>
          Go To Users List
        </Link>
        <ul className="grid gap-2">
          {userPosts.map((post, i) => {
            return (
              <li key={i}>
                <h2>
                  <strong>Post Title: </strong>
                  {post.title}
                </h2>
                <article>
                  <strong>Post: </strong>
                  {post.body}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <Loading />;
  }
}
