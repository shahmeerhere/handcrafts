"use client";
import AdminRoute from "./../../components/AdminRoute";
import AdminDashboard from "./../../components/AdminDashboard";

export default function AdminPage() {
  return (
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  );
}
