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
            var j=0;//update this while loop after adding more lines (total columns in .csv)
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
const locations = [
    "Colombo",
    "Maligawatta",
    "Kalenitissa",
    "4th Milepost",
    "Thorana Handiya",
    "University of Kelaniya",
    "Kiribathgoda",
    "Mahara",
    "Kadawatha",
    "Gonahena",
    "Indigahamulla",
    "Kirillawala",
    "Trackmo Handiya",
    "Mudungoda",
    "Miriswatta",
    "Yakkala",
    "Aluthgama",
    "Kalagedihena",
    "Thihariya",
    "Nittambuwa Sangabodi",
    "Nittambuwa",
    "Kalalpitiya",
    "Pasyala",
    "Kajugama",
    "Radawadunna",
    "Wewaldeniya",
    "Danowita",
    "Dummaldeniya",
    "Warakapola",
    "Ambepussa",
    "Mahena",
    "Tholangamuwa",
    "Gasnawawatta Handiya",
    "Nelumdeniya",
    "Batapolathanna",
    "Siyambalapitiya",
    "Ballapana Handiya",
    "Galigamuwa",
    "Ambanpitiya",
    "Ranwala Handiya",
    "Kegalle",
    "Meepitiya",
    "Karandupotha",
    "Molagoda",
    "Mangalagama",
    "Uthuwankanda",
    "Anwaram",
    "Mawanella",
    "Beligammana",
    "Higula",
    "Ganethanna",
    "Pahala Kadugannawa",
    "Kadugannawa",
    "Henawala",
    "Pilimathalawa",
    "Ambilmigama",
    "Kiribathkumbura",
    "Peradeniya",
    "Gatambe",
    "Mulgampola",
    "Kandy",
    "Galleface",
    "Kollupitiya",
    "Bambalapitiya",
    "Wellawatta",
    "Dehiwala",
    "Mt.Lavinia",
    "Rathmalana",
    "Katubedda",
    "Moratuwa",
    "Koralawella",
    "Egodauyana",
    "Aluth Palama",
    "Panadura",
    "Nalluruwa Handiya",
    "Thalpititya",
    "Wadduwa",
    "Molligoda",
    "Pothupitiya",
    "Wadiyamankada",
    "Nagashandiya",
    "Kalutara",
    "Katukurunda Handiya",
    "Malegoda",
    "Payagala",
    "Maggona",
    "Polkotuwa",
    "Beruwala",
    "Hettimulla Handiya",
    "Moragalla",
    "Aluthgama",
    "Benthota",
    "Warahena",
    "Induruwa",
    "Maha Induruwa",
    "Duuwa Modara",
    "Kosgoda",
    "Ahungalla",
    "Pathegama",
    "Balapitiya",
    "Balapitiya Hospital",
    "Randoba",
    "Ambalangoda",
    "Madampe",
    "Akurala",
    "Kahawa",
    "Thelwatta",
    "Sinigama",
    "Hikkaduwa",
    "Naarigama",
    "Kumarakanda Handiya",
    "Dodanduwa",
    "Rathgama",
    "Bussa Army Camp",
    "Ginthota",
    "Ginthota Deport",
    "Maha Modara",
    "Galle",
    "Moodaela",
    "Dewata Handiya",
    "Unawatuna",
    "Dalawella",
    "Thalpe",
    "Habaraduwa",
    "Koggala",
    "Kathaluwa",
    "Wallheengoda",
    "Ahangama",
    "Gowiyapaana",
    "Midigama",
    "Kumbalgama",
    "Weligama",
    "Palaana",
    "Polathumodara",
    "Mirissa",
    "Thalaramba",
    "Kamburugamuwa",
    "Walgama",
    "Nuupe",
    "Mathara",
    "Thudawa",
    "Naadaagala",
    "Banndaththara",
    "Thihagoda",
    "Paloolpitiya",
    "Akurugoda",
    "Mapalana",
    "Kamburupitiya Police",
    "Kamburupitiya Bus Stand"
];
        let sortedNames = locations.sort();
        let input = document.getElementById("userInput");
        input.addEventListener("keyup", (e) => {
          removeElements();
          for (let i of sortedNames) {
            if (
              i.toLowerCase().startsWith(input.value.toLowerCase()) &&
              input.value != ""
            ) {
              let listItem = document.createElement("li");
              listItem.classList.add("list-items");
              listItem.style.cursor = "pointer";
              let word = "<b>" + i.substr(0, input.value.length) + "</b>";
              word += i.substr(input.value.length);
              listItem.innerHTML = word;
              listItem.addEventListener("click", function() {
                displayNames(i);
              });
              document.querySelector(".list").appendChild(listItem);
            }
          }
        });
        function displayNames(value) {
          input.value = value;
          removeElements();
        }
        function removeElements() {
          let items = document.querySelectorAll(".list-items");
          items.forEach((item) => {
            item.remove();
          });
        }
        let input2 = document.getElementById("userInput2");
        input2.addEventListener("keyup", (e) => {
          removeElements2();
          for (let i of sortedNames) {
            if (
              i.toLowerCase().startsWith(input2.value.toLowerCase()) &&
              input2.value != ""
            ) {
              let listItem = document.createElement("li");
              listItem.classList.add("list-items2");
              listItem.style.cursor = "pointer";
              let word = "<b>" + i.substr(0, input2.value.length) + "</b>";
              word += i.substr(input2.value.length);
              listItem.innerHTML = word;
              listItem.addEventListener("click", function() {
                displayNames2(i);
              });
              document.querySelector(".list2").appendChild(listItem);
            }
          }
        });
        function displayNames2(value) {
          input2.value = value;
          removeElements2();
        }
        function removeElements2() {
          let items = document.querySelectorAll(".list-items2");
          items.forEach((item) => {
            item.remove();
          });
        }
