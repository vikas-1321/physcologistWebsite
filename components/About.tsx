export default function About() {
  return (
    <section className="bg-[#b5d8db] px-6 md:px-20 py-16 text-darkText font-para">
  <div className="bg-[#b5d8db] max-w-7xl mx-auto flex flex-row custom850:flex-col md:flex-row gap-40 items-center md:items-start">
    <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white h-[400px] w-[400px] md:h-[500px] md:w-[400px]">
      <img
        src="/images/Serena.png"
        alt="Ellie Shumaker"
        className="w-[600px] h-auto object-cover"
      />
      <div className="absolute bottom-0 w-full bg-white/90 p-2 text-sm">
        <p className="text-black font-semibold">Dr. Serena Blake</p>
        <p className="text-xs text-gray-600">PsyD </p>
        <p className="text-xs text-black mt-1 flex items-center gap-1">
          <span className="text-yellow-500">⭐</span>
          <span className="font-semibold">Top Rated</span> | 8+ Years Experience
        </p>
      </div>
    </div>

    <div className="flex-1 space-y-4">
      <span className="inline-block text-xs bg-yellow-100 text-gray-800 px-2 py-1 rounded-full">
        About Dr. Serena Blake, PsyD - Experienced Christian Therapist in  Los Angeles, CA
      </span>

      <h2 className="text-black text-3xl md:text-4xl font-bold mt-2">Hi I'm Serena Blake</h2>

      <p className="text-black text-base md:text-lg">
  With over <strong>8 years of dedicated clinical experience</strong> and more than 500 client sessions, I specialize in helping individuals and couples navigate anxiety, trauma, and relationship challenges. I truly enjoy working with people from all walks of life—each with their own stories, strengths, and goals. My focus is to support you with practical tools and compassionate care on your path to healing.
</p>

<p className="text-black text-base md:text-lg">
  My approach integrates <strong>evidence-based therapies</strong> like cognitive-behavioral therapy and mindfulness, along with a deep commitment to <strong>personalized, faith-sensitive guidance</strong>. I strive to help you experience <strong>inner peace</strong>, stronger connections, and a renewed sense of purpose—emotionally and spiritually.
</p>

<p className="text-black text-base md:text-lg">
  Whether you're seeking to recover from <strong>past trauma</strong>, build healthier relationships, or simply grow into your best self, I offer a safe and supportive environment—in person at my Los Angeles office on Maplewood Drive or virtually through Zoom. Let's work together toward a more meaningful and fulfilling life.
</p>

    </div>
  </div>

  <div className="mt-16 max-w-7xl mx-auto text-center">
    <h3 className="text-black text-xl font-bold mb-6">Featured In</h3>
    <div className="flex flex-wrap justify-center items-center gap-6">
      <a href="https://www.psychologytoday.com/us/therapists/" target="_blank" rel="noopener">
        <img src="/images/psychologytoday.webp" alt="Psychology Today" className="h-8" />
      </a>
      <a href="https://www.theravive.com/therapists/" target="_blank" rel="noopener">
        <img src="/images/theravive.webp" alt="Theravive" className="h-8" />
      </a>
      <a href="https://www.christiancounselordirectory.com/Therapist/" target="_blank" rel="noopener">
        <img src="/images/christian-directory.webp" alt="Christian Directory" className="h-8" />
      </a>
      
    </div>
  </div>

    
        
</section>



  );
}