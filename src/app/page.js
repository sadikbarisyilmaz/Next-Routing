"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className=" text-2xl">Homepage:</h1>
      <Link className="hover:text-red-400" href="/users">
        See All Users
      </Link>
    </main>
  );
}
