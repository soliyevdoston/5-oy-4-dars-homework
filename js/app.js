const elCerdTemp = document.getElementById("cardTemp");
const elParent = document.getElementById("parent");

fetch("https://json-api.uz/api/project/fn43/cars")
  .then((res) => res.json())
  .then((res) => {
    ui(res.data);
  })
  .catch(() => {})
  .finally(() => {});

function ui(cars) {
  cars.forEach((car) => {
    const elCard = elCerdTemp.content.cloneNode(true);

    // Title
    elCard.querySelector(".card-title").textContent = car.name;

    // Description with innerHTML (original English labels)
    elCard.querySelector(".card").classList.add("card-stil");

    elCard.querySelector("p").innerHTML = `
      <b>Trim:</b> ${car.trim} <br>
      <b>Generation:</b> ${car.generation} <br>
      <b>Year:</b> ${car.year} <br>
      <b>Color:</b> ${car.color} <br>
      <b>Category:</b> ${car.category} <br>
      <b>Door Count:</b> ${car.doorCount}, <b>Seat Count:</b> ${car.seatCount} <br>
      <b>Max Speed:</b> ${car.maxSpeed} <br>
      <b>Acceleration:</b> ${car.acceleration} <br>
      <b>Engine:</b> ${car.engine}, ${car.horsepower} HP <br>
      <b>Fuel Type:</b> ${car.fuelType} <br>
      <b>Fuel Consumption:</b> City – ${car.fuelConsumption.city}, Highway – ${car.fuelConsumption.highway}, Combined – ${car.fuelConsumption.combined} <br>
      <b>Country:</b> ${car.country} <br>
      <b>Description:</b> ${car.description}
    `;

    elParent.appendChild(elCard);
  });
}
