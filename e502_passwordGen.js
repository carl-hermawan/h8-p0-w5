function changeVocals (str) {
  //code di sini
  var alp = 'aiueoAIUEO'
  var alp2 = 'bjvfpBJVFP'
  var temp = ''
  for (var i = 0;i<str.length;i+=1){
    var dontSkip = true;
    for (var j = 0;j<alp.length;j+=1){
      if (str[i] == alp[j]){
        temp += alp2[j]
        dontSkip = false;
      }
    }
    if (dontSkip){
      temp += str[i]
    }
  }
  return temp
}

function reverseWord (str) {
  //code di sini
  var temp = ''
  for (var i = str.length-1;i>=0;i-=1){
    temp += str[i]
  }
  return temp
}

function setLowerUpperCase (str) {
  //code di sini
  var temp = ''
  for (var i = 0;i<str.length; i+= 1){
    if (str[i] == str[i].toUpperCase()){
      temp += str[i].toLowerCase()
    } else {
      temp += str[i].toUpperCase()
    }
  }
  return temp
}

function removeSpaces (str) {
  //code di sini
  var temp = ''
  for (var i = 0;i<str.length;i+=1){
    if (str[i] == ' '){
      i += 1
    }
    temp += str[i]
  }
  return temp
}

function passwordGenerator (name,hasil) {
  //code di sini
  if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var step1 = changeVocals(name)
  var step2 = reverseWord(step1)
  var step3 = setLowerUpperCase(step2)
  var step4 = removeSpaces(step3)

  return (step4)
}

console.log(passwordGenerator('Sergei Dragunov','VPNVGBRdJFGRFs'));
console.log(passwordGenerator('Dimitri Wahyudiputra','BRTVPJDVYHBwJRTJMJd'));
console.log(passwordGenerator('Alexei','JFXFLb'));
console.log(passwordGenerator('Alex','Minimal karakter yang diinputkan adalah 5 karakter'));