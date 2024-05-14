import React from "react";
import { DataMedpart, DataSponsor, DataSupported } from "../../data";

function Sponsor() {
    // const data = <DataSponsor/>;
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
          <div className="border-2 border-[#FF8025] p-4 px-10 md:px-0  rounded-md">
            <div className="pb-5">
                <h2 className="text-white font-extrabold text-center">Sponsored By</h2>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {DataSponsor && DataSponsor.map((e) =>(
              <div className="h-20 w-20">
                <img src={e.img} alt="" className="h-full w-full object-contain" />
              </div>
            ) )}
            </div>
            </div>
          </div>
          <div className="border-2 border-[#FF8025] p-4 px-10 rounded-md">
            <div className="pb-5">
                <h2 className="text-white font-extrabold text-center">Media Partner</h2>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {DataMedpart && DataMedpart.map((e) =>(
              <div className="h-20 w-20">
                <img src={e.img} alt="" className="h-full w-full object-contain" />
              </div>
            ) )}
            </div>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-1 border-2 border-[#FF8025] p-4 px-10 md:px-0 rounded-md">
            <div className="pb-5">
                <h2 className="text-white md:text-center font-extrabold">Sponsored By</h2>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {DataSupported && DataSupported.map((e) =>(
                <div className="h-20 w-20 ">
                <img src={e.img} alt="" className="h-full w-full object-contain hover:scale-105" />
              </div>
            ) )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
