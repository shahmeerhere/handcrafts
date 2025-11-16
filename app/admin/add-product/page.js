"use client"
import { useState } from "react"
import AdminRoute from "../../components/AdminRoute"
import Toast from "../../components/Toast"

export default function AddProductPage() {
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" })
  const [toast, setToast] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: parseFloat(form.price) })
    })

    if (!res.ok) return setToast({ message: "Error creating product", type: "error" })

    setForm({ name: "", price: "", category: "", image: "" })
    setToast({ message: "Product created successfully", type: "success" })
  }

  return (
    <AdminRoute>
      <div className="p-8 max-w-lg mx-auto bg-white shadow rounded-lg">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

        <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "price", "category", "image"].map((field) => (
            <input
              key={field}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              type={field === "price" ? "number" : "text"}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required
            />
          ))}

          <button className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition">
            Add Product
          </button>
        </form>
      </div>
    </AdminRoute>
  )
}
