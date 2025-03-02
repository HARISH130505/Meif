import React from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

const works = [
    {
        desc: "MEIF planting saplings at Keelavastha Chavady.",
        date:"Oct 6,2024",
        w1: "/img1.jpg",
        w2: "/img7.jpg",
        w3: "/img8.jpg"
    },
    {
        desc: "Mother Earth India Donated Echo T- Shirts to the students of Panchayat Union Middle School at Keelavastha Chavady, Thanjavur.",
        date:"Oct 9,2023",
        w1: "/img2.jpg",
        w2: "/img10.jpg",
        w3: "/img11.jpg"
    },
    {
        desc: "Palmyra seeds planting at Chennai coast.",
        date:"Oct 1,2023",
        w1: "/img3.jpg",
        w2: "/img12.jpg",
        w3: "/img9.jpg"
    },
    {
        desc: "Fruit saplings gifted to school children.",
        date:"April 11,2023",
        w1: "/img4.jpg"
    },
    {
        desc: "MEIF participated in Vaduvur lake cleaning.",
        date:"Feb 18,2023",
        w1: "/img5.jpg",
        w2: "/img14.jpg",
        w3: "/img15.jpg"
    },
    {
        desc: "Participated in inaugural of Pasumai Thamizhagam Iyakkam.",
        date:"Sep 24,2022",
        w1: "/img19.jpg",
        w2: "/img20.jpg",
    },
    {
        desc: "Planted saplings at Chennai Corporation school, Madipakkam.",
        date:"Sep 16,2022",
        w1: "/img21.jpg",
        w2: "/img22.jpg",
    },
    {
        desc: "Planting saplings.",
        date:"Sep 13,2022",
        w1: "/img16.jpg",
        w2: "/img17.jpg",
        w3: "/img18.jpg"
    },
    {
        desc: "Library donated to P. U. M. School, Keelavastha Chavady.",
        date:"Mar 23,2022",
        w1: "/img6.jpg",
        w2: "/img23.jpg",
        w3: "/img24.jpg"
    }
];

const Page = () => {
    return (
        <div className="p-4 font-roboto">
            <div className='w-full'>
                <h1 className='py-4 text-3xl font-bold text-center'>Our Past Events</h1>
                {works.map((work, index) => (
                    <div key={index} className="mb-8 bg-[#FBFFE4] px-6 py-4 m-3 rounded-xl">
                        <div className='md:flex justify-between flex-row-reverse py-2'>
                            <p className='py-4 flex md:py-0'><Calendar className='mr-2'/>{work.date}</p>
                            <p className="font-semibold text-lg mb-2">{work.desc}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
                            {work.w1 && (
                                <div className="relative aspect-w-16 aspect-h-9 h-64 transition-transform transform hover:scale-105 duration-300 bg-gray-50">
                                    <Image
                                        src={work.w1}
                                        alt="work image"
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                                    />
                                </div>
                            )}
                            {work.w2 && (
                                <div className="relative aspect-w-16 aspect-h-9 h-64 transition-transform transform hover:scale-105 duration-300 bg-gray-50">
                                    <Image
                                        src={work.w2}
                                        alt="work image"
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                                    />
                                </div>
                            )}
                            {work.w3 && (
                                <div className="relative aspect-w-16 aspect-h-9 h-64 transition-transform transform hover:scale-105 duration-300 bg-gray-50">
                                    <Image
                                        src={work.w3}
                                        alt="work image"
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;