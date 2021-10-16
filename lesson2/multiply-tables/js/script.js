arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrResult = [];

for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++) {
    arrResult.push(arr1[0] * arr2[0]);
    console.log(`${arr1[0]} * ${arr2[0]} = ${arrResult[0]}`);
    arrResult.shift();
    arr2.push(arr2.shift());
  }
  arr1.push(arr1.shift());
}