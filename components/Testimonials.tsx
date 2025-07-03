export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#b5d8db] flex flex-col items-center justify-center relative overflow-hidden py-12 md:py-16"
    >
      <div className="w-full px-4 md:px-[10%] mb-8">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-black max-w-fit rounded-lg bg-amber-100 px-3 py-1 text-sm text-darkMain1">
            Client Success Stories & Testimonials
          </h2>
          <p className="text-black text-4xl md:text-5xl font-bold tracking-tighter">
            What Former Clients Say
          </p>
          <p className="text-black md:text-xl">
            Real experiences from individuals who have found healing and growth
            through our work together.
          </p>
        </div>
      </div>

      {/* Animated Testimonials Slider */}
      <div className="flex item-center justify-center relative z-20 overflow-hidden w-full max-w-full px-4">
        <ul className="flex w-max gap-6 py-6 animate-scroll hover:[animation-play-state:paused]">
          {[1, 2, 3, 4].map((_, index) => (
            <li
              key={index}
              className="w-[300px] flex-shrink-0 p-6 rounded-xl shadow-md bg-white/80 backdrop-blur border border-gray-200 transition-shadow hover:shadow-xl"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Happy Client</h3>
              </div>
              <p className="text-sm text-gray-700">
                <span className="italic text-xs block mb-2">
                  👉 Tap & Hold to Stop
                </span>
                Client testimonials are <strong>coming soon</strong>. Please
                check back later for insights from those who have worked with
                Ellie Shumaker, LCSW.
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Below */}
      <div className="mt-10 p-6 bg-amber-50 rounded-lg shadow text-center">
        <h3 className="text-[#b5d8db] text-xl font-bold text-darkMain1 mb-2">Stay Tuned</h3>
        <p className="text-gray-800 text-base">
          More testimonials and success stories will be shared here soon.
        </p>
      </div>
    </section>
  );
}
