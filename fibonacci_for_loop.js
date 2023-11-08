function fibonacciGenerator(n) {
  var fibonacciSequence = [0, 1]; // Initialize the sequence with the first two numbers.

  if (n === 1) {
    return [0]; // If n is 1, return just the first number [0].
  } else if (n === 2) {
    return fibonacciSequence; // If n is 2, return the first two numbers [0, 1].
  } else {
    for (var i = 2; i < n; i++) {
      var nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextNumber);
    }
    return fibonacciSequence;
  }
}

// Example usage:
console.log(fibonacciGenerator(10)); // Output: [0, 1, 1]
