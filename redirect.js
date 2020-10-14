const TIME_LIMIT = 5000
let remainingTime = TIME_LIMIT / 1000


document.getElementById('remainingTime').innerHTML = remainingTime

window.setTimeout(() => {
  window.location.href = "https://wunnle.com";
}, TIME_LIMIT)

const interval = setInterval(() => {
  if(remainingTime > 0) {
    remainingTime--
    document.getElementById('remainingTime').innerHTML = remainingTime
  } else {
    clearInterval(interval)
  }
}, 1000)

useEffect(() => {
  console.log('poll is updated')
  console.log(poll)
}, [poll])


const newPoll = {
  id: pollId,
  question: updatedQuestion,
  choices: updatedChoices.map((choice) => ({
    text: choice.text,
  })),
}

setPoll(newPoll);

dispatch(updatePoll(accessToken, pollId, newPoll));