
import { useState } from "react";

export default function App() {
  const [selectedWeapon, setSelectedWeapon] = useState("knife");
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
  function getResult() {
    const weapon = document.getElementById("weaponSelect").value;
    const bodyPart = document.getElementById("bodyPartSelect").value;
    const resultElement = document.getElementById("result");
    // console.log(weapon, bodyPart, result)
    const randomNumber = getRandomNumber();
    console.log(
      randomNumber +
        " is random number / " +
        weapons[weapon][bodyPart] +
        " is damage"
    );
    if (randomNumber < weapons[weapon][bodyPart]) {
      resultElement.innerHTML = "Hit!";
    } else if (randomNumber > weapons[weapon][bodyPart]) {
      resultElement.innerHTML = "Miss!";
    } else {
      resultElement.innerHTML = "BAN";
    }
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
  }
  return (
    <main className="container">
      <h1 className="text-center">Shooting Game</h1>
      <div className="row d-flex justify-content-center">
        <div className="col">
          <label for="weaponSpdelect">Select a weapon</label>
          <select name="weapon" id="weaponSelect" className="form-select mb-3">
            <option value="rifle">Rifle</option>
            <option value="pistol">Pistol</option>
            <option value="uzi">UZI</option>
            <option value="sniper">Sniper</option>
          </select>
        </div>

        <div className="col">
          <label for="bodyPartSelect">Select a body part</label>
          <select
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
      <button onClick={getResult} className="btn btn-danger">
        Shoot
      </button>
      <p>{selectedWeapon}</p>
      <p id="result"></p>
    </main>
  );
}
