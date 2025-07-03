export default function LatestBlogs() {
    return (
        <div className="bg-[#f6f6f6] relative bg-lightMain1 p-4 py-12 md:py-16 lg:py-28 md:px-[10%]">
  
  <div className=" text-black mx-10 max-w-2xl lg:mx-0">
    <h2 className="text-4xl font-extrabold text-darkMain1 lg:text-5xl">
      Latest Blogs
    </h2>
    <p className="mt-2 lg:mt-3 text-lg leading-8 font-para">
      Discover helpful insights and strategies from Ellie Shumaker to improve your relationships and personal well-being.
    </p>
  </div>

  
  <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <div className="col-span-3 text-center py-12">
      <p className="text-xl font-para text-gray-600">
        No posts available at the moment.
      </p>
    </div>
  </div>
</div>

    );
}
