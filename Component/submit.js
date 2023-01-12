function submit() {
  let form = document.forms.personForm;
  let vaksinId = JSON.parse(localStorage.getItem("vaksinId"));
  let vaksinNama = JSON.parse(localStorage.getItem("vaksinNama"));

  form.addEventListener("submit", (event) => {
    let formToSend = {};
    formToSend["name"] = form["name"].value;
    formToSend["tanggalLahir"] = form["umur"].value;
    formToSend["vaccined"] = {};
    for (let i = 0; i < vaksinId.length; i++) {
      if (document.getElementById(vaksinId[i]).checked) {
        formToSend["vaccined"][vaksinNama[i]] = true;
      } else {
        formToSend["vaccined"][vaksinNama[i]] = false;
      }
    }

    let kota = document.getElementById(`city`);
    formToSend["tempatTinggal"] = kota.options[kota.selectedIndex].text;
    localStorage.setItem(`person`, JSON.stringify(formToSend));
    console.log(document.forms.personForm);
  });
}
export default submit;