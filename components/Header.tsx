import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#325c5a] h-24 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl h-24 mx-auto flex justify-between items-center px-6 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Serena Blake Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <span className="text-3xl font-bold">Serena Blake</span>
        </div>
        <nav className="space-x-6 text-base md:text-lg lg:text-xl font-medium">

  <a href="#" className="text-lg">Services</a>
  <a href="#About" className="text-lg">About</a>
  <a href="#" className="text-lg">Testimonials</a>
  <a href="#" className="text-lg">Rates & FAQs</a>
  <a href="#" className="text-lg">Areas Served</a>
  <a href="#" className="text-lg">Contact</a>
</nav>

        <a
          href="#"
          className="ml-4 border border-white px-4 py-2 rounded hover:bg-white hover:text-[#325c5a] transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
