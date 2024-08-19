import Nav from "../../../Layout/Navbar";
import Logo from "../../../assets/ipm14.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TheHero = () => {
  return (
    <main className="  bg-blue-800 h-screen w-[100%] overflow-hidden relative overflow-x-hidden ">
      <Nav />
      <div className="z-10 relative flex flex-col h-[fit] w-[50%] justify-center items-center ">
        <section className=" text-white sans-bold  sm:text-3xl ">
          <h1 className="relative top-20 left-10 lg:left-25 text-3xl md:text-4xl lg:text-4xl">
            Where innovation meets code, and websites come to life.
          </h1>
          <div className=" text-blue-800 first-letter:relative ml-7  mt-24 caveat bg-white rounded-[60px] p-[1.5vw] w-fit cursor-pointer">
            <p className="w-[100%] text-[2vw] lg:text-[1.5vw] ">
             START PROJECT
              {" "+">>>"}
            </p>
          </div>
        </section>
      </div>

      <div className="bg-black ">
        <div className="cont absolute top-[40%] right-0 overflow-hidden ">
          <div class="l-shape-container ">
            <div class="vertical bg-blue-900"></div>
            <div class="horizontal bg-blue-900"></div>
          </div>
        </div>
        <div className="cont absolute top-[50%] right-0">
          <div class="l-shape-container w-[50vw] ">
            <div class="vertical bg-blue-900"></div>
            <div class="horizontal bg-blue-900"></div>
          </div>
        </div>
        <div className="cont absolute top-[60%] right-0 ">
          <div class="l-shape-container w-[40vw] ">
            <div class="vertical bg-blue-900"></div>
            <div class="horizontal bg-blue-900"></div>
          </div>
        </div>
      </div>
      <div className="absolute hidden sm:block  sm:right-2 sm:bottom-[40vh]  lg:bottom-[40vh] lg:right-32 md:bottom-[40vh] md:right-32  z-10 ">
        <LazyLoadImage
          src={Logo}
          width={250}
          height={50}
          alt="Logo"
          effect="blur"
          DelayMethod="debounce"
        />
      </div>
    </main>
  );
};

export default TheHero;
