/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getIndex(lengthArray) {
    return Math.floor(Math.random() * lengthArray);
  }

  function getItem(someArray) {
    return someArray[getIndex(someArray.length - 1)];
  }

  function builExcuse() {
    return (
      getItem(who) +
      " " +
      getItem(action) +
      " " +
      getItem(what) +
      " " +
      getItem(when)
    );
  }

  const element = document.getElementById("excuse");

  //element.innerText = builExcuse();
  element.innerHTML = "<h1>" + builExcuse() + "</h1>";

  //console.log(builExcuse());
};
