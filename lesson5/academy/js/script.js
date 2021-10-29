let classrooms = [
  { name: "Front-End", seats: 16, faculty: "IT" },
  { name: "Digital Marketing", seats: 12, faculty: "Marketing" },
  { name: "UI/UX", seats: 18, faculty: "Design" },
  { name: "Python", seats: 20, faculty: "IT" },
  { name: "React", seats: 19, faculty: "IT" },
  { name: "Project Management", seats: 14, faculty: "Business analytics" },
  { name: "QA", seats: 11, faculty: "Business analytics" },
  { name: "HR Generalist", seats: 13, faculty: "HR" },
  { name: "Back-End", seats: 10, faculty: "IT" },
  { name: "HR for IT", seats: 15, faculty: "HR" },
];


// Table for classrooms array
let countAcademy = classrooms.length;

let table = document.createElement('table');
table.setAttribute('border', '1');
table.setAttribute('color', '000');
table.setAttribute('width', '500');
table.setAttribute('height', '300');

let tbody = document.createElement('tbody');
let tr = document.createElement('tr');
tr.innerHTML = '<td>Classroom name</td><td>Number of seats</td><td>Faculty</td>';
tbody.appendChild(tr);
let items = ['name', 'seats', 'faculty'];

for (let i = 0; i < countAcademy; i++) {
  let tr = document.createElement('tr');

  for (let j = 0; j < 3; j++) {
    let td = document.createElement('td');
    let item = classrooms[i][items[j]];
    td.innerHTML = item;
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}

table.appendChild(tbody);

document.getElementById('table-academy').appendChild(table);

// Function to create string from given parameters
function createString(name, seats, faculty) {
  return name + ": " + seats + ", " + faculty;
}

// Function to show list from the given string
function outputList(string) {
  let ul = document.getElementById("academy-list");
  ul.insertAdjacentHTML("beforeend", "<li>" + string + "</li>");
}

// Function to show classrooms of a given faculty
function showRoomName(faculty) {
  let newArr = classrooms.filter((el) => el.faculty == faculty);
  let roomArr = [];
  newArr.forEach((element) => {
    roomArr.push(element.name);
  });

  let newString = roomArr.join(', ');

  return `Classrooms: ${newString}.`;
}

// Function to sort seats of the academy in numeric order
function sortSeats() {
  classrooms.sort(function (a, b) {
    return a.seats - b.seats;
  });
  let newArr = classrooms.slice();
  return newArr;
}

// Function to sort rooms of the academy in alphabetic order
function sortRooms() {
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  let newArr = classrooms.sort(compare);
  return newArr;
}



let btnSeats = document.getElementById("seats-btn");
let btnRooms = document.getElementById("rooms-btn");
let btnFac = document.getElementById("fac-btn");


btnFac.addEventListener("click", () => {
  let faculty = document.getElementById("faculty").value;
  document.getElementById("info-area").innerHTML = showRoomName(faculty);
});

btnSeats.addEventListener("click", () => {
  let sortArr = sortSeats();
  for (let newString of sortArr.map(function (e) {
    return createString(e.name, e.seats, e.faculty);
  })) {
    outputList(newString);
  }
});

btnRooms.addEventListener("click", () => {
  let sortArr = sortRooms();
  for (let newString of sortArr.map(function (e) {
    return createString(e.name, e.seats, e.faculty);
  })) {
    outputList(newString);
  }
});