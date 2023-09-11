module.exports = function toReadable (number) {
  module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const thousands = ['', 'thousand'];
  
    if (number === 0) {
      return 'zero';
    }
  
    let words = '';
  
    if (number >= 1000) {
      words += numberToWords(Math.floor(number / 1000)) + ' ' + thousands[number % 1000 === 0 ? 1 : 0] + ' ';
      number %= 1000;
    }
  
    if (number >= 100) {
      words += ones[Math.floor(number / 100)] + ' hundred ';
      number %= 100;
    }
  
    if (number >= 10 && number <= 19) {
      words += teens[number - 10] + ' ';
      number = 0;
    } else if (number >= 20) {
      words += tens[Math.floor(number / 10)] + ' ';
      number %= 10;
    }
  
    if (number > 0) {
      words += ones[number] + ' ';
    }
  
    return words.trim();
}
}
