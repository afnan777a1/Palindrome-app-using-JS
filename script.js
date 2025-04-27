function palindrome(myString) {
  var input = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  var reversedInput = input.split("").reverse().join("");

  if (input === reverseInput) {
    document.write("<div>" + myString + " is a palindrom <div>");
  } else {
    document.write("<div>" + myString + " is not a palindrom <div>");
  }
}

palindrom("madam");
