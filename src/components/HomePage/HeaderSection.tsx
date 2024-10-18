import React from "react";
import headerImage from "../../assets/teacher.png";
import Image from "next/image";
import PrimaryButton from "../UI/PrimaryButton";

const HeaderSection = () => {
  return (
    <div className="mt-5 grid md:grid-cols-2 gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-between items-center min-h-[80vh]">
      <div>
        <Image className="rounded-lg" src={headerImage} alt="Teacher" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-accent font-mono ">TITLE HERE</h3>
        <p className="text-justify my-3 lg:my-5 font-serif text-sm md:text-md lg:text-xl xl:text-2xl 2xl:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit animi facere dicta nobis sed. Non, cupiditate ullam. Numquam, animi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde vero officia repellat non laborum quia, iusto nostrum cum maxime? </p>
        <PrimaryButton title="Explore More"></PrimaryButton>
      </div>
    </div>
  );
};

export default HeaderSection;
