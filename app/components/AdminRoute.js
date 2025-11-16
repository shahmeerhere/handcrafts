"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminRoute({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (!isAdmin) router.push("/admin/login");
    else setAuthorized(true);
  }, [router]);

  if (!authorized) return <div className="text-center mt-20">Loading...</div>;
  return <>{children}</>;
}
