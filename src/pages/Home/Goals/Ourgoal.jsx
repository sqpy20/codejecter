import image from "../../../assets/bgPc.jpg"
import mage from "../../../assets/apc.jpg"
import age from "../../../assets/147.jpg"
const Goals = () => {
  return (
    <>
      <section className="relative h-fit">
        <div className="bg-blue-800 w-[100vw] h-fit relative pb-40 pt-20">
          <svg
            id="wave"
            viewBox="0 0 1440 240"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 opacity-20 h-[50vmin]"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="#1b3fc0" offset="0%"></stop>
                <stop stop-color="#9cade8" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M0,24L15,52C30,80,60,136,90,160C120,184,150,176,180,164C210,152,240,136,270,120C300,104,330,88,360,92C390,96,420,120,450,140C480,160,510,176,540,184C570,192,600,192,630,164C660,136,690,80,720,68C750,56,780,88,810,84C840,80,870,40,900,24C930,8,960,16,990,32C1020,48,1050,72,1080,68C1110,64,1140,32,1170,48C1200,64,1230,128,1260,140C1290,152,1320,112,1350,84C1380,56,1410,40,1440,52C1470,64,1500,104,1530,104C1560,104,1590,64,1620,72C1650,80,1680,136,1710,140C1740,144,1770,96,1800,100C1830,104,1860,160,1890,160C1920,160,1950,104,1980,72C2010,40,2040,32,2070,40C2100,48,2130,72,2145,84L2160,96L2160,240L2145,240C2130,240,2100,240,2070,240C2040,240,2010,240,1980,240C1950,240,1920,240,1890,240C1860,240,1830,240,1800,240C1770,240,1740,240,1710,240C1680,240,1650,240,1620,240C1590,240,1560,240,1530,240C1500,240,1470,240,1440,240C1410,240,1380,240,1350,240C1320,240,1290,240,1260,240C1230,240,1200,240,1170,240C1140,240,1110,240,1080,240C1050,240,1020,240,990,240C960,240,930,240,900,240C870,240,840,240,810,240C780,240,750,240,720,240C690,240,660,240,630,240C600,240,570,240,540,240C510,240,480,240,450,240C420,240,390,240,360,240C330,240,300,240,270,240C240,240,210,240,180,240C150,240,120,240,90,240C60,240,30,240,15,240L0,240Z"
            ></path>
          </svg>
          <div className="flex justify-center items-center pt-2 pb-5">
            <h4 className="text-2xl roboto-bold text-white border-b-2 ">
              ABOUT US
            </h4>
          </div>

          <div className="flex justify-center text-slate-300 sans-bold">
            <p className="w-[70%] text-center text-xl">
              At CodeJester Technologies, we're digital pioneers, crafting
              innovative solutions for success. From captivating websites to
              intuitive apps, we drive growth through creativity and technology.
              Join us on the journey of digital transformation.
            </p>
          </div>
        </div>
        <div className="relative min-h-[10rem] max-h-fit">
            <div className="flex absolute top-[-50%] justify-around w-[100%] items-center flex-wrap">
            {/* <img src={mage} loading="lazy" alt="" className=" w-[12.25rem] h-[7rem] rounded-xl shadow-xl"/> */}
          <img src={age} loading="lazy" alt="" className=" w-[25rem] h-[12rem] rounded-xl shadow-xl mt-2 bounce"/>
          <img src={image} loading="lazy" alt="" className=" w-[25rem] h-[12rem] rounded-xl shadow-xl bounce hidden sm:block"/>

          {/* <img src={age} loading="lazy" alt="" className=" w-[12.25rem] h-[7rem] rounded-xl shadow-xl"/> */}
        </div>
        </div>
        
      </section>
    </>
  );
};

export default Goals;
