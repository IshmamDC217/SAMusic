import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="hero-background relative z-10 grid place-items-center"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="px-4">
              <div className="text-container max-w-[800px] text-left">
                <h1 className="maintitle mb-5 text-2xl font-bold leading-tight text-[#923c4a] sm:text-4xl md:text-8xl">
                  Samin Ahmed
                </h1>
                <h2 className="title mb-5 text-lg font-semibold leading-tight text-[#8d8d8d] sm:text-2xl md:text-3xl">
                  Singer & Songwriter
                </h2>
                <p className="mb-5 text-base leading-relaxed text-white sm:text-lg md:text-xl max-w-3xl">
                  Samin Ahmed is a versatile musician known for his captivating acoustic and pop songs. In addition to his solo work, he frequently collaborates with friends to create electronic music, showcasing his talent across multiple genres. Samin's unique sound and heartfelt lyrics resonate with listeners, making his music a must-hear for fans of contemporary music. As the lead singer of Packing Dhaka, he brings an extra layer of energy and passion to his performances, solidifying his place in the music scene.
                </p>
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button
                    className="start-button inline-block bg-[#923c4a] px-8 py-4 text-lg font-bold rounded-lg text-white duration-300 ease-in-out hover:bg-[#593039] hover:text-white"
                  >
                    Get in Touch!
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
