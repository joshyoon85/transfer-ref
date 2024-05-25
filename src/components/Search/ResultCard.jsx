import React from "react";

// {
//   playerName: 'Cristiano Ronaldo',
//   age: 36,
//   nationality: 'Portugal',
//   prevTeam: 'Juventus',
//   newTeam: 'Manchester United',
//   transferDate: '2021-08-31',
//   transferType: 'Transfer',
//   transferFee: '€15 million',
//   transferWindow: '2021 Summer'
// }

export default function ResultCard({ data }) {
  // console.log(data);
  return (
    <div
      className="flex flex-col items-center justify-center 
      min-h-48 p-4 text-sm
    border hover:border-primary-light-blue rounded-lg"
    >
      <div className="flex gap-1">
        <p>{data.playerName}</p>
        <div className="flex">
          <p>(</p>
          <p>{data.age}</p>
          <p>)</p>
        </div>

        {/* TODO: change nationality text to image */}
        {/* <p>{data.nationality}</p> */}
      </div>

      <div className="flex gap-1">
        <p>{data.prevTeam}</p>
        <p> → </p>
        <p>{data.newTeam}</p>
      </div>

      <div className="flex gap-1">
        <p>{data.transferFee}</p>
        <p>{data.transferWindow}</p>
      </div>
    </div>
  );
}
