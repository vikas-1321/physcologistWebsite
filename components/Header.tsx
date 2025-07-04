import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#325c5a]  text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-9xl h-30 mx-auto flex justify-between items-center px-6 py-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Serena Blake Logo"
            width={150}
            height={150}
            className="rounded-full"
          />
          <span className="text-3xl font-bold">Serena Blake</span>
        </div>
        <nav className="space-x-6 text-base md:text-lg lg:text-xl font-medium">

  <a href="#" className="text-2xl">Services</a>
  <a href="#" className="text-2xl">About</a>
  <a href="#" className="text-2xl">Testimonials</a>
  <a href="#" className="text-2xl">Rates & FAQs</a>
  <a href="#" className="text-2xl">Areas Served</a>
  <a href="#" className="text-2xl">Contact</a>
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
