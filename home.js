
function getTime() {
    currentTime = new Date();
    month = currentTime.getMonth();
    day = currentTime.getDate();
    year = currentTime.getFullYear();
    hour = normalHour(currentTime.getHours());
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
	}
	return hour;
}