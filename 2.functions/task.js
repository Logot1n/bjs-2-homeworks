function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  let avg = +(sum/arr.length).toFixed(2);
  // let avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  // "Первый способ"
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

  // "Второй способ: reduce"
  // let initialValue = 0;
  // let sum = arr.reduce((a, c) => a + c, initialValue);
  // return sum;
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0; 
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0 ) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {  
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const checkArr = func(...arrOfArr[i]);
    if (checkArr > maxWorkerResult) {
      maxWorkerResult = checkArr;
    }
  }
  return maxWorkerResult
}

// function checkLength(...arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
// }