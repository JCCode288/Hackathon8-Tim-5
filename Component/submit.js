function submit() {
  let form = document.forms.personForm;

  let vaksinId = [
    `vacc1`,
    `vacc2`,
    `vacc3`,
    `vacc4`,
    `vacc5`,
    `vacc6`,
    `vacc7`,
    `vacc8`,
  ];
  let vaksinNama = [
    `Polio`,
    `Dengue`,
    `Rotaro Virus`,
    `Influenza`,
    `Tifoid`,
    `HPV`,
    `Hepatitis A`,
    `Hepatitis B`,
  ];

  form.addEventListener("submit", (event) => {
    let formToSend = {};
    formToSend["name"] = form["name"].value;
    formToSend["tanggalLahir"] = form["umur"].value;

    for (let i = 0; i < vaksinId.length; i++) {
      if (document.getElementById(vaksinId[i]).checked) {
        formToSend[vaksinNama[i]] = true;
      } else {
        formToSend[vaksinNama[i]] = false;
      }
    }

    let e = document.getElementById(`city`)
    formToSend['tempatTinggal'] = e.options[e.selectedIndex].text;
    localStorage.setItem(`person`, JSON.stringify(formToSend));
    console.log(document.forms.personForm);
  });
}
export default submit;
