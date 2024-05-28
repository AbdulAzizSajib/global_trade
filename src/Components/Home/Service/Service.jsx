import { FaBitcoin, FaCommentsDollar } from "react-icons/fa";
import { GiCrystalGrowth } from "react-icons/gi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { PiBank } from "react-icons/pi";
import { TbWorldDollar } from "react-icons/tb";

const Service = () => {
  const data = [
    {
      title: "social assistant that is flexible",
      description:
        "Looking for a social assistant that is flexible? Look no further! Our team of assistants is here to help.",
      logo: <GiCrystalGrowth className="text-4xl "></GiCrystalGrowth>,
    },
    {
      title: "modules for smart trading",
      description:
        "There are tons of modules for smart trading out there, but finding the right ones takes time and research.",
      logo: <FaBitcoin className="text-4xl"></FaBitcoin>,
    },
    {
      title: "reporter's news analyst",
      description:
        "As a news analyst, the reporter observed various stories unfolding, providing casual yet insightful analysis on each.",
      logo: <IoAnalyticsOutline className="text-4xl"></IoAnalyticsOutline>,
    },
    {
      title: "trading cryptocurrency platform",
      description:
        "Have you checked out any new rcryptocurrency platforms? I hear there are some exciting ones coming soon!",
      logo: <TbWorldDollar className="text-4xl"></TbWorldDollar>,
    },
    {
      title: "Changes to exchange orders",
      description:
        "Hey, just wanted to give you a heads up that there have been some changes to exchange orders recently.",
      logo: <FaCommentsDollar className="text-4xl"></FaCommentsDollar>,
    },
    {
      title: "price notification module",
      description:
        "So I added a price notification module to my online shopping app, and now I'm saving money like crazy!",
      logo: <PiBank className="text-4xl"></PiBank>,
    },
  ];
  return (
    <div className="bg-[#0d211c] ">
      <div className="min-h-screen flex flex-col justify-center border  max-w-[1440px] mx-auto">
        <div className="mb-16 text-center text-white ">
          <h2 className="text-5xl font-semibold">
            <span className="text-[#04FDB7]">Services</span> We Offer
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            quasi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((box, index) => (
            <div
              key={index}
              className="flex group bg-[#21342f] flex-col items-center justify-center p-4 space-y-2 border border-transparent hover:border-[#04FDB7] rounded-2xl"
            >
              <div className="p-5 bg-white group-hover:bg-[#00150f] group-hover:text-[#04FDB7] border-2 rounded-full">
                {box.logo}
              </div>
              <h2 className="text-3xl font-bold text-white">{box.title}</h2>
              <p className="text-white">{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
