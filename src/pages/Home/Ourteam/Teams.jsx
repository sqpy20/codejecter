import pic from "/src/assets/Myimg02.jpeg";
import Ginpic from "/src/assets/Ging.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Ourteams = () => {
  const [isHovered, setHovered] = useState(false)
  const teams = [
    {
      image: pic,
      name: "Okechukwu Daniel",
      title: "FrontEnd Dev",
      note: "A frontend wizards turning designs into delightful user experiences.",
    },
    {
      image: Ginpic,
      name: "Ginger-eke Charles",
      title: "Backend Dev",
      note: "A backend maestros weaving magic behind the scenes.",
    },
    {
      image: pic,
      name: "Augustine Austin",
      title: "Devops Dev",
      note: "A devOps gurus orchestrating seamless deployment and automation.",
    },
  ];
  return (
    <>
      <section className=" min-h-screen max-h-fit flex flex-col items-center pb-5 relative">
        <h3 className=" pt-1 text-7xl sm:text-8xl md:text-9xl g:text-9xl font-bold  mb-5 text_stroke_effect absolute top-0 z-10 left-0">
          OUR TEAM
        </h3>
       
        <div className="flex justify-center items-center mt-10 flex-col sm:flex-row md:flex-nowrap">
          {teams.map((team) => {
            return (
              <>
                <motion.div className="flex flex-col items-start  mx-2 w-[80%]  sm:w-[50%]   shadow-xl rounded-xl  my-2 relative overflow-hidden "
                
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                >
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-[10rem] p-0 m-0 max-h-[20rem] min-w-[18rem] "
                  />

                  <motion.div className="absolute pl-2 backdrop-blur-[2px] w-[100%] h-[100%] text-black justify-end flex flex-col pb-10 shadow-md "
                    animate={{ y: isHovered ? 0 : "-100%"}}
                    transition={{duration: 3, type: "spring", bounce:0.5}}
                  // initial={{x:100}}
                  // animate={{ y: isHovered ? 0 : 100}}
                  >
                    <h4 className="roboto-black text-lg my-1">{team.name}</h4>
                    <p className=" caveat">{team.title}</p>
                    <span className="text-sm caveat text-gray-600">
                      {team.note}
                    </span>
                  </motion.div>
                </motion.div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Ourteams;
