"use client"
import { useState, useEffect } from "react"
import AdminRoute from "@/components/AdminRoute"
import Toast from "@/components/Toast"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" })
  const [toast, setToast] = useState(null)

  const fetchProducts = async () => {
    const res = await fetch("/api/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return
    await fetch(`/api/products/${id}`, { method: "DELETE" })
    setToast({ message: "Product deleted successfully", type: "success" })
    fetchProducts()
  }

  const handleEdit = (product) => {
    setEditingId(product.id)
    setForm({ ...product })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    await fetch(`/api/products/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: parseFloat(form.price) })
    })
    setEditingId(null)
    setForm({ name: "", price: "", category: "", image: "" })
    setToast({ message: "Product updated successfully", type: "success" })
    fetchProducts()
  }

  return (
    <AdminRoute>
      <div className="p-8">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["Name", "Price", "Category", "Image", "Actions"].map((head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{p.name}</td>
                  <td className="px-6 py-4">{p.price}</td>
                  <td className="px-6 py-4">{p.category}</td>
                  <td className="px-6 py-4">
                    <img src={p.image} className="h-16 w-16 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      className="bg-yellow-500 px-3 py-1 rounded text-white hover:bg-yellow-600"
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editingId && (
          <div className="mt-6 max-w-lg mx-auto bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Product</h2>
            <form className="space-y-4" onSubmit={handleUpdate}>
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
              <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
                Update Product
              </button>
            </form>
          </div>
        )}
      </div>
    </AdminRoute>
  )
}
