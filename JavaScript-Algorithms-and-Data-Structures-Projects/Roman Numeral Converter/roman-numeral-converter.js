function convertToRoman(num) {
  let result = "";
  const romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < decimalNumbers.length; i++) {
    while (decimalNumbers[i] <= num) {
      result += romanNumbers[i];
      num -= decimalNumbers[i];
    }
  }

  return result;
}
