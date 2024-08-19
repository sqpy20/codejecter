import Logo from "../assets/cjlogo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Nav = () => {
  return (
    <nav className="micro-5-regular z-50">
      <div
        id="contact_nav_top"
        className=" flex justify-between flex-wrap roboto-reg-italic text-white p-5 items-center sm-50 relative z-[-1] sm:z-20 max-sm:h-20"
      >
        <div id="right_side" className="md:flex fit_content flex-wrap	">
          <div className="flex">
            <a href="mailto:codejester.tech@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="mailto:codejester.tech@gmail.com">
              codejester.tech@gmail.com
            </a>
          </div>
          <div className="">
            <a href="">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="">(+234) 818-106-6204</a>
          </div>
        </div>
        <div id="left_side" className="fit_content">
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center min-h-10">
        <div
          id="nav_top"
          className="flex text-center items-center justify-evenly text-gray-500 caveat bg-white md:mt-5 py-2 w-[90vw] double relative"
        >
          <p className="hidden sm:block">Home</p>
          <p className="hidden sm:block">PRODUCTS</p>
          <div className="blob z-30 bg-white absolute sm:10  p-5 w-[fit]">
            <LazyLoadImage
              src={Logo}
              width={50}
              height={50}
              alt="Logo"
              effect="blur"
            />
            <h1>CodeJester</h1>
          </div>

          <p className=" ml-32 hidden sm:block">Features</p>
          <p className="hidden sm:block">ANOTHER</p>
          <p className="block absolute left-10"> <i class="fa-solid fa-bars text-blue-800 text-2xl sm:hidden"></i></p>
          <p className=" absolute right-3 sm:hidden block">Explore</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
