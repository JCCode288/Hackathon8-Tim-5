function submit() {
  let form = document.forms.personForm;
  let vaksinId = JSON.parse(localStorage.getItem("vaksinId"));
  let vaksinNama = JSON.parse(localStorage.getItem("vaksinNama"));

  form.addEventListener("submit", (event) => {
    let formToSend = {};
    let tahun = form["umur"].value.slice(0, 4);
    let umur = 2023 - Number(tahun);
    formToSend["name"] = form["name"].value;
    formToSend["tanggalLahir"] = form["umur"].value;
    formToSend["umur"] = umur;
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
  });
}
export default submit;
