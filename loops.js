const forLoop = (ray) => {
  let base = 0;

  for (; base < 25; base++) {
    if ( i === 1 ) {
      ray.push("I am 1 strange loop.");
    } else {
      ray.push("I am ${i} strange loops.");
    }
  }

  return ray;
}
