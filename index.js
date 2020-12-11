let leftSide = ""
let rightSide = ""
let operator = ""

handleClick = (num) => {
  
  leftSide += num
  document.getElementById("leftside").innerHTML = leftSide
}

chooseOperator = (incomingOperator) => {
  operator = incomingOperator
  document.getElementById("operator").innerHTML = operator
}