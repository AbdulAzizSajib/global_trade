import effect1 from "../../assets/effects/BG.svg";
import effect2 from "../../assets/effects/shade.svg";
import { IoIosArrowDropright, IoMdArrowDroprightCircle } from "react-icons/io";
import bitcoin from "../../assets/Picture/bitcoin.svg";

const Cover = () => {
  return (
    <div>
      <div className=" bg-[#00150F]">
        <div className="relative min-h-screen hero border  max-w-[1440px] mx-auto">
          <div className="absolute z-30 hidden lg:block top-24 ">
            <img src={effect1} alt="" />
          </div>
          <div className="absolute z-30 hidden lg:block top-24 ">
            <img src={effect2} alt="" />
          </div>
          <div className="relative z-40 flex-col hero-content lg:flex-row">
            <div className="w-1/2">
              <img src={bitcoin} className="" />
            </div>
            <div className="w-1/2 text-white">
              <h1 className="text-6xl font-semibold ">
                Multiply your currency with{" "}
                <span className="text-[#00D094]">tradingo</span>
              </h1>
              <p className="py-6">
                Are you tired of your currency not going as far as it used to?
                Try tradingo and multiply your money! With their user-friendly
                interface and expert market analysis, you&apos;ll be earning
                more in no time.
              </p>
              <div className="flex gap-4">
                <button className="btn border-none bg-[#00D094]">
                  <IoIosArrowDropright className="text-2xl"></IoIosArrowDropright>
                  Get Started
                </button>
                <button className="btn border-none text-white bg-[#142822]">
                  <IoMdArrowDroprightCircle className="text-2xl"></IoMdArrowDroprightCircle>
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
