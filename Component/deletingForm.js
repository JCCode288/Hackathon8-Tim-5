function deletingForm() {
  let form = document.getElementById("personForm");
  let person = JSON.parse(localStorage.getItem("person"));
  let nama = document.getElementsByClassName("nameGreets");
  if (person) {
    let h1Name = document.createElement("h1");
    h1Name.innerText = `${person.name}, ${person.umur}`;
    nama[0].append(h1Name);
    form.style.display = "none";
  } else {
    form.style.display = "relative";
  }
}
export default deletingForm;
