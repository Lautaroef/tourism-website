//Convert Kelvin to Celsius
export function kelvinToCelsius(kelvin: number) {
  const res = (kelvin - 273.15).toFixed(1);
  return Number(res);
}

// Disable scrolling on modal open
export function disableScroll() {
  document.body.style.overflow = "hidden";
}
export function enableScroll() {
  document.body.style.overflow = "initial";
}

// convertDateNumberIntoDayString()
export function convertDateNumberIntoDayString(time: number) {
  switch (true) {
    case time === 0 || time === 7:
      return "Sunday";
    case time === 1 || time === 8:
      return "Monday";
    case time === 2 || time === 9:
      return "Thursday";
    case time === 3 || time === 10:
      return "Wednesday";
    case time === 4 || time === 11:
      return "Tuesday";
    case time === 5 || time === 12:
      return "Friday";
    case time === 6 || time === 13:
      return "Saturday";
  }
}

// Random Math number (Price in USD$)
export function randomNumberBetweenInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
