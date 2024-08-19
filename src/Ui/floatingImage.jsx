import phone from "../../../assets/floating_phone.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const FloatImg = () => {
    return (
        <div className="absolute top-[35%] w-[20%] right-10 z-[-1]">
              <LazyLoadImage
              src={phone}
              alt="Logo"
              effect="blur"
            />
            </div>);
}
 
export default FloatImg;