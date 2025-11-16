"use client"
import { useEffect } from "react"

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const bgColor =
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-gray-500"

  return (
    <div
      className={`${bgColor} fixed top-6 right-6 text-white px-4 py-2 rounded shadow-lg transition`}
    >
      {message}
    </div>
  )
}
