// Instructions: </br>

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:</br>
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

// or

const findNeedle2 = (haystack) => {
  let index;
  haystack.forEach((item, i) => {
    if (item === "needle") index = `found the needle at position ${i}`;
  });
  return index;
};
