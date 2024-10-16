import React from "react";
import googlePlayIcon from "../assets/icons/playstoreicon.png";
import appStoreIcon from "../assets/icons/apple-logo.png";

function AppStoreButton() {
  return (
    <div className="mt-4 flex gap-6">
      <button className="flex gap-2 rounded-md px-2 py-1 shadow-lg">
        <img className="h-8 object-cover" src={googlePlayIcon.src}></img>

        <div className="flex flex-col items-start">
          <span className="text-xs">Get it on</span>
          Google Play
        </div>
      </button>
      <button className="flex gap-2 rounded-md px-2 py-1 shadow-lg">
        <img className="h-8 object-cover" src={appStoreIcon.src}></img>
        <div className="flex flex-col items-start">
          <span className="text-xs">Get it on</span>
          App store
        </div>
      </button>
    </div>
  );
}

export default AppStoreButton;
