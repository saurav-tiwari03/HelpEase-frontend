// components/FeatureSidebar.tsx

import { useState } from "react";

const features = [
  {
    title: "24/7 Support and Instant Response",
    description:
      "Our support team is available round the clock to address any issue, ensuring your queries are resolved promptly.",
  },
  {
    title: "Personalized Support",
    description:
      "Tailored assistance for your unique needs with dedicated support agents available to help.",
  },
  {
    title: "Multilingual and Omnichannel Assistance",
    description:
      "Support in multiple languages across various platforms to ensure you’re always connected.",
  },
  {
    title: "Self-Service Knowledge Base",
    description:
      "Access to a comprehensive library of resources for finding answers at your convenience.",
  },
  {
    title: "Data-Driven Insights for Better Service",
    description:
      "Leverage analytics for personalized recommendations and improved support experiences.",
  },
  {
    title: "Secure & Reliable Support System",
    description:
      "Leverage analytics for personalized recommendations and improved support experiences.",
  },
];

const FeatureSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center justify-around p-4">
      {/* Sidebar */}
      <div className=" flex items-center justify-center ml-24">
        <div className="flex flex-col bg-[#777] rounded-b-full rounded-t-full">
          <div
            onClick={() => setActiveIndex(0)}
            className={`w-2 h-[64px] cursor-pointer rounded-t-full ${
              activeIndex === 0 ? "bg-[#333] rounded-b-full" : "bg-[#777]"
            } duration-300 ease-in-out`}
          ></div>
          <div
            onClick={() => setActiveIndex(1)}
            className={`w-2 h-[64px] cursor-pointer ${
              activeIndex === 1
                ? "bg-[#333] rounded-t-full rounded-b-full"
                : "bg-[#777]"
            } duration-300 ease-in-out`}
          ></div>
          <div
            onClick={() => setActiveIndex(2)}
            className={`w-2 h-[64px] cursor-pointer ${
              activeIndex === 2
                ? "bg-[#333] rounded-t-full rounded-b-full"
                : "bg-[#777]"
            } duration-300 ease-in-out`}
          ></div>
          <div
            onClick={() => setActiveIndex(3)}
            className={`w-2 h-[64px] cursor-pointer ${
              activeIndex === 3
                ? "bg-[#333] rounded-t-full rounded-b-full "
                : "bg-[#777]"
            } duration-300 ease-in-out`}
          ></div>
          <div
            onClick={() => setActiveIndex(4)}
            className={`w-2 h-[64px] cursor-pointer ${
              activeIndex === 4
                ? "bg-[#333] rounded-t-full rounded-b-full"
                : "bg-[#777]"
            } duration-300 ease-in-out`}
          ></div>
          <div
            onClick={() => setActiveIndex(5)}
            className={`w-2 h-[64px] rounded-b-full cursor-pointer ${
              activeIndex === 5 ? "bg-[#333] rounded-t-full" : "bg-[#777]"
            } duration-300 ease-in-out`}
          ></div>
        </div>
        <div>
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 cursor-pointer w-[500px] flex items-center justify-start ${
                activeIndex === index ? "text-xl font-semibold" : "text-lg"
              } duration-300 ease-in-out`}
            >
              {feature.title}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center  items-center">
        <div className="bg-[#333] text-white rounded-md w-[60%] h-[300px] text-center">
          <h2 className="text-2xl font-semibold mb-4 px-8 pt-4 h-[90px]">
            {features[activeIndex].title}
          </h2>
          <div className="h-[1px] w-full bg-white"></div>
          <p className="text-lg p-8">{features[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSidebar;
