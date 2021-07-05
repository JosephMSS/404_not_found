import React, { Fragment } from "react";
import scarecrow from "../images/Scarecrow.png";
export default function NotFound() {
  return (
    <Fragment>
      <div className="container mx-auto grid-rows-2 grid-flow-col">
        <img className="w-72 mx-auto mt-16" src={scarecrow} alt="Scarecrow" />
        <div className="ml-5 mr-2 mt-16">
          <div className="font-SpaceMono font-bold text-5xl text-gray-800 leading-relaxed  tracking-tight">
            I have bad news for you
          </div>
          <div className="text-left mt-14 font-SpaceMono text-gray-700 text-lg pr-8">
            The page you are looking for might be removed or is temporarily
            unavailable
          </div>
        </div>
      </div>
    </Fragment>
  );
}
