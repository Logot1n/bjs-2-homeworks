function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = +(sum/arr.length).toFixed(2);
    // avg = +avg.toFixed(2);
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  // "Первый способ"
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum

  // "Второй способ: reduce"
  // let initialValue = 0;
  // let sum = arr.reduce((a, c) => a + c, initialValue);
  // return sum;
}


function differenceMaxMinWorker(...arr) {
  let difference;
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; 
  let sumOddElement = 0;
  let difference;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0 ) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  average = sumEvenElement / countEvenElement;
  return average;
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = arrOfArr[0]
  for (let i = 0; i < arrOfArr.length; i++) {
    
  }
}
