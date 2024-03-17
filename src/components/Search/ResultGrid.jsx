import React from "react";
import ResultCard from "./ResultCard";

// Rumor
// Transfer history

// HW: UI for the result grid
// Player Name, Age, Nationality
// Prev Team, New Team,
// Transfer Date, Transfer Type, Transfer Fee, Transfer Window

const fakeData = [
  {
    playerName: "Lionel Messi",
    age: 34,
    nationality: "Argentina",
    prevTeam: "FC Barcelona",
    newTeam: "Paris Saint-Germain",
    transferDate: "2021-08-10",
    transferType: "Free Transfer",
    transferFee: "Free",
    transferWindow: "2021 Summer",
  },
  {
    playerName: "Cristiano Ronaldo",
    age: 36,
    nationality: "Portugal",
    prevTeam: "Juventus",
    newTeam: "Manchester United",
    transferDate: "2021-08-31",
    transferType: "Transfer",
    transferFee: "€15 million",
    transferWindow: "2021 Summer",
  },
  {
    playerName: "Neymar Jr",
    age: 29,
    nationality: "Brazil",
    prevTeam: "Paris Saint-Germain",
    newTeam: "Paris Saint-Germain",
    transferDate: "2017-08-03",
    transferType: "Transfer",
    transferFee: "€222 million",
    transferWindow: "2017 Summer",
  },
  {
    playerName: "Kylian Mbappé",
    age: 22,
    nationality: "France",
    prevTeam: "AS Monaco",
    newTeam: "Paris Saint-Germain",
    transferDate: "2017-07-01",
    transferType: "Transfer",
    transferFee: "€145 million",
    transferWindow: "2017 Summer",
  },
  {
    playerName: "Erling Haaland",
    age: 21,
    nationality: "Norway",
    prevTeam: "Borussia Dortmund",
    newTeam: "Borussia Dortmund",
    transferDate: "2020-01-01",
    transferType: "Transfer",
    transferFee: "€20 million",
    transferWindow: "2020 Winter",
  },
  {
    playerName: "Kevin De Bruyne",
    age: 30,
    nationality: "Belgium",
    prevTeam: "VfL Wolfsburg",
    newTeam: "Manchester City",
    transferDate: "2015-08-30",
    transferType: "Transfer",
    transferFee: "€76 million",
    transferWindow: "2015 Summer",
  },
  {
    playerName: "Mohamed Salah",
    age: 29,
    nationality: "Egypt",
    prevTeam: "AS Roma",
    newTeam: "Liverpool",
    transferDate: "2017-06-22",
    transferType: "Transfer",
    transferFee: "€42 million",
    transferWindow: "2017 Summer",
  },
  {
    playerName: "Robert Lewandowski",
    age: 33,
    nationality: "Poland",
    prevTeam: "Borussia Dortmund",
    newTeam: "Bayern Munich",
    transferDate: "2014-07-01",
    transferType: "Transfer",
    transferFee: "€4.5 million",
    transferWindow: "2014 Summer",
  },
  {
    playerName: "Harry Kane",
    age: 28,
    nationality: "England",
    prevTeam: "Tottenham Hotspur",
    newTeam: "Tottenham Hotspur",
    transferDate: "2009-07-01",
    transferType: "Youth Academy",
    transferFee: "N/A",
    transferWindow: "2009 Summer",
  },
  {
    playerName: "Sergio Ramos",
    age: 35,
    nationality: "Spain",
    prevTeam: "Real Madrid",
    newTeam: "Paris Saint-Germain",
    transferDate: "2021-07-08",
    transferType: "Free Transfer",
    transferFee: "Free",
    transferWindow: "2021 Summer",
  },
  {
    playerName: "Gareth Bale",
    age: 32,
    nationality: "Wales",
    prevTeam: "Real Madrid",
    newTeam: "Tottenham Hotspur",
    transferDate: "2020-09-19",
    transferType: "Loan",
    transferFee: "N/A",
    transferWindow: "2020 Summer",
  },
];

export default function ResultGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {fakeData.map((data, index) => (
        <ResultCard key={index} data={data} />
      ))}
    </div>
  );
}
