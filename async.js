// Exercise 1
function myDisplayer1(some) {
    document.getElementById("Exercise 1").innerHTML = some;
  }
  
  function myFirst1() {
    myDisplayer1("Hello");
  }
  
  function mySecond1() {
    myDisplayer1("Goodbye");
  }
  
  myFirst1();
  mySecond1();

  // Exercise 2

  function myDisplayer2(some) {
    document.getElementById("Exercise 2").innerHTML = some;
  }
  
  function myFirst2() {
    myDisplayer2("Hello");
  }
  
  function mySecond2() {
    myDisplayer2("Goodbye");
  }
  
  mySecond2();
  myFirst2();

  // Exercise 3

  function myDisplayer3(some) {
    document.getElementById("Exercise 3").innerHTML = some;
  }
  
  function myCalculator3(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator3(5, 5);
  myDisplayer3(result);

  // Exercise 4

  function myDisplayer4(some) {
    document.getElementById("Exercise 4").innerHTML = some;
  }
  
  function myCalculator4(num1, num2) {
    let sum = num1 + num2;
    myDisplayer4(sum);
  }
  
  myCalculator4(5, 5);

  // Exercise5

  function myDisplayer5(some) {
    document.getElementById("Exercise 5").innerHTML = some;
  }
  
  function myCalculator5(num1, num2, myCallback5) {
    let sum = num1 + num2;
    myCallback5(sum);
  }
  
  myCalculator5(5, 5, myDisplayer5);

  // Exercise 6

  setTimeout(myFunction1, 3000);

function myFunction1() {
  document.getElementById("Exercise 6").innerHTML = "I love You !!";
}

// Exercise 7

setInterval(myFunction2, 1000);

function myFunction2() {
  let d = new Date();
  document.getElementById("Exercise 7").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

// Exercise 8

function myDisplayer(some) {
    document.getElementById("Exercise 8").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);

  // Exercise 9

  function myDisplayer9(some) {
    document.getElementById("Exercise 9").innerHTML = some;
  }
  
  let myPromise1 = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise1.then(
    function(response) {myDisplayer9(response);},
    function(error) {myDisplayer9(error);}
  );

//Exercise 10

  let myPromise2 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myPromise2.then(function(result) {
    document.getElementById("Exercise 10").innerHTML = result;
  });

  //Exercise 11
  function myDisplayer(some) {
    document.getElementById("Exercise 11").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(response) {myDisplayer(response);},
    function(error) {myDisplayer(error);}
  );

  //Exercise 12

  async function myDisplay12() {
    let myPromise12 = new Promise(function(myResolve, myReject) {
      myResolve("I love You !!");
    });
    document.getElementById("Exercise 12").innerHTML = await myPromise12;
  }
  
  myDisplay12();
  
//  Exercise 13

async function myDisplay13() {
    let myPromise13 = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("Exercise 13").innerHTML = await myPromise13;
  }
  
  myDisplay13();

  // Exercise 14

  async function getFile() {
    let myPromise14 = new Promise(function(myResolve, myReject) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {myResolve(req.response);}
        else {myResolve("File not Found");}
      };
      req.send();
    });
    document.getElementById("Exercise 14").innerHTML = await myPromise14;
  }
  
  getFile();

