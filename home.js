
function getTime() {
    currentTime = new Date();
    month = currentTime.getMonth();
    day = currentTime.getDate();
    year = currentTime.getFullYear();
    hour = normalHour(currentTime.getHours());
    mins = getMins(currentTime.getMinutes());
    time = hour + ":" + currentTime.getMinutes();

    if(currentTime.getHours() > 12) {
    	time += " pm";
    } else {
    	time += " am";
    }

    // alert("hi");
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    document.getElementById('month').innerHTML=months[month];
    document.getElementById('day').innerHTML=day;
    document.getElementById('time').innerHTML = time;
}

    
setInterval(function(){getTime();}, 1000);//setInterval(clockTick, 1000); will also work

function normalHour(hour) {
	if (hour > 12) {
		return 24 - hour;
	} else if (hour === 0) {
		return 12;
	}
	return hour;
}

function getMins(mins) {
	if (mins < 10) {
		return "0" + mins;
	}
	return mins;
}

var li = document.createElement("li");
li.onclick = function() {
    li.classList.add('empty');
}

// document.getElementsByClassName('empty').addEventListener("click", function(){
//     // document.getElementsByClassName("empty").classList.remove('empty');
//     document.getElementsByClassName("empty").classList.add('full');
// })












