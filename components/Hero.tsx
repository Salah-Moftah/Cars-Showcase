"use client";

import Image from "next/image"
import CustomButton from "./CustomButton"


function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car — quick and super easy!
        </h1>
        <p className="hero__subtitle">
          Simplify your car rental experience with our easy booking process.
        </p>
        <CustomButton title='Explore Cars'
        containerStyles='bg-primary-blue
        text-white rounded-full mt-10'
        handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
          src='/Hero.png'
          alt="hero photo"
          fill
          className='object-contain'
          />
          </div>
          <div className="hero__image-overlay">
        </div>
      </div>
    </div>
  )
}

export default Hero