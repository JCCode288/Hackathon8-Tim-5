function submit() {
  let form = document.getElementById("personForm");
  form.addEventListener("submit", (event) => {
    let formToSend = {};
    formToSend["name"] = form["name"].value;
    formToSend["umur"] = form["umur"].value;
    localStorage.setItem(`person`, JSON.stringify(formToSend));
    // event.preventDefault();
  });
}
export default submit;
