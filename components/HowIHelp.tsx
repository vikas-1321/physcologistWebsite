import Image from "next/image";

export default function HowIHelp() {
  return (
    <section className="relative bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#325c5a] mb-12">How I Help</h2>

        <div className="flex justify-start gap-8">

          {/* Card 1 */}
          <div className="bg-[#b5d8db] rounded border border-[#325c5a] p-4 shadow-md">
            <Image
              src="/images/help1.webp"
              alt="Individual Counseling"
              width={600}
              height={400}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-black text-lg font-bold mt-4">
              Christian Individual Counseling in Richmond, VA
            </h3>
            <p className="text-black text-sm mt-2">
              Discover Peace, Purpose, and God's Truth in Richmond, VA.
            </p>
            <button className="mt-4 w-full border border-[#325c5a] px-4 py-2 text-[#325c5a] rounded hover:bg-[#325c5a] hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#b5d8db] rounded border border-[#325c5a] p-4 shadow-md">
            <Image
              src="/images/help2.webp"
              alt="Couples Counseling"
              width={600}
              height={400}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-black text-lg font-bold mt-4">
              Christian Couples Counseling in Richmond, VA
            </h3>
            <p className="text-black text-sm mt-2">
              Heal Your Relationship, Grow Closer to God Together in Richmond.
            </p>
            <button className="mt-4 w-full border border-[#325c5a] px-4 py-2 text-[#325c5a] rounded hover:bg-[#325c5a] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Right Plant Image */}
      <Image
        src="/images/plant.webp"
        alt="Decorative Plant"
        width={100}
        height={100}
        className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32"
      />
    </section>
  );
}
