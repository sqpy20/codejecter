import age from "../../../assets/147.jpg";
import mage from "../../../assets/bgpc2.jpg";
const OurServices = () => {
  const services = [
    {
      icon: (
        <i className="fa-solid fa-laptop bg-blue-800 text-white p-5 rounded-full w-fit"></i>
      ),
      serviceName: "Website",
      note: "We transform visions into immersive online experiences.",
    },
    {
      icon: (
        <i className="fa-solid fa-mobile-screen-button bg-blue-800 text-white p-5 rounded-full w-fit"></i>
      ),
      serviceName: "Mobile App",
      note: "We transform visions into immersive online experiences.",
    },
    {
      icon: (
        <i className="fa-solid fa-gear bg-blue-800 text-white p-5 rounded-full w-fit"></i>
      ),
      serviceName: "Providing Digital Solutions",
      note: "Empowering businesses with cutting-edge digital strategies.",
    },
    {
      icon: (
        <i className="fa-solid fa-user bg-blue-800 text-white p-5 rounded-full w-fit"></i>
      ),
      serviceName: " User Experience",
      note: " We create user-centric design that transforms clicks into connections.",
    },
    {
      icon: (
        <i className="fa-solid fa-book bg-blue-800 text-white p-5 rounded-full w-fit"></i>
      ),
      serviceName: "Education",
      note: " We create user-centric design that transforms clicks into connections.",
    },
    {
      icon: (
        <i className="fa-solid fa-people-roof bg-blue-800 text-white p-5 rounded-full w-fit"></i>
      ),
      serviceName: "Project Management",
      note: " We create user-centric design that transforms clicks into connections.",
    },
  ];
  return (
    <section className=" w-screen  relative ">
            <div className="ball opacity-4 z-[-1]"></div>
            <div className="ball balltwo opacity-4 z-[-1] "></div>

      <div className="flex justify-center items-center">
        <h2 className=" text-xl roboto-bold text-blue-800 pt-5 pb-1 ml-10 border-b-2 w-fit border-blue-800">
          OUR SERVICES
        </h2>
      </div>
      <div className="flex justify-center items-center text-center">
        <h2 className=" text-3xl roboto-bold text-blue-800 pt-5 pb-1 ml-10 ">
          What do we have to offer?
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-around mx-[10%]">
          {services.map((service) => {
            return (
              <div className="icon max-w-[40rem] min-h-[50vh] shadow-2xl  shadow-gray-300 p-2 rounded-3xl  m-2 flex flex-col bg justify-center space-y-2">
                {service.icon}
                <h4 className="roboto-bold">{`<${service.serviceName}/>`}</h4>
                <p className=" text-lg text-gray-500">
                  We transform visions into immersive online experiences.
                </p>
              </div>
            );
          })}
        </div>
      </div>
     {/*  <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div> */}
    </section>
  );
};

export default OurServices;
