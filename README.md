# Daily Weather

![main](https://github.com/Louis-La/hourly-weather/blob/main/screenshots/weather.png)

**Tech-stack**
* Front-end: HTML5, CSS, Boostrap, React.js, JavaScript
* Back-end: Express
---

**Overview**

This web application allows the user to see the current weather by entering a city name in the search bar.

---

**Description**

*Components*

* Search Bar

By typing in a correct city name or zip code, the current weather will be displayed. If there is a weather alert warning available, it will be displayed below the current weather details.

Incorrect city names will display an error message saying that the city name does not exist.

The search bar uses a weather API endpoint provided by visualcrossing.com

![warning](https://github.com/Louis-La/hourly-weather/blob/main/screenshots/warning.png)

---

**Installation**

1) In the root directory of the folder, you will see a file called `example.config.js`.
* Rename the final name to `config.js` and replace the string `INPUT_KEY_HERE` with your API key from virtualcrossing.com

2) Install all packages by running the following commands in your terminal.
```
npm install
```
3) Start the server.
```
npm run server
```
4) On a separate terminal, run webpack.
```
npm run start
```
5) On your browser, open the application at http://localhost:4000/

---


