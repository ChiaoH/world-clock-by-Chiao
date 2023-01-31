function upDateTime() {
  //Los Angeles//
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let currentLosAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML =
    currentLosAngelesTime.format("MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = currentLosAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Paris//
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let currentParisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = currentParisTime.format("MMMM D, YYYY");
  parisTimeElement.innerHTML = currentParisTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

setInterval(upDateTime, 1000);
