import React from "react";
import { DataMedpart, DataSponsor, DataSupported } from "../../data";

function Sponsor() {
    // const data = <DataSponsor/>;
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
          <div>
            <div className="pb-5">
                <h2 className="text-white font-extrabold">Sponsored By</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {DataSponsor && DataSponsor.map((e) =>(
              <div className="h-20 w-20">
                <img src={e.img} alt="" className="h-full w-full object-contain" />
              </div>
            ) )}
            </div>
          </div>
          <div>
            <div className="pb-5">
                <h2 className="text-white font-extrabold">Media Partner</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {DataMedpart && DataMedpart.map((e) =>(
              <div className="h-20 w-20">
                <img src={e.img} alt="" className="h-full w-full object-contain" />
              </div>
            ) )}
            </div>
          </div>
          <div>
            <div className="pb-5">
                <h2 className="text-white font-extrabold">Sponsored By</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {DataSupported && DataSupported.map((e) =>(
              <div className="h-20 w-20">
                <img src={e.img} alt="" className="h-full w-full object-contain" />
              </div>
            ) )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
