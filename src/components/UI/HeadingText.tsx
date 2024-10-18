import React from "react";

const HeadingText = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-secondary">{children}</h2>
  );
};

export default HeadingText;
