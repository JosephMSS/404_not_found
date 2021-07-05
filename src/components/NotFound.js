import React, { Fragment } from "react";
import scarecrow from "../images/Scarecrow.png";
export default function NotFound() {
  return (
    <Fragment>
      <div className="container mx-auto grid-rows-4 grid-flow-col">
        <img className="w-72 mx-auto mt-16" src={scarecrow} alt="Scarecrow" />
        <div className="font-SpaceMono font-bold text-5xl leading-relaxed ml-5 mr-2 tracking-tight">
          I have bad news for you
        </div>
      </div>
    </Fragment>
  );
}
