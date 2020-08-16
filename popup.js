let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

  //COUNTDOWN

  var audio = new Audio('alarmJingle.mp3');
  let startButton = document.getElementById('start');

  startButton.onclick = function() {
    var timeLeft = document.getElementById('time').value;
    var elem = document.getElementById('demo');
    
    // Countdown by one second
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        // When the Timer is done play the jingle
        audio.play();
      } else {
        // Relabel HTML
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
    // Relabel HTML
    elem.innerHTML = timeLeft + ' seconds remaining';
  };
    