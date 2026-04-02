const services = [
  "Emergency plumbing",
  "Burst pipes",
  "Leaks",
  "Blocked drains",
  "Boiler faults",
  "24/7 emergency callouts",
]

const features = [
  {
    icon: "🕐",
    title: "24/7 Availability",
    description:
      "Our AI receptionist never sleeps. Get instant answers at 3am, weekends, or bank holidays — no voicemail, no missed calls.",
  },
  {
    icon: "📅",
    title: "Instant Booking",
    description:
      "Callers can describe their emergency and book a same-day appointment on the spot — no waiting on hold.",
  },
  {
    icon: "📞",
    title: "Never Miss a Call",
    description:
      "Every call answered, every lead captured — even when your whole team is out on jobs.",
  },
]

export default function Home() {
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book"

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1e40af 55%, #dc2626 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ⭐ 5.0 stars · 571 reviews · London
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Emergency Plumbing Solutions
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            London&apos;s trusted 24/7 emergency plumbing experts — 5 stars, 571
            reviews.
          </p>
          <a
            href="#widget"
            className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Try AI Receptionist
          </a>
          <p className="mt-4 text-blue-200 text-sm">
            No download needed · Works in your browser
          </p>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Talk to Our AI Receptionist
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Available 24/7 to take your call and book an emergency appointment.
          </p>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-500 mb-12">
            We cover all plumbing emergencies across London — fast response,
            every time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center text-xl"
                  style={{ background: "#1e3a8a15" }}
                >
                  🔧
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6" style={{ background: "#f0f4ff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Stop missing emergency calls. Our AI handles every inbound enquiry
            instantly, around the clock.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to automate your calls?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Book a 15-minute demo call and see how the AI receptionist works
            live for your business.
          </p>
          <a
            href={bookingLink}
            className="inline-block bg-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
            style={{ color: "#1e3a8a" }}
          >
            Book a Demo Call
          </a>
          <p className="mt-6 text-blue-200 text-sm">
            Or call us directly: +44 20 8064 0745
          </p>
        </div>
      </section>
    </main>
  )
}
