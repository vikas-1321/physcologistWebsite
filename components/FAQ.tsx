export default function FAQ() {
    return (
        <section className="bg-[#b5d8db] px-10 md:px-16 py-12">
  <h2 className="text-black text-4xl font-extrabold text-darkMain1 mb-8">Frequently Asked Questions</h2>
  
  <div className="text-black space-y-4 divide-y divide-gray-600">
    
    <details className="py-4 group cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg lg:text-2xl text-darkMain1">
        What are your fees?
        <span className="transition-transform group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-darkMain1  lg:text-lg">My standerd fee is $200 / individual session and $240 / couples session</p>
    </details>

    <details className="py-4 group cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg lg:text-2xl text-darkMain1">
        Do you take insurance?
        <span className="transition-transform group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-darkMain1  lg:text-lg"> No, but a superbill is provided for self-submission.</p>
    </details>

    <details className="py-4 group cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg lg:text-2xl text-darkMain1">
       Are online sessions available?
        <span className="transition-transform group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-darkMain1 lg:text-lg"> Yes—all virtual sessions via Zoom.</p>
    </details>
    
    <details className="py-4 group cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg lg:text-2xl text-darkMain1">
        What are your office hours?
        <span className="transition-transform group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-darkMain1 lg:text-lg">My office Hours In-person: Tue & Thu, 10 AM–6 PM, Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
    </details>

   
    <details className="py-4 group cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg lg:text-2xl text-darkMain1">
        What geographic areas do you serve?
        <span className="transition-transform group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-darkMain1 lg:text-lg">I am licensed in Virginia and serve clients across the state via telehealth. In-person sessions are available in Richmond, VA.</p>
    </details>

     <details className="py-4 group cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg lg:text-2xl text-darkMain1">
       What is your cancellation policy?
        <span className="transition-transform group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-darkMain1 lg:text-lg">24-hour notice required.</p>
    </details>

    
    <details className="py-4 group cursor-pointer">
      <summary className="flex justify-between items-center font-semibold text-lg lg:text-2xl text-darkMain1">
        What services do you offer?
        <span className="transition-transform group-open:rotate-180">▾</span>
      </summary>
      <p className="mt-2 text-darkMain1 lg:text-lg">I offer individual therapy, couples counseling, faith-based counseling, and support for trauma, grief, anxiety, and personal growth.</p>
    </details>
  </div>
</section>


    );}