import React from "react";
import Wmap from "./world_map.png";

export default function Volunteer() {
  return (
    <div className="volunteer">

      <div>
        <img src={Wmap} className = " w-full object-cover" alt="" />
      </div>
    </div>
  );
}

