# Stackdew Valley - Terminal Prototype

This repository contains a standalone prototype of an **in-game terminal** as part of a larger Phaser game: **Stackdew Valley**. This terminal has been extracted to test, expand and refine its functionality. My goal is to create an immersive interface where players solve katas — mini coding challenges — to help progress through the game.

---

## Recent Prototype Preview

[Screen recording 2025-05-09 13.19.25.webm](https://github.com/user-attachments/assets/acb54eee-6e9b-4e8e-9bea-af36ba920163)



---

## Goals

- Provide an interactive in-game terminal for solving JavaScript challenges (katas)
- Offer immediate feedback via visual expressions and text
- Simulate a vintage computer with a personality (via facial expressions and dialogue)
- Test code execution securely using controlled environments
- Lay a foundation of sorts for integrating learning mechanics into the main game

---

## Features of the Prototype 

- **Custom styled terminal interface**
- **Computer face component** that reacts to user success or error
- **Dynamic code evaluation** using a basic test suite
- **Instructions + Output buttons** to guide the user

---

## Technologies Used

- [Phaser 3](https://phaser.io/)
- JavaScript 
- DOM integration inside Phaser 
- Simple JS eval (safely sandboxed)

---

## Next Steps I Plan on Doing  

- [ ] Expand the kata library (covering arrays, loops, logic, etc.)
- [ ] Add a hint system as well as progress tracking
- [ ] May be integrated with Stackdew Valleys main storyline
- [ ] Improve code parsing and safety checks
- [ ] Improve the UI 

---

## The First Sample Challenge

```js
function add(a, b) {
  // Code is written here that should returns the sum of a and b
}
