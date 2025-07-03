export default function Bookapp() {
  return (
   
<div
  id="bookAppointment"
  className="bg-[#325c5a] !mt-0 mx-0 py-12 md:py-12 xl:py-20 md:gap-6  px-4 md:px-[10%] relative lg:flex lg:gap-3 bg-contrast justify-start items-start"
>
  <div className="lg:flex-3 flex flex-row custom850:flex-col lg:flex-row justify-between items-center gap-8">
    

    <p className=" text-[#b5d8db] font-bold text-4xl lg:text-4xl text-main1 flex gap-3 lg:gap-4 relative text-center lg:text-left"> 
      Schedule A Consultation
    </p>

    <p className="text-[#b5d8db] font-500  text-lg lg:text-lg xl:text-xl text-main1 relative text-center font-para">
      Ellie Shumaker is currently accepting new clients. Available for online and in-person sessions.
    </p>

    <div className=" text-[#b5d8db] flex gap-2 flex-col items-center justify-self-center font-para">
      <a href="/book">
        <span className="sr-only">Call and book appointment with Ellie Shumaker</span>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-md lg:text-lg lg:p-6 bg-transparent border-2 text-main1 border-lightMain1 hover:bg-lightMain1 hover:text-darkMain1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mr-2 h-5 w-5"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            <path d="M20 3v4"/>
            <path d="M22 5h-4"/>
            <path d="M4 17v2"/>
            <path d="M5 18H3"/>
          </svg>
          Start Healing
        </button>
      </a>
    </div>
  </div>
</div>

  );
}
