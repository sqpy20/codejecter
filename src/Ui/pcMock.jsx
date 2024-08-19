import pc from "../assets/bgPc.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PcImg = () => {
    return (
    <div className="absolute top-[100%] w-[50%] left-0 ">
              <LazyLoadImage
              src={pc}
              alt="Logo"
              effect="blur"
              className="rounded-custom"
            />
            </div>);
}
 
export default PcImg;