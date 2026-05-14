import restaurantConfig from "@/config/restaurant"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="font--(--font-syne) font-bold text-xl text-(--color-brand)">
          🍽 {restaurantConfig.name}
        </span>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="/admin" className="text-sm bg-(--color-brand) hover:bg-(--color-brand-dark) px-4 py-2 rounded-lg font-medium transition-colors">
            Live Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-block bg-(--color-brand)/10 border border-(--color-brand)/20 text-(--color-brand) text-sm px-4 py-1.5 rounded-full mb-8">
          ⚡ White-label ready — sell it as your own
        </div>

        <h1 className="font-bold text-5xl md:text-7xl leading-tight mb-6">
          The complete restaurant
          <span className="text-(--color-brand)"> ordering system</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          QR table ordering, real-time kitchen display, delivery management,
          and AI-powered menu search — all in one white-label product.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="/admin" className="bg-(--color-brand) hover:bg-(--color-brand-dark) px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors">
            See Live Demo
          </a>
          <a href="#pricing" className="border border-zinc-700 hover:border-zinc-500 px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors">
            View Pricing
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-bold text-3xl md:text-4xl text-center mb-4">
          Everything a restaurant needs
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
          Built for real restaurants. Works on any device. Ready to sell.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-(--color-brand)/40 transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-bold text-3xl md:text-4xl text-center mb-4">
          Simple pricing
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
          Buy once. Own it forever. No monthly fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${p.featured ? "bg-(--color-brand) border-(--color-brand)" : "bg-zinc-900 border-zinc-800"}`}>
              <p className="font-semibold text-sm uppercase tracking-widest mb-2 opacity-70">
                {p.name}
              </p>
              <p className="font-bold text-4xl mb-6">{p.price}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${p.featured ? "bg-white text-(--color-brand) hover:bg-zinc-100" : "bg-(--color-brand) hover:bg-(--color-brand-dark) text-white"}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        Built with Next.js · Ready to sell globally
      </footer>

    </main>
  )
}

const features = [
  { icon: "📱", title: "QR Table Ordering", description: "Customers scan a QR code on their table and order directly from their phone. No app needed." },
  { icon: "🍳", title: "Live Kitchen Display", description: "Orders appear instantly on the kitchen screen. Works on any TV, tablet, or phone." },
  { icon: "🚴", title: "Delivery Management", description: "Handle delivery orders with address collection, zones, and delivery fee configuration." },
  { icon: "🤖", title: "AI Menu Search", description: "Customers describe what they want in plain text and AI finds the perfect match." },
  { icon: "💳", title: "Flexible Payments", description: "Stripe, Flutterwave, and Chapa supported. Switch providers from one config file." },
  { icon: "🎨", title: "White-Label Ready", description: "Change the name, logo, colors, and currency from one config file. Sell it as your own." },
]

const pricing = [
  {
    name: "Basic", price: "$199", featured: false,
    features: ["Full source code", "QR + delivery + pickup", "Kitchen display", "Admin panel", "Setup documentation"],
  },
  {
    name: "Extended", price: "$349", featured: true,
    features: ["Everything in Basic", "AI menu search", "Payment integration", "1 month support", "Free updates"],
  },
  {
    name: "White-label", price: "$699", featured: false,
    features: ["Everything in Extended", "We customize for you", "We deploy for you", "3 months support", "Your branding"],
  },
]