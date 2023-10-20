import React from "react";

function SurpriseBtn({ color, changeColor }) {
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
          onClick={changeColor}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: color }}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default SurpriseBtn;
