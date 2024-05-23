
import { useState } from "react";

export default function App() {
  const [selectedWeapon, setSelectedWeapon] = useState("rifle");
  const [selectedBodyPart, setSelectedBodyPart] = useState("head")
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
          <select value={selectedWeapon}
            onChange={changeWeapon} name="weapon" id="weaponSelect" className="form-select mb-3">
            <option value="Rifle">Rifle</option>
            <option value="Pistol">Pistol</option>
            <option value="Uzi">UZI</option>
            <option value="Sniper">Sniper</option>
          </select>
        </div>

        <div className="col">
          <label for="bodyPartSelect">Select a body part</label>
          <select
            value={selectedBodyPart}
            onChange={changeBodyPart}
            name="bodyPart"
            id="bodyPartSelect"
            className="form-select  mb-3"
          >
            <option value="Head">Head</option>
            <option value="Body">Body</option>
            <option value="Legs">Legs</option>
            <option value="Hands">Hands</option>
          </select>
        </div>
      </div>
      <button onClick={getResult} className="btn btn-danger">
        Shoot
      </button>
      <p id="weaponText">{selectedWeapon}</p>
      <p id="bodyText">{selectedBodyPart}</p>
      <p id="result"></p>
    </main>
  );
}
