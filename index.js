const counter = document.getElementById("counter"),
  doneImg = document.getElementById("img-done"),
  downloadBtn = document.getElementById("down-btn");

/*

function doCounter() {
  let counterNumber = 60;

  counter.innerText = counterNumber;
  let itv = setInterval(() => {
    counter.innerText = counterNumber;
    counterNumber--;

    if (counterNumber < 0) {
      clearInterval(itv);
      counter.classList.add("d-none");
      doneImg.classList.remove("d-none");
      doneImg.classList.remove("d-none");
      downloadBtn.classList.remove("disabled");
    }
  }, 1000);
}
// doCounter()

*/
    
var maxCounter = 10;

counter.innerText = maxCounter;
let prevTimer = -1000; 

function rePaint(timer) {

    if (timer - prevTimer > 1000) {
        prevTimer = timer
        if (maxCounter > 0) {
            // update counter
            counter.innerText = maxCounter;
            maxCounter--;
        } else {
            // update ui
            counter.classList.add("d-none");
            doneImg.classList.remove("d-none");
            doneImg.classList.remove("d-none");
            downloadBtn.classList.remove("disabled");
            // clear 
            return;
        }
    }

    requestAnimationFrame(rePaint)
}

requestAnimationFrame(rePaint)