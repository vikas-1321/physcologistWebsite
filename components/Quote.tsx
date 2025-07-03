export default function Quote() {
  return (
    <div className="bg-white __className_5f64cf h-[calc(100vh-5rem)] min-h-[700px] md:min-h-fit md:h-auto md:py-16 lg:py-28 flex flex-row lg:flex-row bg-lightMain1 relative items-center justify-center md:px-[10%] candle-owner">
      
      {/* Candle Animation Block */}
      <div className="flex-1 relative w-full min-h-[422px] h-full">
  <div className="wrapper">
    <div className="candles animate-[float_6s_ease-in-out_infinite]">
      <div className="light__wave animate-[flicker_2s_linear_infinite]"></div>

      <div className="candles animate-float">
        <div className="light__wave animate-flicker"></div>

        <div className="candle1 border-darkMain1">
          <div className="candle1__body">
            <div className="candle1__eyes">
              <span className="candle1__eyes-one bg-darkMain1"></span>
              <span className="candle1__eyes-two bg-darkMain1"></span>
            </div>
            <div className="candle1__mouth bg-darkMain1"></div>
          </div>
          <div className="candle1__stick bg-darkMain1"></div>
        </div>

        <div className="candle2 border-darkMain1">
          <div className="candle2__body bg-darkMain1">
            <div className="candle2__eyes">
              <div className="candle2__eyes-one bg-darkMain1 border-darkMain1"></div>
              <div className="candle2__eyes-two bg-darkMain1 border-darkMain1"></div>
            </div>
          </div>
          <div className="candle2__stick bg-darkMain1"></div>
        </div>

        <div className="candle2__fire animate-flicker"></div>
        <div className="sparkles-one animate-float8"></div>
        <div className="sparkles-two animate-float10"></div>
        <div className="candle__smoke-one animate-float7"></div>
        <div className="candle__smoke-two animate-float9"></div>
      </div>
    </div>

    {/* Floor */}
    <div className="floor md:w-[250px] bg-darkMain1"></div>
  </div>
</div>

      {/* Quote Text */}
      <p className="text-black relative flex-1 text-3xl md:text-4xl xl:text-5xl px-4 text-center text-darkMain1">
        “Come to me, all who labor and are heavy laden, and I will give you rest.”
        <br /> — Matthew 11:28
      </p>

      {/* Decorative Flower Image */}
      <img
        alt="flower adornment"
        loading="lazy"
        width="50"
        height="50"
        decoding="async"
        className="md:h-18 md:w-18 lg:h-20 lg:w-20 absolute -bottom-7 right-8 md:right-12 z-[10]"
        srcSet="
          /_next/image?url=%2Fassets%2FscrollFlower_green.webp&w=64&q=75 1x,
          /_next/image?url=%2Fassets%2FscrollFlower_green.webp&w=128&q=75 2x
        "
        src="therapist-website\public\images\flower.webp"
        style={{ color: "transparent", transform: "rotate(3377.4deg)" }}
      />
    </div>
  );
}
