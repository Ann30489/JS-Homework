const mainDiv = document.getElementById("table-content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "info-table");
tableDiv.className = "info-table";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content-table");
tableTag.className = "content-table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
  constructor(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.position = position;
  }
}
const arrEmp = [
  new Employee("Rachel Green", 26, "female", "bank teller"),
  new Employee("Chandler Bing", 29, "male", "loan officer"),
  new Employee("Monica Geller", 31, "female", "internal auditor"),
  new Employee("Joseph Tribbiani", 26, "male", "relationship manager"),
  new Employee("Phoebe Buffay", 32, "female", "underwriter"),
  new Employee("Ross Geller", 27, "male", "credit analyst"),

];
class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }
  getHtml() {
    const table = document.getElementById("content-table");
    const array = this.arr;
    const head = document.createElement("tr");
    head.setAttribute("style", "font-size: 25px;");
    const th1 = document.createElement("th");
    th1.textContent = "Name";
    const th2 = document.createElement("th");
    th2.textContent = "Age";
    const th3 = document.createElement("th");
    th3.textContent = "Gender";
    const th4 = document.createElement("th");
    th4.textContent = "Position";
    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);
    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 5px; font-size: 20px;");
      }
    }
    table.setAttribute("border", "4");
    table.setAttribute("bordercolor", "green");
    table.setAttribute("width", "80%");
    table.setAttribute("style", "margin: auto");
  }
}
const tableObj = new EmpTable(arrEmp);
tableObj.getHtml();