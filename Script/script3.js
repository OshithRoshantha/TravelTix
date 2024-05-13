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

function closePopup() {
  document.getElementById("alertBox").style.display = "none";
  document.getElementById("opac").style.display = "none";
}

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var formattedDate = day + '/' + month + '/' + year;
var normalText = "There is no available connection on this route for ";
var finalText = normalText + formattedDate;
document.getElementById('date').innerHTML = finalText;

function setTicketPrice() {
    var userInput = document.getElementById("userInput").value.trim();
    var userInput2 = document.getElementById("userInput2").value.trim();
    normalBus(userInput,userInput2);
}

function normalBus(input1,input2){
    var ticket1, ticket2;
    var ticketNo;
    fetch('Database/normalBus.csv')
        .then(response => response.text())
        .then(csvContent => {
            var ticketPrice;
            var lines = csvContent.split("\n");
            var j=0;
            while(j<lines[0].split(',').length){
                var count=0;
                for(var i = 0; i < lines.length; ++i) {
                    var values = lines[i].split(",");
                    if (values[j] !== undefined && input1 === values[j].replace("\r", "")){
                        ++count;
                    }
                    if (values[j] !== undefined && input2 === values[j].replace("\r", "")){
                        ++count;
                        document.querySelector('.errAlert').style.opacity = '100%';
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
                    if(ticketPrice===undefined){
                      document.querySelector('.errAlert').style.opacity = '100%';
                    }else{
                      document.querySelector('.errAlert').style.opacity = '0%';
                    }
                }
                else{
                    ++j;
                    document.querySelector('.errAlert').style.opacity = '100%';
                }
            }    
        })
        .catch(error => console.error('Error fetching CSV file:', error));
}

function removeAlert() {
  var divToDelete = document.getElementById("alertMessage");
  divToDelete.parentNode.removeChild(divToDelete);
}

function displayError() {
  var errAlert = document.getElementById("errAlert");
  if (errAlert) {
      errAlert.style.display = "block";
  }
}

const locations = [
    "Colombo Fort",
    "Maligawatta",
    "kelanitissa",
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
    "Talpe",
    "Habaraduwa",
    "Koggala",
    "Kathaluwa",
    "Wallheengoda",
    "Ahangama",
    "Gowiyapaana",
    "Midigama",
    "Kumbalgama",
    "Weligama",
    "Pelena",
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
    "Kamburupitiya Bus Stand",
    "Negombo",
    "Thelwatta",
    "Kuurana",
    "20th Milepost",
    "18th Milepost",
    "Awariwatta",
    "Naikanda",
    "Aadiambalama Handiya",
    "Peellawatta",
    "Yatiyana",
    "Minuwangoda Bus Stand",
    "Waagowwa Handiya",
    "Pamunuwa Handiya",
    "Dewalapola Handiya",
    "Walpitamulla",
    "Naiwala Handiya",
    "Wataddara",
    "Veyangoda Bus Stand",
    "Udammita",
    "Ashokaramaya",
    "Paragammana Handiya",
    "Maathura School Halt",
    "Hettimulla Handiya",
    "5th Milepost",
    "Moronthota",
    "Maaboopitiya Handiya",
    "Undugoda Nikapitiya Handiya",
    "Thannimale",
    "Dematagoda",
    "Borella",
    "Narahenpita",
    "Kappagoda Handiya",
    "Daaswatta Handiya",
    "Ussaapitiya",
    "Alupotha",
    "Polambeegoda",
    "Gawilipitiya",
    "Dippitiya",
    "Habalanthota Handiya",
    "Thalgaspitiya",
    "Pethigammana 1st Milepost",
    "Hemmathagama",
    "Ganithapura",
    "Thalliyadda",
    "Koongoda Handiya",
    "Niyadurupola",
    "Hallawa",
    "Galapitamada",
    "Nawam Mawatha",
    "Glass House",
    "Race Course",
    "Jaawatta",
    "Dorawaka",
    "Galamuna Wele Kade",
    "Kohombadeniya School Halt",
    "Manikkadawara",
    "Imbulowita",
    "Swiss Hotel",
    "Buuwalikada",
    "Thannekumbura",
    "Kundasale",
    "Gammudawa",
    "Pallekale Army Camp",
    "Balagolla",
    "Kengalla",
    "Kalasirigama Handiya",
    "Menikhinna",
    "Weragoda",
    "Mitiyaagoda",
    "Nindaana",
    "Batapola",
    "Kahatapitiya",
    "Maanampitigama",
    "Apegama Handiya",
    "Waaniyawela Ambalama",
    "Duunawatta",
    "Baddegama",
    "Gamini Hall",
    "Town Hall",
    "Thimbirigasyaya",
    "Kirulapone",
    "Nugegoda",
    "Delkanda",
    "Nawinna",
    "Maharagama",
    "Pannipitiya",
    "Kottawa",
    "Makumbura",
    "Homagama",
    "Panagoda Army Camp",
    "Godagama",
    "Naduhena",
    "Watareka 20th Milepost",
    "Galagedra Bridge",
    "Meepe Handiya",
    "Mawathagama",
    "Waththekade",
    "Pahathgama",
    "Kaluaggala",
    "Suduwella",
    "Shaalawa",
    "Kosgama",
    "Aluth Ambalama",
    "Hingurala",
    "Puwakpitiya",
    "Ukkwatta",
    "Awissawella",
    "Maadola",
    "Dehigahapitiya",
    "Gatahaththa",
    "Minnana",
    "Thoranakada",
    "Mooragala Handiya",
    "Eheliyagoda",
    "Maahingoda",
    "Thalaawitiya",
    "Bodhi Maluwa",
    "Parakaduwa",
    "Thiriwaana 43th Milepost",
    "Pussella",
    "Millawitiya",
    "Higgashena",
    "Kuruwita Bus Halt",
    "Paradise Handiya",
    "Batuhena School Halt",
    "Panukaraapitiya",
    "Farmgarden",
    "Hospital Junction",
    "Rathnapura Bus Halt",
    "Rathnapura Deport",
    "Batugedara School Halt",
    "Thiriwana Katiya Handiya",
    "Palwaadiya",
    "Pathulpaana School Halt",
    "Welimaluwa",
    "Lellupitiya Handiya",
    "Dippitigala",
    "Paathakada",
    "Ganeegama",
    "Pelmadulla",
    "Batalanda",
    "Panawenna",
    "Ketetanna",
    "Kahawatta Bus Halt",
    "Yaainna Handiya",
    "Ellagewatta Handiya",
    "Ambalanwatta",
    "Maadampe Handiya",
    "Kawuduwaawa",
    "Allpitiya",
    "Malwatta",
    "Godakawela",
    "Kossnathota",
    "Balawinna Town",
    "Karuwalagaha Turn",
    "Pallebadda",
    "Giradura",
    "Koswatiya Bo Tree",
    "Dematagala",
    "Sankapaala",
    "Kolambagee Aara School Halt",
    "Kolambagee Aara",
    "96 KM Post",
    "98 KM Post",
    "99 KM Post",
    "Galwanguwa",
    "Udagama Handiya",
    "Embilipitiya Bus Stand",
    "1st Post Bo Tree",
    "Moraketiya School Halt",
    "3rd Milepost",
    "Moraketiya Handiya",
    "Mahaanaaga School Halt",
    "Uurusitana Dam",
    "Hathporuwa Handiya",
    "Weeriyagama",
    "10th Milepost",
    "Galwewa Handiya",
    "Sooriyawewa",
    "Jethawanaramaya Temple",
    "Thotalanga",
    "Peliyagoda",
    "Wattala Postoffice",
    "Maabola",
    "Mahabage",
    "Kandana",
    "Kapuwatta",
    "Ja-Ela Bus Stand",
    "Thudella",
    "Dandugama",
    "Seeduwa",
    "Liyanagemulla",
    "18th Milepost",
    "20th Milepost",
    "Kuurana",
    "Thelwatta",
    "Periyamulla",
    "Dalupatha",
    "Daluwakotuwa",
    "Kochchikade",
    "Thoopuwa Handiya",
    "Waikkala",
    "Nainamadama",
    "Dummalldeniya",
    "Wennappuwa",
    "Katuneriya",
    "Marawila Hospital",
    "Marawila",
    "Thalwila",
    "Mahawewa",
    "Madampe",
    "Galahitiyawa Handiya",
    "Pammbala",
    "Kaakkapalliya",
    "Merawala",
    "Chilaw",
    "Thembilla Moola",
    "Deduruoya Bridge",
    "Bangadeniya Handiya",
    "Raajakadaluwa",
    "Arachchikattuwa",
    "Nalladarankattuwa",
    "Anawilundawa",
    "Baththuluoya",
    "Tharawilluwa",
    "Keeriyankalliya",
    "Mundalama Hospital",
    "Mundalama",
    "Katanahenawatta",
    "Nawadankulama",
    "Mangalaeliya",
    "Ambaweli Bridge",
    "10th Milepost",
    "Madurankuliya",
    "Semmbatta Church",
    "Kariikattiya",
    "Naagawilluwa",
    "Paalawiya Handiya",
    "Thilladi",
    "Lung Hospital",
    "Puttalama Bus Stand",
    "Seenkudi irappu",
    "3rd Milepost",
    "4th Milepost",
    "6th Milepost",
    "7th Milepost",
    "8th Milepost",
    "9th Milepost",
    "10th Milepost",
    "12th Milepost",
    "14th Milepost",
    "15th Milepost",
    "17th Milepost",
    "18th Milepost",
    "19th Milepost",
    "21st Milepost",
    "Kala Oya",
    "Puttalama Junction",
    "Thammannawa Handiya",
    "Pahala Maragahawewa",
    "Willpattuwa Junction",
    "Nekeththegama",
    "Lindawewa",
    "30th Junction",
    "Nochchiyagama",
    "Mudithaagama",
    "Sinharagama Handiya",
    "Othappuwa Handiya",
    "Galayaya Handiya",
    "38th Junction",
    "Mahabulankulama",
    "Ulukkulama",
    "Korakahawewa",
    "Panndulagama Army Camp",
    "Kurunegala Junction",
    "Anuradhapura Old Bus Stand",
    "Anuradhapura New Bus Stand",
    "Yaapanaya Handiya",
    "2nd Milepost",
    "Saaliyapura Army Camp",
    "Maankadawala",
    "Parasangahawewa",
    "Gooneewa Handiya",
    "Rambawewa",
    "Rambewa",
    "Weelioya Handiya",
    "Ikirigollewa",
    "Wahamalugollewa",
    "Sangilikanadarawa",
    "Medawachchiya",
    "Medawachchiya Bus Stand",
    "Medawachchiya Railway Station",
    "Kadawathgama",
    "7KM Post",
    "Rambakulama",
    "Yakawewa",
    "Peekupu Idam",
    "Maankulam",
    "Neriyakulam",
    "Thanthirimale Junction",
    "Mudaliyaarkulam",
    "Muhaththaankulam",
    "Cheddikulam",
    "27KM Post",
    "Kallarupalama",
    "32KM Post",
    "Andiyapuliyankulam",
    "Uuthadi",
    "Periyakaaddu",
    "41KM Post",
    "Parayanaarankulam",
    "Kunchikulam Junction",
    "Madu Road",
    "49KM Post",
    "Kaddei Adampei",
    "Pannawadduwaan",
    "Galkadandakulam",
    "Murunkan",
    "Semmantheew",
    "Agathikaali Junction",
    "Uyintharaasankulam",
    "Parappannkandal",
    "Uyilankulam",
    "Nochchikulam",
    "Seerunawalkulam",
    "Thiruketheeswaram",
    "Mullapallawi",
    "Waankaalei Junction",
    "Thaladi Junction",
    "83KM Post",
    "Mannar",
    "Periyakaamam",
    "89KM Post",
    "Tharapuram Junction",
    "Erikkulampitiya Junction",
    "Puthukkudiyiruppu",
    "Olaiththoduvai Junction",
    "Karaisal",
    "Siruththoppu",
    "Pesalai",
    "Thullukudiyiruppu",
    "Nadukkuda Junction",
    "Keeliyan Kudiyiruppu",
    "Paridipannei",
    "Kaddukarankudiyiruppu",
    "Talaimannar Village Junction",
    "Talaimannar Pier",
    "Kebithigollewa Junction",
    "Ihalathammannwa",
    "3KM Post",
    "Mahadiwulwewa",
    "Ateweeragollewa",
    "Kumbukgollewa",
    "Athaakada",
    "14th Milepost",
    "Irallugama Handiya",
    "18th Milepost",
    "Goonamariyawa",
    "22nd Milepost",
    "24th Milepost",
    "Kebithigollewa",
    "Ihalagama Handiya",
    "Galkandegama",
    "Mahanatiyawa",
    "Galawewa",
    "Thiththagoonewa Handiya",
    "Thammannawa",
    "Herath Halmillewa",
    "Kahatagollewa",
    "Galpiyuma",
    "Bellan kadawala",
    "Aluth Halmillewa",
    "Ruwanpura",
    "Sorowwa Junction",
    "Mahasenpura",
    "6th Milepost",
    "Old Medawachchiya",
    "Eramaduwewa",
    "10th Milepost",
    "Shaanthipura",
    "Pulmoddai Police",
    "Pulmoddai",
    "Diganwewa",
    "Dematapitiya",
    "Nelumkuliya",
    "Kumara Kattuwa",
    "Mandalaana",
    "Puliyankulam",
    "Pallama",
    "Poththukulam",
    "Adammana",
    "Serukale",
    "Siyambalagaswewa",
    "Naagawila",
    "Andigama",
    "Garaayakgama",
    "Mudalakkuliya",
    "Sangattikulama",
    "Uthpalawatta",
    "Kumaragama",
    "Kothwalakanda",
    "Anamaduwa",
    "Kudawewa Handiya",
    "Periyakulama Temple Junction",
    "Thalgaswewa",
    "Labugala Rajamaha Viharaya",
    "Merungoda",
    "Mahauswewa",
    "Welewewa",
    "Mullegama",
    "Nawagaththegama",
    "Kirimatiyaawa",
    "Pulleewa",
    "Palugaswewa",
    "Nallachchiya Handiya",
    "Mahaa Naanneriya Handiya",
    "Pairikkulama",
    "Ihala Naanneriya",
    "Thaambare",
    "Ihalagama Handiya",
    "Palukandeewa",
    "Galgamuwa",
    "Rajagiriya",
    "Ethul Kotte Junction",
    "Baththaramulla",
    "Palawatta Junction",
    "Thalawathugoda",
    "Polwatta Junction",
    "Boralu Kanda",
    "Padaviya Junction",
    "A Yaya",
    "B Yaya",
    "Wellangas Junction",
    "Parakramapura",
    "Maithree Mawatha",
    "Thonigala",
    "Galkulama",
    "Galkulama Junction",
    "Palugas Junction",
    "Sri Pura",
    "Hatton",
    "Malliyapu Junction",
    "Dimale",
    "Woodland Bazaar",
    "Kuilwatte",
    "Rossella",
    "Watawala Sinhala Vidyalaya",
    "Watawala",
    "Karalina",
    "Diyagala Junction",
    "Kadawala Tamil Vidyalaya",
    "Ginigathhena Council",
    "Ginigathhena",
    "Bagathuluwa Pansala",
    "Ambagamuwa Pansala",
    "Balanthota Bodhirukkharama Viharaya",
    "Rambukpitiya Maha Vidyalaya",
    "3rd Junction",
    "Karahandungala Para",
    "Nawalapitiya",
    "Nawalapitiya Railway Gate",
    "Pattunupittya Railway Gate",
    "Pallegama Nandaramaya",
    "Ulapane Kadevidiya",
    "Thambiligalawatta Para",
    "Lakshapilla",
    "Ethgala Sri Bodhirajaramaya",
    "Mariyawattha Kadevidiya",
    "Gampola",
    "Bothalapitiya",
    "Galagediyaawa",
    "Waeligalla",
    "Gelioya",
    "Koshinna",
    "Agunawala",
    "Peradeniya",
    "Gatambe",
    "Mulgampola",
    "Kandy",
    "Mahaiyawa B.M.C Junction",
    "Katugastota",
    "4th Lane",
    "Ambathenna",
    "Akurana Town",
    "Akurana 7th Milepost",
    "8th Milepost",
    "Alawathugoda",
    "Balakaduwa Junction",
    "Warakamuuna",
    "Aelwala Junction",
    "Hospital Junction",
    "Mathale",
    "Alu Viharaya",
    "Thotagamuwa",
    "Palapathwala",
    "Kawatayamuna",
    "Kawudulu Pelella",
    "Mathale North",
    "Madawala Ulpatha",
    "Koholanwala",
    "Udu Deniya",
    "Nalanda",
    "Dumgamwela",
    "Arangala",
    "Naula Bus Stop",
    "Modella Primary School",
    "Mahaweli Junction",
    "Lenadora Maliyadeva Viharaya",
    "Pannampitiya Vidyalaya",
    "40th Milepost",
    "Dhambulu Oya",
    "Kapuwattha",
    "Vihara Junction",
    "Dambulla",
    "Mirisgoniyawa",
    "Buulagama",
    "Kitulhitiyawa",
    "Bodhiya Junction",
    "Madatugama",
    "Kotaagala",
    "Kailapathana Junction",
    "Elagamuwa",
    "Korasgala",
    "Kolombaawa",
    "Kekirawa",
    "Deport Junction",
    "Oolukarada",
    "Miriswatta 2",
    "Thonigala",
    "Maradankadawala",
    "Ulankulama",
    "Periyakulama",
    "Wanamal Uyana",
    "Kandupagama Handiya",
    "Alisthaana",
    "Thirappane",
    "117KM Post",
    "Gdhanikkulama",
    "Galkulama 2",
    "Siyambalagaswewa",
    "Wewaldigiliya Handiya",
    "128KM Post",
    "Thapowanaya",
    "Mihintale",
    "University of Rajarata Hostel",
    "Doramadalawa Handiya",
    "Walekade Handiya",
    "Yaya 2 Handiya",
    "Isinbessagala",
    "Pillayar Kovil",
    "Navy Camp",
    "Poonewa",
    "Siyambalagaswewa 2",
    "Mahakumbukgollewa",
    "Galkandegama 2",
    "Galkundamadu Handiya",
    "Irattiperiyamkulama",
    "Muundruiyrippu",
    "Vavuniya",
    "Department of Agriculture",
    "Thaandikulam",
    "Kokeliya Gammana Para",
    "Pudiya Sinnakulam Junction",
    "Omanthai 187KM Post",
    "Omanthai Co-Op",
    "Omanthai Madya Maha Vidyalaya",
    "Omanthai Checkpoint",
    "194KM Post",
    "Pandikeyidakulam",
    "Puliyankulam Filling Station",
    "Puliyankulam 200KM Post",
    "Puliyankulam (Nadunkeerthi Rd)",
    "Murandu Murippukulam",
    "Parasankulam",
    "Puduwuur Junction",
    "Kanagaraajakulam Kovil",
    "Kanagaraajakulam Madya Vidyalaya",
    "Kanagaraajakulam Health Center",
    "Periyakulam Tamil Madya Vidyalaya",
    "Mannakulam Junction",
    "Telecommunication Tower",
    "Kunchikulam 221KM Post",
    "Maankulam (Mullaitivu Rd)",
    "Maankulam Madya Vidyalaya",
    "Panikkaankulam Tamil Madya Vidyalaya",
    "Palayamurugandi Kovil",
    "Kokavil",
    "Murugandi Kovil",
    "Faculty of Agriculture",
    "Iranamadu Junction",
    "Kilinochchi",
    "Kilinochchi District Hospital",
    "Kilinochchi Water Tank",
    "Karadipork Junction",
    "Paranthan",
    "Umayaanpuram Grama Niladari Office",
    "Umayaanpuram Kovil",
    "Elephant Pass Gamini Kularathne Memorial",
    "Elephant Pass Army Memorials",
    "Ayiyakachchi Tamil Madya Vidyalaya",
    "Pudukaadu Junction",
    "Palei",
    "Palei Marketplace",
    "Muhamalai",
    "Muhamalai Stop",
    "Aasai Pillei Eeththam",
    "Miriswill",
    "Kodikamam Town",
    "Kodikamam Murugan Kovil",
    "Puththur",
    "Arasadi Junction",
    "Chavakachcheri",
    "Chavakachcheri Aiiyar Rd",
    "Chavakachcheri Police Station",
    "Kaithady Bridge",
    "Kaithady",
    "Navathkuli",
    "Semmani",
    "Ariyalai Junction",
    "Ariyalai",
    "Jaffna Kachcheri",
    "Jaffna"

];

let sortedNames = locations.sort();
let input = document.getElementById("userInput");
let listContainer = document.querySelector(".list");

input.addEventListener("keyup", (e) => {
  removeElements();
  let hasSuggestions = false; 
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
      listItem.addEventListener("click", function () {
        displayNames(i);
      });
      listContainer.appendChild(listItem);
      hasSuggestions = true; 
    }
  }
  listContainer.style.display = hasSuggestions ? "block" : "none";
});

function displayNames(value) {
  input.value = value;
  removeElements();
  listContainer.style.display = "none";
}

function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

let input2 = document.getElementById("userInput2");
let listContainer2 = document.querySelector(".list2");

input2.addEventListener("keyup", (e) => {
  removeElements2();
  let hasSuggestions = false; 
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
      listItem.addEventListener("click", function () {
        displayNames2(i);
      });
      listContainer2.appendChild(listItem);
      hasSuggestions = true; 
    }
  }
  listContainer2.style.display = hasSuggestions ? "block" : "none";
});

function displayNames2(value) {
  input2.value = value;
  removeElements2();
  listContainer2.style.display = "none";
}
function removeElements2() {
  let items = document.querySelectorAll(".list-items2");
  items.forEach((item) => {
    item.remove();
  });
}

