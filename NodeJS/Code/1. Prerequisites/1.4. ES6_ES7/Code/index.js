// 1. Arrow Function
var functionName = (var1, var2) => {
  //code
}

// 2. Block Scoped
//let chỉ hoạt động trong phạm vi scoped (được khai báo bằng {})
function func() {
  let k = 1;
  for( let i = 0 ; i <= 2 ; i++ ){
    let l = 2;
    console.log(k); //=> Có thể truy cập k
  }
  console.log("l = " + l); //=> Không thể truy cập l
}
//var chỉ hoạt động trong 1 function
function func() {
  let k = 1;
  for( let i = 0 ; i <= 2 ; i++ ){
    var l = 2;
    console.log(k); //=> Có thể truy cập k
  }
  console.log("l = " + l); //=> Có thể truy cập l
}
console.log("l = " + l); //=> Không thể truy cập l

// 3. Destructuring Asignments

// 4. Default Parametes

// 5. Template String

// 6. Weak, Set

