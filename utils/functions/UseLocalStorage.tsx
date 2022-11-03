function UseLocalStorage(key = "places", value = []) {
  if (!value) {
    console.warn("No value was specified in the UseLocalStorage hook.");
  }
  localStorage.setItem(key, JSON.stringify(value));

  let places = localStorage.getItem(key);
  if (places) {
    return (places = JSON.parse(places));
  } else {
    return [];
  }
}

export default UseLocalStorage;
