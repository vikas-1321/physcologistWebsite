import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0e3b3f] text-white py-10 px-6 md:px-[20%]">
      <div className="flex flex=row justify-center gap-10">
        {/* Column 1 - Logo & Info */}
        <div>
          <img
            src="/images/logo.png"
            alt="Serena Blake Logo"
            className="h-16 mb-4"
          />
          <p className="text-sm">
            <span className="inline-block text-yellow-400 mr-1">★</span>Top Rated ·{' '}
            <a href="#" className="underline">Testimonials</a> ·{' '}
            <a href="#" className="underline">Media Mentions</a>
          </p>
          <address className="mt-3 not-italic text-sm leading-6">
            4913 Fitzhugh Avenue,<br />
            Suite 102, Richmond, VA 23230<br />
            📞 (757) 474-5262
          </address>
          <a
            href="https://www.psychologytoday.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/psychologytoday.webp"
              alt="Verified by Psychology Today"
              className="mt-4 h-8"
            />
          </a>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h4 className="font-semibold uppercase text-sm mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Get In Touch</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">About Me</a></li>
            <li><a href="#" className="hover:underline">FAQ's</a></li>
            <li><a href="#" className="hover:underline">Therapies</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Column 3 - Areas Served */}
        <div>
          <h4 className="font-semibold uppercase text-sm mb-3">Areas Served</h4>
          <ul className="space-y-1 text-sm">
            {[
              "Richmond, VA", "Ashland, VA", "Mechanicsville, VA",
              "Lakeside, VA", "East Highland Park, VA", "Short Pump, VA",
              "Highland Springs, VA", "Glen Allen, VA", "Sandston, VA", "Bon Air, VA",
              "Chester, VA", "Midlothian, VA", "Moseley, VA", "Hopewell, VA",
              "Petersburg, VA", "Colonial Heights, VA", "New Kent, VA",
              "Powhatan, VA", "Goochland, VA"
            ].map((city, i) => (
              <li key={i}>{city}</li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Services */}
        <div>
          <h4 className="font-semibold uppercase text-sm mb-3">Services</h4>
          <ul className="text-sm space-y-2">
            <li>Christian Individual Counseling in Richmond, VA</li>
            <li>Christian Couples Counseling in Richmond, VA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
