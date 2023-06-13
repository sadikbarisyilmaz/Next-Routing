"use client";
import { Suspense, useEffect, useState } from "react";
import getAllUsers from "../../../lib/getAllUsers";
import Link from "next/link";
import Loading from "../loading";
function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => setUsers(res));
  }, []);
  console.log(users);
  return (
    <div className="flex gap-4 min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl">All Users:</h1>
      <ol className="grid gap-2 list-decimal">
        {users[0] !== undefined ? (
          users.map((user, i) => {
            return (
              <li key={i}>
                <Link className="hover:text-red-400" href={`/users/${user.id}`}>
                  {user.username}
                </Link>
              </li>
            );
          })
        ) : (
          <Loading />
        )}
      </ol>
    </div>
  );
}

export default Page;
