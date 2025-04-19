let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".s_heading");
let x;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.textContent !== "=" &&
      button.textContent !== "x!" &&
      button.textContent !== "C" &&
      button.textContent !== "←" &&
      button.textContent !== "1/x" &&
      button.textContent !== "x²" &&
      button.textContent !== "x³" &&
      button.textContent !== "√x"
    ) {
      screen.innerHTML += button.textContent;
    }

    if (button.textContent === "C") 
    {
      screen.innerHTML = "";
    }

    if (button.textContent === "√x") 
    {
      screen.innerHTML += "√";
    }
    if (button.textContent === "x²")
    {
      screen.innerHTML += "²";
    }
    if (button.textContent === "x³") {
      screen.innerHTML += "³";
    }
    if (button.textContent === "x!") 
    {
      screen.innerHTML += "!";
    }

    if (button.textContent === "←") 
    {
      x = screen.innerHTML;
      screen.innerHTML = x.slice(0, -1);
    }

    if (button.textContent === "=") 
    {
      x = screen.innerHTML;
      let array = [];
      if (isvalid(x)) 
      {
          let n = x.length;
          let i = 0;
          let a=0;
          if(x[0]==='-')
          {
            i++;
             while (!isNaN(x[i]) && n > i) 
                {
                    a = a * 10 + (x[i++] - "0");
                }
                 array.push((-1)*a);
          }
          while (n > i) 
          {

                a = 0;
                if(!isNaN(x[i])){
                while (!isNaN(x[i]) && n > i) 
                {
                    a = a * 10 + (x[i++] - "0");
                }
                 array.push(a);
              }
                if (
                  i !== n &&
                  x[i] !== "²" &&
                  x[i] !== "√" &&
                  x[i] !== "³" &&
                  x[i] !== "." &&
                  x[i] !== "!" &&
                  x[i] !== "-" &&
                  x[i] !== "%"
                ) {
                  array.push(x[i]);
                }

                if (
                  i !== n &&
                  (x[i] === "²" ||
                    x[i] === "√" ||
                    x[i] === "³" ||
                    x[i] === "." ||
                    x[i] === "!" ||
                    x[i] === "-" ||
                    x[i] === "%")
                ) {

                  if (x[i] === "²")
                    array[array.length - 1] *= array[array.length - 1];
                  else if(x[i]==='-')
                  {
                      array.push('+');
                       i++;
                       a = 0;
                      while (!isNaN(x[i]) && n > i) {
                        a = a * 10 + (x[i++] - "0");
                      }
                      a=(-1)*a;
                      array.push(a);
                      i--;
                  }
                  else if (x[i] === "!")
                    array[array.length - 1] = fact(array[array.length - 1]);
                  else if (x[i] === "³") array[array.length - 1] =
                    array[array.length - 1] *
                    array[array.length - 1] *
                    array[array.length - 1];
                  else if (x[i] === ".") {
                    i++;
                    a = 0;
                    let w = 1;
                    while (!isNaN(x[i]) && n > i) {
                      w *= 10;
                      a = a * 10 + (x[i] - "0");
                      i++;
                    }
                    a = a / w;
                    array[array.length - 1] += a;
                  }
                  else if (x[i] === "√") {
                    i++;
                    a = 0;
                    while (!isNaN(x[i]) && n > i) {
                      a = a * 10 + (x[i++] - "0");
                    }
                    array.push(Math.sqrt(a).toFixed(3));
                    array.splice(array.length-2,1);
                  }
                  else if (x[i] === "%") {
                    i++;
                    a = 0;
                    while (!isNaN(x[i]) && n > i) {
                      a = a * 10 + (x[i++] - "0");
                    }
                    array[array.length - 1] *= a / 100;
                  }
                }
                i++;
          }
                console.log(array);
          print_result(array);
          
      }
    }
  });
});


function print_result(a)
{
  let n=a.length;
  while(a.length!=1)
    {
        if (a.indexOf("÷") != -1) {
          let ind = a.indexOf("÷");
          a.splice(ind - 1, 3, a[ind - 1] / a[ind + 1]);
        } else if (a.indexOf("×") != -1) {
          let ind = a.indexOf("×");
          a.splice(ind - 1, 3, a[ind - 1] * a[ind + 1]);
        } else if (a.indexOf("+") != -1) {
          let ind = a.indexOf("+");
          a.splice(ind - 1, 3, a[ind - 1] + a[ind + 1]);
        } else if (a.indexOf("-") != -1) {
          let ind = a.indexOf("-");
          a.splice(ind - 1, 3, a[ind - 1] - a[ind + 1]);
        }
        console.log(a);
    } 
    screen.innerHTML=a[0]; 
    return;
}

function isvalid(t) {
  let n = t.length;
  if(t[0]==='%'||t[0]==='³'||t[0]==='²'||t[0]==='%'||t[0]==='÷'||t[0]==='×'||t[0]==='!'){screen.innerHTML="Error";return false;}
  if(t.includes("%³")||t.includes("%²")||t.includes("÷%")||t.includes("×%")||t.includes("-%")||t.includes("+%")||t.includes("%%")||t.includes("!!")||t.includes("-!")||t.includes("+!")||t.includes("×!")||t.includes("÷!")||t.includes("+³")||t.includes("-³")||t.includes("×³")||t.includes("÷³")|t.includes("+²")||t.includes("-²")||t.includes("×²")||t.includes("÷²")||t.includes("²²")||t.includes("³²")||t.includes("²³")||t.includes("³³")||t.includes("++")||t.includes("--")||t.includes("××")||t.includes("÷÷")){screen.innerHTML="Error";return false;}
    return true;
}

function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}
