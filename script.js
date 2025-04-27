function palindrome(myString) {
  var input = myString.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  var reversedInput = input.split("").reverse().join("");

  var result = document.createElement("div");

  if (input === reversedInput) {
    result.textContent = myString + " is a palindrome";
  } else {
    result.textContent = myString + " is not a palindrome";
  }

  document.body.appendChild(result);
}

palindrome("madam");
