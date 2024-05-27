import { BsCurrencyExchange } from "react-icons/bs";
import bitcoin from "../../../assets/Picture/bitcoin2.svg";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
const Feture = () => {
  const data = [
    {
      title: "Easy To Lead",
      description:
        "It&apos;s easy to lend a helping hand to those in need,especially when we all stick together.",
      logo: (
        <FaHandHoldingUsd className="text-4xl text-[#04fdb7]"></FaHandHoldingUsd>
      ),
    },
    {
      title: "Exchange money",
      description:
        "If you need to exchange money, just hit up the currency exchange at the airport. Easy-peasy.",
      logo: (
        <BsCurrencyExchange className="text-4xl text-[#04fdb7]"></BsCurrencyExchange>
      ),
    },
    {
      title: "Online wallet",
      description:
        "When travelling abroad, don't forget to exchange money at the airport or a local bank.",
      logo: <GiWallet className="text-4xl text-[#04fdb7]"></GiWallet>,
    },
  ];
  return (
    <div>
      <div id="#feature" className=" bg-[#00150F]  ">
        <div className="min-h-screen max-w-[1440px] mx-auto border  hero">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <div className="w-1/2 ">
              <img src={bitcoin} className="object-cover " />
            </div>
            <div className="w-1/2 text-white ">
              <h1 className="mb-10 text-5xl font-bold">
                Experienced trading{" "}
                <span className="text-[#04FDB7]">platform</span> to grow
              </h1>
              <div className="space-y-5">
                {data.map((info, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <div className="p-5 border-2 rounded-full">{info.logo}</div>

                    <div>
                      <h2 className="text-3xl"> {info.title} </h2>
                      <p className="text-lg font-light">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feture;
