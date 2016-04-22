function palindrome(str) {
  str = str.replace(/\s/gi, ''); // replace empty spaces
  str = str.replace(/\W/gi, ''); // replaces non-word characters
  str = str.replace(/_/, '');    // replaces underscore symbol 
  str = str.toLowerCase();       // lowercases the string
  
  var strReversed = str.split('').reverse().join(''); //reversed the string
  
  return (str === strReversed) ? true : false; // returns false if the str =! strReversed
}

palindrome("0_0 (: /-\ :) 0-0");
