import { getSong } from "./src/song";

console.log(
  getSong(["dítě", "slona", "chobotnice"], {
    exclamations: ["", "!!!", "???"],
    firstRow: "Bába spolkla",
    lastRow: "Nevím proč spolkla dítě",
    lastVerse: ["Spolkla auto...", "... a už je mrtvá!"],
    mainRow: "Spolkla $1 aby chytila $2",
  })
);
