import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BGImage from "../../assets/People1.jpg";
import Scroll1 from "../../assets/People2.jpg";
import Scroll2 from "../../assets/People3.jpg";
import "./Style.css";
import Collage from "./Collage.tsx";
import Gallery from "./Gallery.tsx";
import ComponentImages1 from "../ComponentImages/ComponentImages1.tsx";
import ComponentImages2 from "../ComponentImages/ComponentImages2.tsx";
import ComponentImages3 from "../ComponentImages/ComponentImages3.tsx";

const AnimationImages: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handlePageScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleCarouselScroll = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const isAtEnd =
          carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;

        if (isAtEnd) {
          console.log("End of carousel reached. Navigating to new page...");
          navigate("/gallery");
        }
      }
    };

    window.addEventListener("scroll", handlePageScroll);

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleCarouselScroll);
    }

    return () => {
      window.removeEventListener("scroll", handlePageScroll);

      if (carousel) {
        carousel.removeEventListener("scroll", handleCarouselScroll);
      }
    };
  }, [navigate]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden scroll-smooth transition-all duration-1000 ease-in-out">
        <div
          className="absolute top-[-600px] left-0 w-full h-[120vh] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${BGImage})`,
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: "transform",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center z-10">
          <div className="w-full h-full p-12">
            <div className="relative w-full h-full border-2 border-transparent">
              <div className="scale-[0.7] shadow-md ml-[-10vw] mt-[30vh] rounded">
                <ComponentImages1 />
              </div>
              <h1 className="absolute inset-0 flex items-center justify-center font-semibold text-[80px] text-white">
                Wevaha
              </h1>
              <div className="scale-[0.7] shadow-md absolute bottom-0 right-10 rounded">
                <ComponentImages2 />
              </div>
              <div className="scale-[0.4] shadow-md absolute top-[-30px] right-72 rounded">
                <ComponentImages3 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Collage />
    </>
  );
};

export default AnimationImages;
