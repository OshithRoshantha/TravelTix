document.querySelector('.switcher').addEventListener('click', function() {
    var fromInput = document.querySelector('.fromBar').value;
    var toInput = document.querySelector('.toBar').value;
    document.querySelector('.fromBar').value = toInput;
    document.querySelector('.toBar').value = fromInput;
});
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('currentTime').innerText = timeString;
}
setInterval(updateTime, 1000);
function openPage3() {
    window.location.href = "index.html";
}
function setTicketPrice() {
    var userInput = document.getElementById("userInput").value.trim();
    var userInput2 = document.getElementById("userInput2").value.trim();
    normalBus(userInput,userInput2);
}
function normalBus(input1,input2){
    var ticket1, ticket2;
    var ticketNo;
    var ticketPrice; 
    fetch('Database/normalBus.csv')
        .then(response => response.text())
        .then(csvContent => {
            var lines = csvContent.split("\n");
            var j=0;
            while(j<4){
                var count=0;
                for(var i = 0; i < lines.length; ++i) {
                    var values = lines[i].split(",");
                    if (values[j] !== undefined && input1 === values[j].replace("\r", "")){
                        ++count;
                    }
                    if (values[j] !== undefined && input2 === values[j].replace("\r", "")){
                        ++count;
                    }
                }
                if(count==2){
                    for(var i = 0; i < lines.length; ++i) {
                        var values = lines[i].split(",");
                        if (values[j] !== undefined && input1 === values[j].replace("\r", "")){
                            ticket1=values[0];
                        }
                        if (values[j] !== undefined && input2 === values[j].replace("\r", "")){
                            ticket2=values[0];
                        }
                        
                    }
                    ticketNo=Math.abs(ticket1-ticket2);
                    for(var j = 0; j < lines.length; ++j) {
                        var values2 = lines[j].split(",");
                        if(values2[0]==ticketNo){
                            ticketPrice=values2[1];
                        }
                    }
                    document.getElementById("normalTicket").innerHTML="LRK "+ticketPrice;
                }
                else{
                    ++j;
                }
            }    
        })
        .catch(error => console.error('Error fetching CSV file:', error));
}

