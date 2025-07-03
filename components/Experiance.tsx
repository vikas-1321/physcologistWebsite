export default function Experience() {
  return (
    <section
  className="bg-[#325c5a] p-8 min-h-[calc(10vh-10rem)] md:min-h-fit md:px-[10%] md:py-16 xl:py-20 
         grid gap-12 md:grid-cols-2 md:gap-16 
         relative bg-darkMain1/90 text-center md:text-left"
>
 
  <article>
    <div>
      <div className="flex justify-center md:justify-start mb-2 text-lightMain1">
        <span
          id="stat1"
          className="flex tabular-nums text-5xl font-extrabold mb-2"
        >
          8
        </span>
        <span className="flex tabular-nums text-5xl font-extrabold mb-2">+</span>
      </div>
      <span
        className="inline-flex font-semibold xl:text-xl text-lightMain1 mb-2 font-para"
      >
        Years Experience
      </span>
    </div>
    <p className="text-sm text-lightMain1/80 font-para">
      Providing compassionate and effective Individual and Couples Therapy
    </p>
  </article>

  
  <article>
    <div>
      <div className="flex justify-center md:justify-start mb-2 text-lightMain1">
        <span
          id="stat2"
          className="flex tabular-nums text-5xl font-extrabold mb-2"
        >
          500
        </span>
        <span className="flex tabular-nums text-5xl font-extrabold mb-2">+</span>
      </div>
      <span
        className="inline-flex font-semibold xl:text-xl text-lightMain1 mb-2 font-para"
      >
        Individual Client Sessions
      </span>
    </div>
    <p className="text-sm text-lightMain1/80 font-para">
      Helping individuals and couples heal, grow, and find purpose
    </p>
  </article>
</section>

  );
}
