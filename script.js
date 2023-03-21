window.promises = [];
// Do not change the code above this
// add your promises to the array `promises`
let random = Math.floor(Math.random()*6)

let promise1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
        resolve("1");
  },random * 1000)
})

let promise2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
        resolve("2");
  },random * 1000)
})

let promise3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
        resolve("3");
  },random * 1000)
})

let promise4 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
        resolve("4");
  },random * 1000)
})

let promise5 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
        resolve("5");
  },random * 1000)
})

promises =[promise1,promise2,promise3,promise4,promise5]
Promise.any(promises).then(data=>{
  document.getElementById("output").innerHTML = data;
})