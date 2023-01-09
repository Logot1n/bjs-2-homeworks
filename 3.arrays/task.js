function compareArrays(arr1, arr2) {
    if(compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((number, i) => number === arr2[i])) {
        return true;
    } else {
        return false;
    }
}

function getUsersNamesInAgeRange(users, gender) {
  let result = people.filter(user => user.gender === "мужской").map(user => user.age).reduce((acc, item, index) => {
    acc += item;
    if(index === people.length - 1) {
        return acc/people.length;
    }
    return acc;
  }, 0)
}