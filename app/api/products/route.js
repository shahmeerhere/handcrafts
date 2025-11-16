import { prisma } from "@/lib/prisma"

export async function GET() {
  const products = await prisma.product.findMany()
  return new Response(JSON.stringify(products), { status: 200 })
}

export async function POST(req) {
  const body = await req.json()
  if (!body.name || !body.price || !body.category || !body.image) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 })
  }
  const product = await prisma.product.create({ data: body })
  return new Response(JSON.stringify(product), { status: 201 })
}

export async function PUT(req) {
  const url = new URL(req.url)
  const id = url.pathname.split("/").pop()
  const body = await req.json()

  const updated = await prisma.product.update({
    where: { id },
    data: body
  })

  return new Response(JSON.stringify(updated), { status: 200 })
}

export async function DELETE(req) {
  const url = new URL(req.url)
  const id = url.pathname.split("/").pop()

  await prisma.product.delete({ where: { id } })
  return new Response(null, { status: 204 })
}
