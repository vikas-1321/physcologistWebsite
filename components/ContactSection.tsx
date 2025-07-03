export default function ContactSection() {
  return (
    <section className="text-black bg-[#b7e3eb] py-16 px-4 md:px-12 lg:px-24 flex flex-row lg:flex-col justify-between items-start gap-12">
      {/* Left: Office Info */}
      <div className="flex-1 space-y-10">
        <div>
          <h2 className="text-black text-3xl font-bold text-darkMain1">Our Office</h2>
          <p className="text-xl text-black mt-2 text-darkMain1">
            4913 Fitzhugh Avenue<br />
            Suite 102<br />
            Richmond<br />
            VA 23230<br />
            Richmond, VA
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl inline-block mt-3 bg-darkMain1 text-[#325c5a] px-3 py-1 rounded hover:bg-darkMain2 transition"
          >
            Google Maps
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-darkMain1">Days</h2>
          <p className="text-xl text-darkMain1 mt-2">1. In-person: Tue & Thu, 10 AM–6 PM</p>
          <p className="text-xl text-darkMain1">2. Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
          
        </div>

        <div>
          <h2 className="text-2xl font-bold text-darkMain1">Contact</h2>
          <p className="text-xl text-darkMain1 mt-2">📞 (757) 474-5262</p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="flex-1 bg-white p-6 md:p-8 rounded shadow-md max-w-lg mx-auto border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-darkMain1 mb-2">Get In Touch</h2>
        <p className="text-xl text-sm text-center text-darkText mb-6">
          Simply fill out the brief fields below and Ellie will be in touch
          with you soon, usually within one business day. This form is safe,
          private, and completely free.
        </p>
        <form className="text-s space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-darkMain1"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-darkMain1"
          />
          <input
            type="tel"
            placeholder="(555) 234-5678"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-darkMain1"
          />
          <textarea
            placeholder="How can I help you?"
            rows={3}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-darkMain1"
          ></textarea>

          {/* Mocked CAPTCHA */}
          <div className="border border-gray-300 rounded p-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>I'm not a robot</span>
            </label>
            <div className="text-xs text-gray-400 mt-1">reCAPTCHA Privacy - Terms</div>
          </div>

          <button
  type="submit"
  className="w-full bg-darkMain1 text-black py-2 px-4 rounded border-2 border-[#325c5a] hover:bg-darkMain2 transition"
>
  Submit
</button>

        </form>

        <p className="text-s text-gray-500 mt-4 text-center">
          By submitting, you confirm you are 18+ and agree to our{" "}
          <a href="#" className="underline">
            Privacy Policy & TOS
          </a>{" "}
          and to receive emails & texts from Ellie Shumaker.
        </p>
      </div>
    </section>
  );
}
