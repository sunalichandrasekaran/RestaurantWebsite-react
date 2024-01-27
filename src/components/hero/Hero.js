import React from "react";
import { useState } from "react";
import bgImg from "../../assets/vector3.png";
import biryani1 from "../../assets/biryani2.png";
import biryani2 from "../../assets/biryani3.png";
import biryani3 from "../../assets/biryani5.png";

const ImageList = [
  {
    id: 1,
    img: biryani1,
  },
  {
    id: 2,
    img: biryani2,
  },
  {
    id: 3,
    img: biryani3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(biryani1);

  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* {text content section} */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  Foodie
                </span>{" "}
                Zone
              </h1>
              <p className="text-sm">
                Lorem Ipsum, sometimes referred to as 'lipsum', is the
                placeholder text used in design when creating content. It helps
                designers plan out where the content will sit, without needing
                to wait for the content to be written and approved. It
                originally comes from a Latin text, but to today's reader, it's
                seen as gibberish.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
            </div>
            {/* {image section} */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              {/* {main image section} */}
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px] sm:w-[450px]  mx-auto spin"
                />
              </div>
              {/* {image list section} */}
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => {
                  return (
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="400"
                      data-aos-once="true"
                      alt=""
                      key={item.id}
                      src={item.img}
                      className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                      onClick={() => {
                        setImageId(
                          item.id === 1
                            ? biryani1
                            : item.id === 2
                            ? biryani2
                            : biryani3
                        );
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
