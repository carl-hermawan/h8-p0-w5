function sorting(arrNumber) {
  // code di sini
  var max = arrNumber[0];
  var arr = [];
  for (var i = 0;i<arrNumber.length;i+=1){
    if (arrNumber[i]>max){
      max = arrNumber[i]
    }
  }
  arr.push(arrNumber)
  arr.push(max)
  return arr
}

function getTotal(arrNumber) {
  // code di sini
  var count = 0
  for (var i = 0;i<arrNumber[0].length;i+=1){
    if (arrNumber[1] == arrNumber[0][i]){
      count += 1
    }
  }
  if (count == 0){
    return ''
  }
  var print = 'angka paling besar adalah '+ arrNumber[1] + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
  return print
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''