function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLength = alphabet.length;
  const numToShift = 13;
  let decode = "";
  const arrFromStr = str.split("");

  for (let i = 0; i < arrFromStr.length; i++) {
    let idx = alphabet.indexOf(arrFromStr[i]);

    if (idx !== -1) {
      if (idx + numToShift >= alphabetLength) {
        let resIdx = (idx + numToShift) % alphabetLength;
        decode += alphabet[resIdx];
      } else {
        decode += alphabet[idx + numToShift];
      }
    }

    if (arrFromStr[i] !== undefined && arrFromStr[i].match(/\W/g)) {
      decode += arrFromStr[i];
    }
  }
  return decode;
}
