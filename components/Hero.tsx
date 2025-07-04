export default function Hero() {
  return (
    <section
      className="bg-cover bg-center text-white text-center py-32 px-4"
      style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}
    >
      <div className="bg-black/40 p-6 max-w-4xl mx-auto rounded-lg">
        <p className="bg-blue-700 inline-block text-white px-3 py-1 rounded-full text-sm mb-4">
          Christian Counseling Services in Richmond & Central Virginia
        </p>

        <h2 className="text-[#f6f6f6] text-4xl font-bold mb-4">
          Professional Counseling for Christian Healing and Growth
        </h2>

        <p className="text-lg mb-2">
          Begin your journey today towards spiritual growth, deeper relationships,<br />
          and lasting inner peace.
        </p>

        <p className="text-xl font-semibold italic mb-2">I want to work with you for…</p>

        <div className="relative h-10 w-full max-w-xl overflow-hidden flex justify-center text-center mx-auto">
      <div className="absolute animate-quote-1 text-cyan-300 font-bold text-lg">
        ✨ Greater Purpose in Your Life Direction
      </div>
      <div className="absolute animate-quote-2 text-cyan-300 font-bold text-lg">
        🌿 Healing from Past Emotional Wounds
      </div>
      <div className="absolute animate-quote-3 text-cyan-300 font-bold text-lg">
        💬 Building Stronger Communication in Relationships
      </div>
    </div>


        <div className="text-sm text-yellow-200 mb-6 space-x-2">
          <span>⭐ Top Rated</span>
          <span>• 40+ Years Experience</span>
          <span>• Testimonials</span>
          <span>• Media Mentions</span>
        </div>

        <div className="relative inline-block group">
  {/* Glowing RGB Border */}
  <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 
    bg-[length:300%_300%] animate-borderRotate opacity-80 group-hover:opacity-100 blur-sm z-0" />

  {/* Actual Button */}
  <a
    href="#"
    className="relative inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition z-10"
  >
    ✨ Start Healing Today
  </a>
</div>
      </div>
    </section>
  );
}
