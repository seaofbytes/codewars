// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const strArray = s.split(" ");
  let shortest = 0;
  strArray.map((word, i) => {
    if (i === 0) {
      shortest = word.length;
    } else {
      if (shortest >= word.length) {
        shortest = word.length;
      }
    }
  });
  return shortest;
}

findShort("bitcoin take over the world maybe who knows perhaps"); //3
