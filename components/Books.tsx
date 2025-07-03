export default function Books() {
    return (
        <section className="bg-white py-12 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <span className="inline-block bg-amber-100 text-gray-800 text-sm font-medium rounded-full px-3 py-1 mb-2">Authored Works</span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Ellie's Books</h2>

 
    <div className="flex gap-6 overflow-x-auto pb-4">
     
      <div className=" bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img src="/images/babydolls.jpg" alt="Baby Dolls and Ninja Swords" className="h-64 object-cover w-full" />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-bold text-gray-900 text-md leading-tight">Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy</h3>
          <p className="text-sm text-gray-600">Available on Amazon</p>
          <p className="text-xs text-gray-500">Formats: Kindle & Paperback</p>
          <a href="#" className="mt-2 bg-[#b5d8db] text-gray-800 text-center rounded-md py-2 font-medium hover:bg-[#a6cfd4]">View on Amazon</a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img src="/images/tears.jpg" alt="Frozen Tears" className="h-64 object-cover w-full" />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-bold text-gray-900 text-md leading-tight">Frozen Tears: 15 Stories of Blindness & Hope after Abortion</h3>
          <p className="text-sm text-gray-600">Available on Amazon</p>
          <p className="text-xs text-gray-500">Formats: Kindle & Paperback</p>
          <a href="#" className="mt-2 bg-[#b5d8db] text-gray-800 text-center rounded-md py-2 font-medium hover:bg-[#a6cfd4]">View on Amazon</a>
        </div>
      </div>

    
      <div className=" bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img src="/images/fire.jpg" alt="99 Devotionals" className="h-64 object-cover w-full" />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-bold text-gray-900 text-md leading-tight">99 Devotionals: Heart Reactions and Soul Stretches from the Book of Acts</h3>
          <p className="text-sm text-gray-600">Available on Amazon</p>
          <p className="text-xs text-gray-500">Format: Kindle format</p>
          <a href="#" className="mt-2 bg-[#b5d8db] text-gray-800 text-center rounded-md py-2 font-medium hover:bg-[#a6cfd4]">View on Amazon</a>
        </div>
      </div>

     
      <div className=" bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative">
        <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-600 text-sm">Cover Image Coming Soon</div>
        <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">Coming Soon</span>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-bold text-gray-900 text-md leading-tight">Passion with Principle: How to Turn Romance into Lifelong Love</h3>
          <p className="text-sm text-gray-600">Coming Soon</p>
          <a href="#" className="mt-2 bg-gray-200 text-gray-700 text-center rounded-md py-2 font-medium cursor-not-allowed">Details Coming Soon</a>
        </div>
      </div>
    </div>
  </div>

  
</section>

        


    );}