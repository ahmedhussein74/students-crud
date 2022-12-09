const students = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items"))
  : [];

let myList = document.getElementById("root");

students.map((element) => {
  myList.innerHTML += `
  <tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.course}</td>
    <td class="d-flex justify-content-around">
      <button class="btn bg-danger p-0 text-white" onclick="deleteStudent(${element.id}, this)">Delete</button>
      <a class="btn bg-info p-0 text-white" href="update.html?id=${element.id}">Update</a>
    </td>
  </tr>`;
});

function addStudent() {
  let name = document.getElementById("name").value;
  let course = document.getElementById("course").value;
  let stud = {
    id: students.length + 1,
    name: name,
    course: course,
  };

  if (name && course) {
    students.push(stud);
    localStorage.setItem("items", JSON.stringify(students));
    myList.innerHTML += `
      <tr>
        <td>${stud.id}</td>
        <td>${stud.name}</td>
        <td>${stud.course}</td>
        <td class="d-flex justify-content-around">
          <button class="btn bg-danger p-0 text-white" onclick="deleteStudent(${stud.id}, this)">Delete</button>
          <a class="btn bg-info p-0 text-white" href="update.html?id=${stud.id}">Update</a>
        </td>
      </tr>`;
    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
  } else {
    alert("Please Enter a Valid Data");
  }
}

function deleteStudent(id, child) {
  students.map((element, index) => {
    if (element.id == id) {
        students.splice(index, 1);
    }
  });

  localStorage.setItem("items", JSON.stringify(students));
  child.parentNode.parentNode.remove();
}
