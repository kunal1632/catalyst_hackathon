import React from "react";

const TagSection = () => {
  const skills = [
    "c++",
    "python",
    "javascript",
    "react",
    "mongoDB",
    "AI/ML",
    "DSA",
    "OPPS",
  ];
  function clickHandler() {}
  return (
    <div className="px-3 py-2 bg-white rounded-lg mb-5">
      <h1 className="text-purple text-[1.2rem] font-bold mb-3">
        Popular Skills
      </h1>
      <div className="flex  items-center gap-1 flex-wrap">
        {skills.map((skill) => {
          return (
            <button
              onClick={clickHandler}
              className=" border rounded-xl px-2 bg-[#ff00ee42]"
            >
              # {skill}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TagSection;
