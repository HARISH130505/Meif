"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const works = [
  { image: "/img1.jpg" },
  { image: "/img2.jpg" },
  { image: "/img3.jpg" },
  { image: "/img4.jpg" },
  { image: "/img5.jpg" },
  { image: "/img6.jpg" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 px-6 min-h-screen font-roboto">
      <div className="flex flex-col py-6 items-center md:flex-row md:justify-evenly">
        <div className="md:w-[200] text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-black">
            A Socio-<span className="text-green-600">Enviro</span>-Educational Initiative
          </h1>
        </div>
        <div className="relative w-full max-w-md h-[300px] md:h-[500px] overflow-hidden mt-2 md:mt-0">
          <Image
            src={works[currentIndex].image}
            alt="pic"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl transition-opacity duration-500 ease-in-out"
          />
        </div>
      </div>
      <div className="text-xl mt-5 py-5 px-6 md:px-10 bg-[#3D8D7A] rounded-t-2xl">
        <h1 className="font-bold text-[#FBFFE4] text-3xl mb-4">How MEIF Formed??</h1>
        <p>
          Our Ancient people lives were intertwined with Nature. Their wisdom considered and saw the Mountain, River, Trees and Earth as embodiment of Divine. They did know that the desecration of natural elements lead to destruction of mankind. The Earth, Water and Trees, hence, are considered sacred in our Culture. The hectic race in modern life has sidelined all these values and priorities changed. Deforestation, Industrial pollution and people lifestyle have a say on our lives.
          The result is evident by way of Global warming, Ozone zone depletion and devastating effects on monsoons and temperature.
          Health and Hygiene are highly neglected in villages. Economic woes are bigger for them than these basics. As a part of this society, It was thought an Initiative to care for these issues, is required. Hence, Mother Earth India was born.
        </p>
      </div>
      <div className="px-6 py-5 flex flex-col md:flex-row justify-evenly items-center bg-[#FBFFE4] rounded-b-2xl">
        <div className="text-center mb-6 md:mb-0">
          <div className="font-black text-4xl md:text-5xl text-green-600 px-2">
            <CountUp end={500} duration={2.5} separator="," />+
            <h1 className="text-2xl md:text-3xl text-gray-600">Trees Planted</h1>
          </div>
          <Image
            src="/plant.jpg"
            alt="plants"
            width={150}
            height={150}
            className="rounded-full py-3 mx-auto"
          />
        </div>
        <div className="text-center mb-6 md:mb-0">
          <div className="font-black text-4xl md:text-5xl">
            <CountUp end={50} duration={2.5} separator="," />+
            <h1 className="text-2xl md:text-3xl text-gray-600">Educational Initiatives</h1>
          </div>
          <Image
            src="/ed.jpg"
            alt="ed"
            width={150}
            height={150}
            className="rounded-full py-3 mx-auto"
          />
        </div>
        <div className="text-center">
          <div className="font-black text-4xl md:text-5xl">
            <CountUp end={10} duration={2.5} />+
            <h1 className="text-2xl md:text-3xl text-gray-600">Years of Impact</h1>
          </div>
          <Image
            src="/years.png"
            alt="years"
            width={150}
            height={150}
            className="py-3 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}