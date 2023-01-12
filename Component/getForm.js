function getForm() {
  let submitForm = document.forms.personForm;
  form.addEventListener("Submit", (event) => {
    // event.preventDefault();
    let formToSend = {};
    // console.log(formToSend);
    // for (const keys in form) {
    //   formToSend[keys] = form[keys].value;
    // }
    submitForm["name"] = form["name"].value;
    submitForm["umur"] = form["umur"].value;
    submitForm["vaccs"] = form["vaccs"].value;
    localStorage.setItem(`person`, JSON.stringify(formToSend));
  });
}

export default getForm;
