let leftSide = ""
let rightSide = ""
let operator = ""

let leftsideSpan = document.getElementById("leftside")
let rightsideSpan = document.getElementById("rightside")
let operatorSpan = document.getElementById("operator")
let answerSpan = document.getElementById("answer")

handleClick = (num) => {
  if (operator === "") {
    leftSide += num
    leftsideSpan.innerHTML = leftSide
  } else {
    rightSide += num
    rightsideSpan.innerHTML = rightSide
  }
}

chooseOperator = (incomingOperator) => {
  if (leftSide === "") return;

  operator = incomingOperator
  operatorSpan.innerHTML = operator
}

evaluateAnswer = () => {
  if (rightSide == "") return;

  let answer = ""
  let leftSideInt = parseFloat(leftSide)
  let rightSideInt = parseFloat(rightSide)

  switch (operator) {
  case "+":
    answer = leftSideInt + rightSideInt
    break;
  case "-":
    answer = leftSideInt - rightSideInt
    break;
  case "*":
    answer = leftSideInt * rightSideInt
    break;
  case "/":
    answer = leftSideInt / rightSideInt
    break;
  }

  console.log("answer: ", answer)

  if (answer === Infinity) {
    answerSpan.innerHTML = "Error, cannot divide by zero!"
  } else {
    answerSpan.innerHTML = answer
  }
  
  answerSpan.innerHTML += `&#x1F970`

  leftsideSpan.innerHTML = ""
  rightsideSpan.innerHTML = ""
  operatorSpan.innerHTML = ""

  operator = ""
  leftSide = ""
  rightSide = ""
}