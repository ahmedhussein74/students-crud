const students = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

students.map((element) => {
  if (element.id == id) {
    document.getElementById("updateName").value = element.name;
    document.getElementById("updateCourse").value = element.course;
  }
});

function updateStudent() {
  let name = document.getElementById("updateName").value;
  let course = document.getElementById("updateCourse").value;
  let stud = {
    id: id,
    name: name,
    course: course,
  };
  if (name && course) {
    students.map((element) => {
      if (element.id == id) {
        element.name = stud.name;
        element.course = stud.course;
      }
    });
    localStorage.setItem("items", JSON.stringify(students));
    window.location.replace("index.html");
  } else {
    alert("Please Enter a Valid Data");
  }
}
