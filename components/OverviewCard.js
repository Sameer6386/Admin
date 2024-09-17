import React from "react";

const OverviewCard = ({ title, value }) => (
  <div className="bg-zinc-800 p-4 rounded-lg text-center">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-2xl mt-2">{value}</p>
  </div>
);

export default OverviewCard;
