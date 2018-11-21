const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', function(e)
    { 
       var keyPressCount = 0;
       const keyPressMax = codes.length;
       
       while (keyPressCount <= keyPressMax -1){
         if (e.key != codes[keyPressCount]){
           alert("BAD");
         } else {
             if (keyPressCount == (keyPressMax - 1)) {
             alert("Woo hoo");
               
             } else {
               keyPressCount += 1; 
               console.log(keyPressCount)
             }
          } 
      
      }
  })//addEventListener
}//init()

console.log("Hello")
init()
