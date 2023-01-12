function deletingForm() {
  let form = document.getElementById("containerForm");
  let person = JSON.parse(localStorage.getItem("person"));
  if (person) {
    form.style.display = "none";
    let body = document.body;
    body.style = "overflow-y: scroll";
  } else {
    form.style.display = "absolute";
  }
}
export default deletingForm;
