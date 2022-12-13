/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  let extension = [".net", ".com", ".us", ".io"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let z = 0; z < extension.length; z++)
          console.log(pronoun[i] + adj[j] + noun[x] + extension[z]);
      }
    }
  }
};
