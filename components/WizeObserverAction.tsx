import React, { useRef } from "react";
import { Button } from "primereact/button";

const WiseObserverAction = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="grid justify-center align-center app-primary p-8">
      <div className="flex align-items-center justify-content-center md:flex-row flex-column-reverse">
        <div className="pr-6 text-white">
          <h1>See Wize Observer In Action!</h1>
          <p>
            Its advanced capabilities distinguish between innocent curiosity and
            suspicious behaviors, providing a reliable defense against theft.
            Elevate your shops security with our state-of-the-art system.
          </p>
          <Button
            type="button"
            label="Watch Full Video"
            rounded
            className="bg-white text-gray-900 text-xl border-none flex align-items-center justify-content-center font-normal line-height-3 py-2 px-4"
            onClick={handleFullScreen}
          />
        </div>
        <div className="video-preview">
          <video
            ref={videoRef}
            src="/videos/observer.mp4"
            loop
            autoPlay
            muted
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WiseObserverAction;
