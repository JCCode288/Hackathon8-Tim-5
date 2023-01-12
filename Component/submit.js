function submit() {
  let form = document.forms.personForm;
  form.addEventListener("submit", (event) => {
    // event.preventDefault();
    let formToSend = {};
    // console.log(formToSend);
    // for (const keys in form) {
    //   formToSend[keys] = form[keys].value;
    // }
    formToSend["name"] = form["name"].value;
    formToSend["umur"] = form["umur"].value;
    formToSend["vaccs"] = form["vaccs"].value;
    localStorage.setItem(`person`, JSON.stringify(formToSend));
  });
}
export default submit;
