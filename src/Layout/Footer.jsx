import Logo from "../assets/cjlogo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Foot = () => {
  const quickLinks = ["About", "Products", "Features", "Contact us"];
  return (
    <>
      <footer className="bg-gray-800 text-slate-300">
        <div
          id="footer_comtainer"
          className="flex px-10 py-3 justify-between "
        >
          <div className="w-[45%]">
            <LazyLoadImage
              src={Logo}
              width={50}
              height={50}
              alt="Logo"
              effect="blur"
            />
            <div className="">
              <p className="">
                we're digital pioneers, crafting innovative solutions for
                success. From captivating websites to intuitive apps, Join us on
                the journey of digital transformation.
              </p>
              <div id="social_footer">
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
          </div>
          <div className=" min-w-[20%] flex-col  mx-10">
            <h6 className=" pt-[20%] pb-[3%] roboto-bold lg:pt-[13%]"> QUICK LINKS</h6>
            {quickLinks.map((entry) => {
              return <p className="py-1">{entry}</p>;
            })}
          </div>
          <div className="  ">
            <h6 className="pt-[10%] pb-[3%] roboto-bold lg:pt-[7%] "> NEWS LETTER</h6>
            <div id="sub_cont" className="flex flex-col justify-between h-[50%]">
                 <p>Subscribe to our newsletter to get our latest update & news</p>
            <div className="">
                <input type="text" />
                <button className="bg-cyan-400 px-2">Enter</button>
            </div>
            </div>
           
          </div>
        </div>
        <div className="flex justify-center items-center border-t-4 pt-1 pb-2 san-reg">
          Copyright 2023 COdeJester Technologies. All Right Reserved.
        </div>
      </footer>
    </>
  );
};

export default Foot;
