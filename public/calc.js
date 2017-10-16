
//Ev Listener1

//make these global so they can be reset and set in methods
var numArr = [];
var numArr2 = [];
var operator;
var firstNum = 0;
var secondNum = 0;





//************************ Clearing the Calculator arrays and vars
  var clear = function(){
    numArr = [];
    numArr2 = [];
    firstNum = 0;
    secondNum = 0;
    operator = undefined;
    $("#display").text(" ");
    console.log("gone clear");
  }


//if its a number, store them in an array...
//just keep adding to an array until somebody hits one of
//the operator buttons
//************************************ Key Handling

$(window).keypress(function(e){

  console.log('test');
  if(e.key <= 9 && e.key >= 0){
    if(operator === undefined){ //so if you haven't put an operator in, keep adding to the first array
      numArr.push(e.key);
      firstNum = concatNum(numArr);
      $("#display").text(firstNum);
    }
    else{
      numArr2.push(e.key);
      secondNum = concatNum(numArr2);
      $("#display").text(secondNum);
    }
  }
  if(e.key === '+' || e.key === '-' || e.key === '/' || e.key === 'x'){
    operator = e.key;
    console.log(operator)
  }

  if(e.key === "="){
    console.log(firstNum)
    console.log(secondNum)
    console.log("key calculate"); //we're getting in here, but the display isn't being updated
    var solution = calculate(firstNum, secondNum);
    console.log(solution); //this is coming back undefined... why isnt it saving shit in there?

    $("#display").text(solution); // return solution to the DOM object with the id "display";
    firstNum = solution; //this lets us make the firstNum equal to the solution so we can keep messing with it
  }
  if(e.key === "c" || e.key === "C"){
    clear(); //method to reset the values of the arraysand operator for the next calculation
    //we don't want this to go off unless they hit "c" by click or by key
  }

  if(e.key === "%"){
    var$("display").text()
  }


});
//*******************************************************

//*********************************** % button






//***********************************************

//**********************************Concat the Number
var concatNum = function(numArr){
  var tempNum;
  numArr.forEach(function(n, index, arr){
    if(index == 0){
      tempNum = String(n);
    }
    else{
    tempNum += String(n); //we want the user to see the string when they hit "3" "3" --> 33, not 6
    }
  });
  console.log(tempNum);

  return tempNum;
}
//************************************************


//*******************************Calculation
var calculate = function(fn, sn){
  var result;
console.log('fn ' + fn)
  switch(operator){
    case "+":
      result =  parseFloat(fn) + parseFloat(sn);
      console.log(result)
      break;
    case "-":
      result =   parseFloat(fn) - parseFloat(sn);
      break;
    case "X":
      result =   parseFloat(fn) * parseFloat(sn);
      break;
    case "x":
      result =   parseFloat(fn) * parseFloat(sn);
      break;
    case "/":
      result =   parseFloat(fn) / parseFloat(sn); //so it can handle decimals without truncating
      break;
  }

  numArr = [];
  numArr2 = [];
  numArr.push(result);
  firstNum = result;
  secondNum = 0;
  console.log('firstNum result: ' + result)
  return result;
};

//******************************************************



//************************Click Handling

  $(window).ready(function(e){ //we wrap the click functions in this ready...
    //it checks to see if the window object is open.
    //if its not loaded, then don't enter.
    //Important because using this selector doesn't work, if the thing is never built in the first place for it to select

  $("#display").text(" ");


  $(".number").click(function(ev){
    console.log("true/false " + operator);
    console.log(!operator);
    if(operator === undefined){ //so if you haven't put an operator in, keep adding to the first array
      numArr.push($(this).text());
      firstNum = concatNum(numArr);
      $("#display").text(firstNum);
      console.log("if");

    }
    else{
      console.log("else");
      numArr2.push($(this).text());
      secondNum = concatNum(numArr2);
      $("#display").text(secondNum);
    }
  });
  //think we could listen for a number, grab its value out with "text", and then pop it into a switch statement

  $(".operator").click(function(e){
    console.log('firstNum ' + firstNum)
    console.log('secondNum ' + secondNum)
    console.log(firstNum !== 0 && secondNum !== 0)
    if($(this).text() === "c" || $(this).text() === "C"){
      clear();
    }
    //if the text is = and the operator is defined, then calculate
    if(firstNum !== 0 && secondNum !== 0){
      var result = calculate(firstNum, secondNum);
      console.log("result " + result);
      $("#display").text(result);
      operator = $(this).text();
    }
    //if not, then the operator is whatever text is in the invoking object
    else{
      operator = $(this).text();
    }
  });

  $("#percentage").click(function(e){
    var percentageVal = parseFloat( $("#display").text() )/100;
    $("#display").text(percentageVal);
    firstNum = percentageVal;
            //sets the firstNum again so we don't just have a changed display
            //that doesn't get stored anyways
  });

  $("#plusminus").click(function(e){
    var plusMinusVal = parseFloat( $("#display").text() ); //gets us display text

      plusMinusVal = 0 - plusMinusVal;
      $("#display").text(plusMinusVal);
      firstNum = plusMinusVal; //sets the firstNum again so we don't just have a changed display
                              //that doesn't get stored anyways
  });
});


//EV Listener2
//functionality to also be able to click on a button, and then that
//buttons value gets passed over into here to have logic performed...
//then pass them to the same exact methods as them hitting the keys
