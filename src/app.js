function upDateTime() {
  //Los Angeles//
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let currentLosAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML =
    currentLosAngelesTime.format("MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = currentLosAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris//
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let currentParisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = currentParisTime.format("MMMM D, YYYY");
  parisTimeElement.innerHTML = currentParisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function showCityTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment.tz(cityTimeZone);

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let dataArea = document.querySelector("#cityData");
  dataArea.innerHTML = `<div class="city">
          <div class="city-title">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")} </div>
          </div>
          <div class="city-time">
            <h3 class="time">${cityTime.format(
              "h:mm:ss"
            )}<small> ${cityTime.format("A")}
            </small>
            </h3>
          </div>
        </div>`;
}

setInterval(upDateTime, 1000);

let citySelectElement = document.querySelector("#citySelect");
citySelectElement.addEventListener("change", showCityTime);
