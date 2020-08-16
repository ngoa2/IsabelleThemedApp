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
  }

    let testButton = document.getElementById('nav1');
    let testButton2 = document.getElementById('nav2');
    let testButton3 = document.getElementById('nav3');

    var navBarChange = function(name, name2, name3) {
      var content = document.getElementById(name);

      // make others gone
      var other1 = document.getElementById(name2);
      var other2 = document.getElementById(name3);
      other1.style.display = "none";
      other2.style.display = "none";
      content.style.display = "block";
    }

    testButton.onclick = function(){
      console.log("test");
      navBarChange("content1", "content2", "content3");
    }
    
    testButton2.onclick = function(){
      navBarChange("content2", "content1", "content3");
    }

    testButton3.onclick = function(){
      navBarChange("content3", "content2", "content1");
    }


    // append to list
    let goalButton = document.getElementById("goalButton");
    let ul = document.getElementById("todoList");
    let children = ul.children;

    let lastNode = children[children.length - 2];

    goalButton.onclick = function(){
      //create li
      let li = document.createElement("li");

      //create input box and set to text type
      let inputBox = document.createElement("INPUT");
      inputBox.setAttribute("type", "text");

      // set new li to have input box as content
      li.appendChild(inputBox);

      li.onclick = function() {
        li.style.textDecoration = "line-through";
      }
      
      lastNode.appendChild(li);
    }


    