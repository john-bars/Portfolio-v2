import React from "react";

const Navbars = () => {
  return (
    <div className="fixed top-8 bottom-8 right-8 z-50 flex flex-col justify-between">
      <div className="text-secondary font-bold text-xl">bars.</div>
      <div className="flex flex-col gap-2 text-primary text-lg">
        <h3 className="text-secondary">about</h3>
        <h3 className="text-secondary">portfolio</h3>
        <h3 className="text-secondary">contact</h3>
      </div>
    </div>
  );
};

export default Navbars;
