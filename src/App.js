import { useState } from "react";
import "./App.css";

export default function App() {
  const [selectedWeapon, setSelectedWeapon] = useState("rifle");
  const [selectedBodyPart, setSelectedBodyPart] = useState("head");
  const [result, setResult] = useState("");
  const weapons = {
    rifle: { head: 60, body: 80, legs: 35, hands: 30 },
    pistol: { head: 35, body: 60, legs: 25, hands: 20 },
    uzi: { head: 30, body: 70, legs: 20, hands: 15 },
    sniper: { head: 80, body: 95, legs: 55, hands: 50 },
  };
  function changeWeapon(event) {
    setSelectedWeapon(event.target.value);
  }
  function changeBodyPart(event) {
    setSelectedBodyPart(event.target.value);
  }

  function getResult() {
    const randomNumber = getRandomNumber();
    if (randomNumber < weapons[selectedWeapon][selectedBodyPart]) {
      setResult("Hit!");
    } else if (randomNumber > weapons[selectedWeapon][selectedBodyPart]) {
      setResult("Miss!");
    } else {
      setResult("BAN");
    }
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }
  return (
    <main className="bg-image-container">
      <div className="container mx-auto">
        <h1 className="text-center text-green-200 text-4xl  pt-4">
          Shooting Game
        </h1>
        <div className="flex justify-center gap-4 md:gap-8 mx-4 my-8">
          <div className="flex flex-col">
            <label
              htmlFor="weaponSpdelect"
              className="text-green-200 text-base md:text-2xl "
            >
              Select a weapon
            </label>
            {/* TODO: chage color objects */}
            <select
              value={selectedWeapon}
              onChange={changeWeapon}
              name="weapon"
              id="weaponSelect"
              className=" mb-3"
            >
              <option value="rifle">Rifle</option>
              <option value="pistol">Pistol</option>
              <option value="uzi">UZI</option>
              <option value="sniper">Sniper</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="bodyPartSelect"
              className="text-green-200 text-base md:text-2xl "
            >
              Select a body part
            </label>
            {/* TODO: chage color objects */}
            <select
              value={selectedBodyPart}
              onChange={changeBodyPart}
              name="bodyPart"
              id="bodyPartSelect"
              className="  mb-3"
            >
              <option value="head">Head</option>
              <option value="body">Body</option>
              <option value="legs">Legs</option>
              <option value="hands">Hands</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-32">
          <button
            onClick={getResult}
            className="text-zinc-50 bg-red-600 py-2 px-6 rounded-md"
          >
            Shoot
          </button>
        </div>
        <p className="text-slate-100 text-center mt-5 text-xl">{result}</p>
      </div>
    </main>
  );
}
