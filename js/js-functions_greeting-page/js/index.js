console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
const time = new Date().getHours();
const day = new Date().getDay();

function getGreeting() {
  if (time >= 6 && time < 13) {
    console.log("Good Morning");
    return "Good Morning";
  } else if (time >= 13 && time < 19) {
    console.log("Good Afternoon");
    return "Good Afternoon";
  } else if (time >= 19 && time < 22) {
    console.log("Good Evening");
    return "Good Evening";
  } else {
    console.log("Good Night");
    return "Good Night";
  }
}

function getDayColor() {
  if (day === "1") {
    console.log("Its monday");
    return "darkgray";
  } else if (day >= 2 && day <= 5) {
    console.log("Its between tuesday - friday");
    return "lightblue";
  } else {
    console.log("Its saturday or sunday");
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();