"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-50  h-full-screen p-4">
      <h1 className="text-lg text-black font-bold mb-6">Categories</h1>
      <ul className="space-y-3">
        <li><Link href="/" className="uppercase text-black font-light text-sm px-3 py-2 font-mono hover:brightness-125 hover:saturate-125 hover:shadow-inner">Formal</Link></li>
        <li><Link href="/" className="uppercase text-black font-light text-sm px-3 py-2 font-mono hover:brightness-125 hover:saturate-125 hover:shadow-inner">Casual</Link></li>
        <li><Link href="/" className="uppercase text-black font-light text-sm px-3 py-2 font-mono hover:brightness-125 hover:saturate-125 hover:shadow-inner">Occassional</Link></li>
       
      </ul>
    </div>
  );
}

