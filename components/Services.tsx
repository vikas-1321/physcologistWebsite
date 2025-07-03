export default function Services() {
  return (
    <section className="bg-[#f7f9f9] py-16 px-4 md:px-16" id="services">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#325c5a] mb-6">
          Services Offered
        </h2>
        <p className="text-md md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Personalized therapy services designed to help you heal, grow, and find peace.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#325c5a] mb-2">
              Anxiety & Stress Management
            </h3>
            <p className="text-gray-600">
              Learn effective techniques to manage overwhelming thoughts, regain control, and cultivate calm in your daily life.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#325c5a] mb-2">
              Relationship Counseling
            </h3>
            <p className="text-gray-600">
              Strengthen communication, rebuild trust, and foster deeper emotional connections with those you care about.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#325c5a] mb-2">
              Trauma Recovery
            </h3>
            <p className="text-gray-600">
              Begin your healing journey from past wounds with a supportive, trauma-informed approach rooted in compassion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
