function cariPelaku(str) {
  // you can only write your code here!
  // var temp = ''
  // var count = 0
  // for (var i = 0;i<str.length-2;i+=1){
  //   for (var j = 0;j<3;j+=1){
  //     temp += str[i+j]
  //   }
  //   if (temp.match(/abc/)){
  //     count += 1
  //   }
  //   temp = ''
  // }
  return (str.match(/abc/g).length)
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2