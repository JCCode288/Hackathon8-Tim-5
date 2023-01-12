function greetingStatus() {
  let greetingsContainer = document.getElementById("greetings");
  let person = JSON.parse(localStorage.getItem("person"));

  if(person){
    let { name, umur , tempatTinggal } = person;
    let headerContainer = document.createElement("div");
    let header = document.createElement("div");
    header.innerText = ` 👋 Hi, selamat datang ${name}! `;
    let umurHead = document.createElement("div");
    if(umur === 0){
      umur = `belum genap se`
    } else if (umur > 0){
      umur = `${umur} `
    } else {
      umur = `invalid `
    }
    if(tempatTinggal != `Surabaya` && tempatTinggal != `Jakarta`){
      tempatTinggal = `tidak diketahui`
    }
    umurHead.innerText = `Umur: ${umur}tahun - Domisili: ${tempatTinggal}.`;
    umurHead.setAttribute("class", "text-sm ml-10")
    headerContainer.append(header, umurHead);
    headerContainer.setAttribute("class", "flex-row text-left");
    greetingsContainer.append(headerContainer);
  }
}

export default greetingStatus;
