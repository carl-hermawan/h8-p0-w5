function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var str = String(angka)
  if (str.length == 1){
    return Number(str)
  } else {
    var kali = 1
    for (var i = 0;i<str.length;i+=1){
      kali *= Number(str[i])
    }
    return kaliTerusRekursif(kali)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6