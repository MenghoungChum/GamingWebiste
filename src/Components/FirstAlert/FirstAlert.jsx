import React, { useEffect, useState } from "react";
import AlertImage from '../../../public/Poster.jpg'
const FirstVisitAlert = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = JSON.parse(sessionStorage.getItem("hasVisited"))

    if (!hasVisited) {
      // Wait 3 seconds before showing the popup
      const timer = setTimeout(() => {
        sessionStorage.setItem("hasVisited", "true");
        setShowPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
          <div className=" p-4 shadow-lg relative md:max-w-[700px] max-w-[90%] animate-fadeIn">
            <button
              className="absolute top-10 -right-5 text-white text-2xl transition-all duration-300 ease-in-out w-8 h-8 rounded-full opacity-50 hover:text-white hover:opacity-100"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <img
              src={AlertImage}
              alt="Welcome"
              className="w-full mt-10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FirstVisitAlert;
