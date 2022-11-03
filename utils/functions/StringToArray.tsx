//Convert the raw "kinds" data string to an array with no "_"

function StringToArray(string) {
  if (string) {
    const parseKinds = string.split(",");

    const convertKinds = parseKinds.map((string) => {
      return string.replace(/_/gi, " ");
    });
    return convertKinds;
  }

  return string;
}

export default StringToArray;
