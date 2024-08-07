import React from "react";

function ProductDescription() {
  return (
    <>
      <h3 className="font-semibold text-xl my-3 font-poppins text-[#343434]">
        Description
      </h3>
      <div className="font-poppins font-normal text-[#343434] mt-8 space-y-1">
        <p>
          (Renewed) Toshiba 8,000 BTU 115-Volt Portable Air Conditioner for
          rooms up to 250 sf
        </p>
        <p>
          Brand Toshiba Capacity 0.6 Tons Cooling Power8000 British. Thermal
          Units Special Feature Portable Product Dimensions13"D x 17.1"W x
          28.3"HSeasonal Energy
        </p>
        <p>
          Efficiency Ratio (SEER)2.6ColorWhiteVoltage115 Volts Refrigerant
          410APower Source Corded Electric
        </p>
        <p> About this item</p>
        <ul className="list-disc list-outside text-base space-y-1 font-normal ml-8 text-[#343434]">
          <li className="p-0">
            Quick and easy to setup in vertical or horizontal windows from 19.5"
            to 62" with the included snap-together window kit
          </li>
          <li className="p-0">
            Light and mobile with a 4-wheel design for easy room-to-room
            portability
          </li>
          <li className="p-0">
            3-in-1 comfort with superior cooling, circulation and
            dehumidification settings for rooms up to 250 sq ft and auto
            evaporation technology
          </li>
          <li className="p-0">
            Digital control panel with LED thermostat and easy to use LCD remote
            control included
          </li>
          <li className="p-0">
            Evenly distribute cooled air throughout your room with the Louver
            Auto-Swing feature
          </li>
          <li className="p-0">
            Let the air conditioner work on your schedule with the 24-hour Timer
            or find you the best cool setting for your favorite spot on the
            couch with the Follow Me feature. You can also run the AC in
            Automatic mode, save you energy with the ECO mode, or adjust
            settings overnight with the intelligent Sleep preset
          </li>
          <li className="p-0">
            Auto restart function saves your settings in case of a power outage
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductDescription;
