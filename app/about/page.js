import Image from "next/image";

export const metadata = {
  title: "About Handcrafts",
};

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/comps/about.jpeg"
          alt="About Handcrafts"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">About Handcrafts</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Handcrafts was born from a passion for timeless elegance and uncompromising quality.
          We envisioned a brand where every shoe tells a story a perfect blend of craftsmanship,
          style, and comfort. From humble beginnings, our journey has been driven by a relentless
          commitment to excellence and innovation.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Today, Handcrafts stands as a symbol of sophistication and trust. Across Pakistan and beyond,
          discerning customers choose us for designs that celebrate individuality, durability, and
          effortless luxury.
        </p>
      </section>

      {/* Why Buyers Trust Handcrafts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Our Customers Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <Image
                  src="/comps/about.jpeg"
                  alt="Trust"
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {i === 1 ? "Decades of Mastery" : i === 2 ? "Transparent Excellence" : "Personalized Care"}
                </h3>
                <p className="text-gray-600">
                  {i === 1
                    ? "Our artisans bring decades of expertise to every creation, ensuring impeccable quality and design."
                    : i === 2
                    ? "From order to delivery, every step is transparent, with no compromises on craftsmanship or service."
                    : "Every client receives individualized attention — from style guidance to aftercare, we are always at your service."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Handcrafts is the Best */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Why Handcrafts is the Ultimate Choice</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          At Handcrafts, we merge traditional craftsmanship with modern elegance, crafting shoes
          that not only look stunning but feel exceptional. Every stitch, every material, and every
          design decision is meticulously chosen to create a masterpiece on your feet.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Our clients trust us because we deliver more than shoes we deliver confidence, style,
          and an experience that embodies sophistication. With Handcrafts, you dont just wear a product;
          you embrace a legacy of excellence.
        </p>
      </section>
    </div>
  );
};

export default About;
