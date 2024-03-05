/**
 * loop used to set a temporary value for the script to stop and
 * sort the random values to a descending order
 */
function sort(data: number[]): void {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] < data[j + 1]) {
        let temp: number = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
}

/**
 * Print function and for loop used to sort the random values to a descending order
 */
function print(list: any[]): void {
  let line: any = "";

  for (let item of list) {
    line += "" + item;
  }

  console.log(line);
}

let numbers: number[] = [2, 6, 1, 8, 3];
print(numbers);
sort(numbers);
print(numbers);