// Your code here
function mapToNegativize(sourceArray) {
  let newArray = [];
  sourceArray.forEach( element => {
    newArray.push(element * -1 );  
  });
  return newArray;
}

function mapToNoChange(sourceArray) {
  let newArray = [];
  sourceArray.forEach( element => {
    newArray.push(element);
  });
  return newArray;
}

function mapToDouble(sourceArray) {
  let newArray = [];
  sourceArray.forEach( element => {
    newArray.push(element * 2);
  });
  return newArray;
}

function mapToSquare(sourceArray) {
  let newArray = [];
  sourceArray.forEach( element => {
    newArray.push(element ** 2)
  });
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let sum = startingPoint;
  sourceArray.forEach( element => {
    sum += element;
  });
  return sum;
}

function reduceToAllTrue(sourceArray) {
  let result = true;
  sourceArray.forEach( element => {
    if (element === false) { result = false };
  });
  return result;
}

function reduceToAnyTrue(sourceArray) {
  let result = false;
  sourceArray.forEach( element => {
    if (element === true) { result = true };
  });
  return result;
}