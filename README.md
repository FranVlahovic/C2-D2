<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

<div align="center">
  <img src="./src/assets/images/screenshots/gif-gameplay.gif" alt="C2-D2 Game Gif">

  <h3 align="center">C2-D2 Card Game</h3>
  
  <p align="center">
    Star Wars inspired browser card game built with React and Vite.
    <br>May the Force be with you!
    <br />
    <a href="https://c2-d2.netlify.app/"><strong>Launch Game</strong></a>    
    <br />
    <br />
    <em>⚠️ Desktop only – not optimized for mobile or tablet use.</em>
    <br />
    <a href="https://github.com/FranVlahovic/C2-D2">Docs</a>  
    ·  
    <a href="https://github.com/FranVlahovic/C2-D2/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>  
    ·  
    <a href="https://github.com/FranVlahovic/C2-D2/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>  
  </p>
</div>

---

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Gallery](#gallery)
- [Built With](#built-with)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

**C2-D2** is a browser-based card game inspired by the _Star Wars_ universe.
Built with modern web technologies like **React** and **Vite**, it offers a fast and scalable experience.
The game is designed for quick, casual play and easy expansion

---

## Features

### [Start Screen](#start-screen)

The start screen includes a **skip button** for users who have already played before.

---

### [Choosing Name](#creating-in-game-name)

Users can enter an in-game name with **input validation** to ensure proper formatting.

---

### [Choosing Faction](#choosing-faction-1)

Players can choose from **three factions**:

<div style="display: flex; gap: 30px; text-align: center;">
  <div>
    <h3>Jedi Order</h3>
    <img src="./src/assets/images/jedi.svg" width="100px" alt="Jedi Order">
  </div>
  <div>
    <h3>Galactic Empire</h3>
    <img src="./src/assets/images/empire.svg" width="100px" alt="Galactic Empire">
  </div>
  <div>
    <h3>The Resistance</h3>
    <img src="./src/assets/images/resistance.svg" width="100px" alt="The Resistance">
  </div>
</div>

---

### [Changing Settings](#changing-settings-1)

In-game settings include both a **Paused Submenu** and a **Settings Menu**.

**_Paused Submenu:_**

- **Resume Game**: Continue the current game.
- **Restart Game**: Start a new game from the beginning.
- **Reset Progress**: Erase all saved progress.
- **Concede**: Forfeit the current match.
- **Quit to Main Menu**: Return to the main screen.

**_Settings Menu:_**

- **Profile**: Change your name and faction.
- **Controls**: Switch between mouse and keyboard inputs.
- **Graphics**: Adjust visual settings.
- **Audio**: Enable or disable in-game music and sound effects.
- **Credits**: View acknowledgments for all game resources and contributors.

---

### [Ranking System](#ranking-system-leveling-up)

Players earn ranks based on the number of correct guesses:

| Condition    | Rank    |
| ------------ | ------- |
| Less than 50 | Bronze  |
| 50 to 99     | Silver  |
| 100 to 199   | Gold    |
| 200 or more  | Diamond |

## Gallery

### Videos

<div align="center">  
  <h4>Start Screen</h4>  
  <img src="./src/assets/images/screenshots/gif-start.gif" alt="Video 1" width="600">
  <h4>Introduction Screen</h4>  
  <img src="./src/assets/images/screenshots/gif-introduction.gif" alt="Video 2" width="600">  
  <h4>Choosing Faction Screen</h4>  
  <img src="./src/assets/images/screenshots/gif-faction.gif" alt="Video 3" width="600">
  <h4>Gameplay Screen</h4>  
  <img src="./src/assets/images/screenshots/gif-gameplay.gif" alt="Video 4" width="600">
  <h4>Game Stats Screen</h4>  
  <img src="./src/assets/images/screenshots/gif-stats.gif" alt="Video 5" width="600">
  <h4>Game Options Screen</h4>  
  <img src="./src/assets/images/screenshots/gif-options.gif" alt="Video 6" width="600">
</div>

---

### Images

#### Start Screen

<div align="left">
  <img src="./src/assets/images/screenshots/start-image.png" alt="Image 1" width="400">
  <img src="./src/assets/images/screenshots/disclaimer-image.png" alt="Image 2" width="400">
</div>

#### Creating In-Game Name

<div>
  <img src="./src/assets/images/screenshots/introduction-image-invalid.png" alt="Image 3" width="400">
  <img src="./src/assets/images/screenshots/introduction-image-valid.png" alt="Image 4" width="400">
</div>

#### Choosing Faction

<div>  
  <img src="./src/assets/images/screenshots/faction-image.png" alt="Image 5" width="400">
  <img src="./src/assets/images/screenshots/faction-chosen-image.png" alt="Image 6" width="400">
</div>

#### Gameplay

<div>
  <img src="./src/assets/images/screenshots/gameplay-image.png" alt="Image 7" width="400">
  <img src="./src/assets/images/screenshots/gameplay-card-result-image.png" alt="Image 8" width="400">
</div>

#### Changing Settings

<div>
  <img src="./src/assets/images/screenshots/settings-image.png" alt="Image 9" width="400">
  <img src="./src/assets/images/screenshots/settings-image2.png" alt="Image 10" width="400">
  <img src="./src/assets/images/screenshots/settings-submenu.png" alt="Image 11" width="400">
  <img src="./src/assets/images/screenshots/settings-submenu2.png" alt="Image 12" width="400">
  <img src="./src/assets/images/screenshots/settings-submenu3.png" alt="Image 13" width="400">
  <img src="./src/assets/images/screenshots/settings-submenu4.png" alt="Image 14" width="400">
</div>

#### Ranking System (Leveling up)

<div>
  <img src="./src/assets/images/screenshots/rank-bronze.png" alt="Image 15" width="400">
  <img src="./src/assets/images/screenshots/rank-gold.png" alt="Image 16" width="400">
  <img src="./src/assets/images/screenshots/rank-diamond.png" alt="Image 17" width="400">

</div>

## Built With

<div style="display: flex; gap: 20px; align-items: end;">
  <div style="text-align: center;">
    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/>
    </a>
    <div>CSS3</div>
  </div>

  <div style="text-align: center;">
    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/>
    </a>
    <div>HTML5</div>
  </div>

  <div style="text-align: center;">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/>
    </a>
    <div>JavaScript</div>
  </div>

  <div style="text-align: center;">
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
    </a>
    <div>React</div>
  </div>
</div>

---

## Getting Started

To set up a local copy, follow these steps:

### Prerequisites

- Ensure [Node.js](https://nodejs.org/) is installed.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/FranVlahovic/C2-D2.git
    ```
2. Navigate to the directory:
    ```sh
    cd C2-D2
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

---

## Usage

To start the development environment:

```sh
npm start
```

Build for production:

```sh
npm run build
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create your branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## License

Distributed under the MIT License. See [MIT License]() for details.

---

## Contact

Fran Vlahovic - [LinkedIn](https://linkedin.com/in/franvlahovic)

Email: franvlahovic@proton.me

Project Link: [https://github.com/FranVlahovic/C2-D2](https://github.com/FranVlahovic/C2-D2)

---

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Pixabay](https://pixabay.com/)
- [Wallhaven](https://wallhaven.cc/)
- [Star Wars API](https://github.com/akabab)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/FranVlahovic/Aeris.svg?style=for-the-badge
[contributors-url]: https://github.com/FranVlahovic/Aeris/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FranVlahovic/Aeris.svg?style=for-the-badge
[forks-url]: https://github.com/FranVlahovic/Aeris/network/members
[stars-shield]: https://img.shields.io/github/stars/FranVlahovic/Aeris.svg?style=for-the-badge
[stars-url]: https://github.com/FranVlahovic/Aeris/stargazers
[issues-shield]: https://img.shields.io/github/issues/FranVlahovic/Aeris.svg?style=for-the-badge
[issues-url]: https://github.com/FranVlahovic/Aeris/issues
[license-shield]: https://img.shields.io/github/license/FranVlahovic/Aeris.svg?style=for-the-badge
[license-url]: https://github.com/FranVlahovic/Aeris/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/franvlahovic

---
