export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-6xl md:text-7xl font-serif text-gray-900 tracking-wide">
          SeeYouOnThat
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
          An invitation-only gateway for visionaries, investors, and creators to
          connect in privacy and purpose.
        </p>
        <div className="mt-10 flex space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Apply for Membership
          </button>
          <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-serif mb-6 text-gray-900">About</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          SeeYouOnThat is a curated digital world connecting global leaders,
          companies, and investors. Our platform offers a discreet environment
          where opportunity meets excellence.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 text-center bg-[#faf8f5]">
        <h2 className="text-4xl font-serif mb-6 text-gray-900">Contact</h2>
        <p className="text-gray-700">
          For inquiries and collaborations, reach us at{" "}
          <a
            href="mailto:info@seeyouonthat.com"
            className="underline hover:text-black"
          >
            info@seeyouonthat.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} SeeYouOnThat. All rights reserved.
      </footer>
    </main>
  );
}