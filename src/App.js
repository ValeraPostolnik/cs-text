
import { useState } from "react";
import image from "./img/background-cs-text.jpg"
import "./App.css";

export default function App() {
  const [selectedWeapon, setSelectedWeapon] = useState("rifle");
  const [selectedBodyPart, setSelectedBodyPart] = useState("head")
  const [result, setResult] = useState("")
  const weapons = {
    rifle: {
      head: 60,
      body: 80,
      legs: 35,
      hands: 30,
    },
    pistol: {
      head: 35,
      body: 60,
      legs: 25,
      hands: 20,
    },
    uzi: {
      head: 30,
      body: 70,
      legs: 20,
      hands: 15,
    },
    sniper: {
      head: 80,
      body: 95,
      legs: 55,
      hands: 50,
    },
  };
function changeWeapon(event) {
  setSelectedWeapon(event.target.value)
}
function changeBodyPart(event) {
  setSelectedBodyPart(event.target.value)
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
    // TODO: change background to picture from cs 2
    <main style={{ backgroundImage:`url(${image})` }}>
      <div className="container">
      <h1 className="text-center text-light   pt-4">Shooting Game</h1 >
      <div className="row d-flex justify-content-center">
        <div className="col">
           {/* TODO: align text to center */}
          <label htmlFor="weaponSpdelect" className="text-light ">Select a weapon</label>
           {/* TODO: chage color objects */}
          <select value={selectedWeapon}
            onChange={changeWeapon} name="weapon" id="weaponSelect" className="form-select mb-3">
            <option value="rifle">Rifle</option>
            <option value="pistol">Pistol</option>
            <option value="uzi">UZI</option>
            <option value="sniper">Sniper</option>
          </select>
        </div>

        <div className="col">
          {/* TODO: align text to center */}
          <label htmlFor="bodyPartSelect" className="text-light ">Select a body part</label>
          {/* TODO: chage color objects */}
          <select
            value={selectedBodyPart}
            onChange={changeBodyPart}
            name="bodyPart"
            id="bodyPartSelect"
            className="form-select  mb-3"
          >
            <option value="head">Head</option>
            <option value="body">Body</option>
            <option value="legs">Legs</option>
            <option value="hands">Hands</option>
          </select>
        </div>
      </div>
      {/* TODO: align text to center */}
      <button onClick={getResult} className="btn btn-danger">
        Shoot
      </button>
      <p>{result}</p>
  </div>
    </main>
  );
}
