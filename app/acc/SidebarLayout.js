"use client"
import { useState } from "react"
import Sidebar from "../shared/sidebar"

export default function SidebarLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 border-r bg-white shadow-sm">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`relative bg-white w-64 h-full shadow-lg transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold">Menu</h2>
            <button
              className="text-gray-600 hover:text-black"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
          </div>
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Mobile Topbar */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button
            className="p-2 rounded-md border bg-white shadow-sm"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-lg font-bold">Accessories</h1>
        </div>

        {children}
      </div>
    </div>
  )
}
