import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({ name: "", quantity: "", delivery: "", contact: "" });
  const [lemons, setLemons] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/wm0oxtmmfkndt")
      .then((res) => res.json())
      .then((data) => setLemons(data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted!");
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-green-800 font-sans">
      <header className="bg-green-600 text-white p-4 text-center shadow-lg">
        <h1 className="text-3xl font-bold">3 Lemons Traders</h1>
        <p className="text-sm">Fresh Lemons, Fresher Deals!</p>
      </header>

      <main className="p-4 space-y-12 max-w-5xl mx-auto">
        {/* Home Section */}
        <section className="text-center">
          <Image
            src="/lemons-hero.jpg"
            alt="Fresh Lemons"
            width={600}
            height={400}
            className="mx-auto rounded-xl shadow"
          />
          <p className="mt-4 text-lg">
            Your trusted source for premium quality lemons in India.
          </p>
        </section>

        {/* About Us */}
        <section>
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p>
            We are a passionate team led by <strong>Pradeep Mamuduru</strong>, Business Executive &amp; Partner, committed to delivering top-grade lemons
            across India. Our mission is to provide freshness, quality, and customer satisfaction with every order.
          </p>
        </section>

        {/* Our Lemons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Lemons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lemons.map((lemon, index) => (
              <div
                key={index}
                className="border border-green-400 rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={lemon.image_url}
                  alt={lemon.grade}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <p className="mt-2 font-semibold">
                  {lemon.grade} - ₹{lemon.price_per_kg}/kg
                </p>
                <p>{lemon.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Order Form */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Buy Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-green-400 rounded p-2"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity (in kg)"
              value={form.quantity}
              onChange={handleChange}
              required
              className="w-full border border-green-400 rounded p-2"
            />
            <textarea
              name="delivery"
              placeholder="Delivery Address"
              value={form.delivery}
              onChange={handleChange}
              required
              className="w-full border border-green-400 rounded p-2"
              rows={3}
            />
            <input
              type="tel"
              name="contact"
              placeholder="WhatsApp Number"
              value={form.contact}
              onChange={handleChange}
              required
              className="w-full border border-green-400 rounded p-2"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full"
            >
              Place Order
            </button>
          </form>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:3lemons.traders@gmail.com" className="text-green-600 underline">
              3lemons.traders@gmail.com
            </a>
          </p>
          <p>
            Phone/WhatsApp:{" "}
            <a href="tel:+918500130926" className="text-green-600 underline">
              8500130926
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a href="https://instagram.com/3Lemons_Traders" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">
              @3Lemons_Traders
            </a>
          </p>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Testimonials</h2>
          <p className="italic">(Coming soon: Hear what our happy customers have to say!)</p>
        </section>
      </main>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/918500130926"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}
