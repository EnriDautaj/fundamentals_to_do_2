function countdownArray(number) {
    let newArray = [];
    
    for (let i = number; i >= 0; i--) {
      newArray.push(i);
    }
    
    return newArray;
  }
  
  // Example usage
  const resultArray = countdownArray(10);
  console.log(resultArray);
  console.log("Length of the array:", resultArray.length);


  function printAndReturn(arr) {
    const firstValue = arr[0];
    console.log(firstValue);
    return arr[1];
  }
  
  // Example usage
  const arr = [42, 77];
  const returnValue = printAndReturn(arr);
  console.log("Returned value:", returnValue);



  function calculateSum(arr) {
    const firstValue = arr[0];
  
    if (typeof firstValue !== 'number') {
      return 'Invalid input: first value is not a number';
    }
  
    const sum = firstValue + arr.length;
    return sum;
  }
  
  // Examples
  console.log(calculateSum([42, 10, 20]));      
  console.log(calculateSum(["what?", 1, 2]));  
  console.log(calculateSum([false, 1, 2]));   
  
  

  function printAndCountGreaterValues(arr) {
    const secondValue = arr[1];
    const greaterValues = arr.filter((value) => value > secondValue);
  
    for (let i = 0; i < greaterValues.length; i++) {
      console.log(greaterValues[i]);
    }
  
    return greaterValues.length;
  }
  
  // Example usage
  const arr = [1, 3, 5, 7, 9, 13];
  const count = printAndCountGreaterValues(arr);
  console.log("Count of values greater than the 2nd value:", count);



  function filterAndCountGreaterValues(arr) {
    if (arr.length < 2) {
      console.log("Array has less than 2 elements.");
      return [];
    }
  
    const secondValue = arr[1];
    const greaterValues = arr.filter((value) => value > secondValue);
  
    console.log("Greater values:", greaterValues);
    console.log("Count of values greater than the 2nd value:", greaterValues.length);
  
    return greaterValues;
  }
  
  // Example usage
  const arr1 = [1, 3, 5, 7, 9, 13];
  const arr2 = [42];
  filterAndCountGreaterValues(arr1);
  filterAndCountGreaterValues(arr2);



  function createArray(num1, num2) {
    if (num1 === num2) {
      console.log("Jinx!");
    }
  
    const newArray = Array(num1).fill(num2);
    return newArray;
  }
  
  // Example usage
  const result1 = createArray(5, 3);
  console.log(result1);  // Output: [3, 3, 3, 3, 3]
  
  const result2 = createArray(4, 4);
  console.log(result2);  // Output: [4, 4, 4, 4], and it will also print "Jinx!"


  function checkArraySize(arr) {
    const firstValue = arr[0];
    const arrayLength = arr.length;
  
    if (firstValue > arrayLength) {
      console.log("Too big!");
    } else if (firstValue < arrayLength) {
      console.log("Too small!");
    } else {
      console.log("Just right!");
    }
  }
  
  // Example usage
  checkArraySize([7, 1, 2, 3, 4]);    // Output: "Too small!"
  checkArraySize([10, 5, 8, 2, 9]);   // Output: "Too big!"
  checkArraySize([3, 6, 9, 2, 4]);    // Output: "Just right!"

  

  function fahrenheitToCelsius(fDegrees) {
    const cDegrees = (fDegrees - 32) * (5 / 9);
    return cDegrees;
  }
  
  // Example usage
  const fahrenheit = 68;
  const celsius = fahrenheitToCelsius(fahrenheit);
  console.log(celsius); // Output: 20



  function celsiusToFahrenheit(cDegrees) {
    const fDegrees = (cDegrees * (9 / 5)) + 32;
    return fDegrees;
  }
  
  // Example usage
  const celsius = 20;
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(fahrenheit); // Output: 68
  
  
  
  
  
  
  
  