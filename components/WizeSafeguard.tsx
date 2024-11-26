import React from "react";
import { Button } from "primereact/button";

const WizeSafeguard = () => {
  return (
    <div className="cta-container px-4 text-center py-7 app-primary flex align-items-center justify-content-center flex-column text-white">
      <h1 className="w-7 line-height-3 mb-4">
        Wizely Safeguard Your Assets With Our Advanced Theft Detection Software.
      </h1>
      <Button
        type="button"
        label="Book a Demo Now"
        rounded
        className="bg-white text-gray-900 text-xl border-none flex align-items-center justify-content-center font-normal line-height-3 py-2 px-4 "
      ></Button>
    </div>
  );
};

export default WizeSafeguard;
