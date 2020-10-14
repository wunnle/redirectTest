const TIME_LIMIT = 5000
let remainingTime = TIME_LIMIT / 1000


document.getElementById('remainingTime').innerHTML = remainingTime

window.setTimeout(() => {
  window.location.href = "/secondPage.html";
}, TIME_LIMIT)

const interval = setInterval(() => {
  if(remainingTime > 0) {
    remainingTime--
    document.getElementById('remainingTime').innerHTML = remainingTime
  } else {
    clearInterval(interval)
  }
}, 1000)