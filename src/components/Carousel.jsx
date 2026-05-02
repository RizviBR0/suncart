"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const slides = [
    {
        id: 1,
        image: image1,
        alt: "Summer sale banner",
    },
    {
        id: 2,
        image: image2,
        alt: "Summer essentials banner",
    },
    {
        id: 3,
        image: image3,
        alt: "Sunny day collection banner",
    },
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="mx-auto w-full">
            <div className="relative overflow-hidden rounded-2xl bg-orange-50 shadow-sm sm:rounded-3xl">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="relative h-55 min-w-full sm:h-80 md:h-105 lg:h-125"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                priority={slide.id === 1}
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    ))}
                </div>

                <Button
                    isIconOnly
                    radius="full"
                    variant="flat"
                    onPress={goToPreviousSlide}
                    className="absolute left-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 bg-white/80 text-gray-900 shadow-md backdrop-blur-md hover:bg-white sm:left-5 sm:h-11 sm:w-11"
                    aria-label="Previous slide"
                >
                    <MdKeyboardArrowLeft />
                </Button>

                <Button
                    isIconOnly
                    radius="full"
                    variant="flat"
                    onPress={goToNextSlide}
                    className="absolute right-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 bg-white/80 text-gray-900 shadow-md backdrop-blur-md hover:bg-white sm:right-5 sm:h-11 sm:w-11"
                    aria-label="Next slide"
                >
                    <MdKeyboardArrowRight />
                </Button>

                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                                ? "w-8 bg-orange-500"
                                : "w-2.5 bg-white/80 hover:bg-white"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;