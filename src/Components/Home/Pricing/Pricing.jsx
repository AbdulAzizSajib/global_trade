import { BsCheck2Square } from "react-icons/bs";

const Pricing = () => {
  const dataInfo = [
    {
      title: "Basic",
      price: 99,
      feature: [
        { text: "Weekly online Meeting" },
        { text: "Unlimited learning access" },
        { text: "24/7 technical support" },
        { text: "Personal training" },
      ],
    },
    {
      title: "Standard",
      price: 149,
      feature: [
        { text: "Weekly online Meeting" },
        { text: "Unlimited learning access" },
        { text: "24/7 technical support" },
        { text: "Personal training" },
        { text: "Personal meeting and support" },
      ],
    },
    {
      title: "premium",
      price: 199,
      feature: [
        { text: "Including Standard feature" },
        { text: "Unlimited learning access" },
        { text: "24/7 technical support" },
        { text: "Personal training" },
      ],
    },
  ];

  return (
    <div className="bg-[#0d211c] ">
      <div className="max-w-[1440px] mx-auto border">
        <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center text-white">
              <h2 className="text-4xl font-bold lg:text-5xl">
                Choose your <span className="text-[#04FDB7]">best plan</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-stretch mx-8 lg:px-24 ">
              {dataInfo.map((data, index) => (
                <div
                  key={index}
                  className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
                >
                  <div className="flex group hover:border-[#04FDB7]  rounded-2xl flex-col flex-grow p-6 space-y-6 border-2 bg-[#21342f] text-white  shadow sm:p-8 dark:bg-gray-50">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold">{data.title}</h4>
                      <h2 className="text-xl">
                        <span className="text-3xl font-bold group-hover:text-[#04FDB7]">
                          ${data.price}/
                        </span>
                        Monthly
                      </h2>
                    </div>

                    <div className="font-light border"></div>

                    <ul className="flex-1 mb-6 dark:text-gray-600">
                      {data.feature.map((list, listIndex) => (
                        <li key={listIndex} className="flex mb-2 space-x-2">
                          <BsCheck2Square className="text-lg group-hover:text-[#04FDB7]" />
                          <span className="text-lg">{list.text}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="inline-block rounded-xl px-5 group-hover:text-black group-hover:bg-[#04FDB7] py-3 font-semibold tracking-wider text-center border  dark:bg-default-600 dark:text-gray-50"
                    >
                      Chose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
