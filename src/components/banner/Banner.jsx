import './Banner.css'
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">Ginny &amp; Georgia</h1>
        <h1 className="banner_description">
          Angsty and awkward fifteen year old Ginny Miller often feels more
          mature than her thirty year old mother, the irresistible and dynamic
          Georgia Miller...
        </h1>
        <div className='banner_buttons'>
          <button className="banner_button"><FaPlay/>Play</button>
          <button className="banner_info"><FaCircleInfo/> More Info</button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
};

export default Banner;
