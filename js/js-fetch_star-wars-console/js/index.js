console.clear();

const url = "https://swapi.py4e.com/api/people/3/";

async function fetchData() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data.name + ": " + data.eye_color);
}

fetchData();
