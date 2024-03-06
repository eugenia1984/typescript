let maximum = (data: number[]): number => {
  let max: number = data[0];
  let index = 1;

  while(index < data.length) {
    if(data[index] > max) {
      max = data[index];
    }

    index++;
  }

  return max;
}

let minimum = (data: number[]): number => {
  let min: number = data[0];
  let index = 1;

  while(index < data.length) {
    if(data[index] < min) {
      min = data[index];
    }

    index++;
  }

  return min;
}

let average = (data: number[]): number => {
  let sum = 0;

  for(let item of data) {
    sum += item;
  }

  return sum /data.length;
}

let sigma = (data: number[]): number[] => {
  let sd: number[] = [];
  let ave: number = average(data);

  for(let index in data) {
    sd[index] = ave - data[index];
  }

  return sd;
}

let analyze = (data: number[]): [number, number, number, number[]] => {
  let max: number = maximum(data);
  let min: number = minimum(data);
  let ave: number = average(data);
  let sd: number[] = sigma(data);

  return [max, min, ave, sd];
}

let [max, min, ave, sd] = analyze([2, 4, 6, 8, 10]);
console.log("Maximum: ", max);
console.log("Minimum: ", min);
console.log("Average: ", ave);
console.log("Standard deviation: ", sd);
export{}