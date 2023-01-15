function populateLokasi() {
  let person = JSON.parse(localStorage.getItem("person"));
  let personLoc = person["tempatTinggal"].toLowerCase();
  let locationDB = JSON.parse(localStorage.getItem(`${personLoc}Arr`));

  console.log(locationDB);
  let count = 1;
  let mainLokasi = document.getElementById("containerLokasi");
  //   console.log(mainLokasi);
  for (const key in locationDB) {
    let { nama, lokasi, pimpinan, noTelp } = locationDB[key];
    // console.log(nama, lokasi, pimpinan, noTelp);
    mainLokasi.setAttribute("class", "mainLokasi font-serif");
    //per card start
    let lokasiVaksin = document.createElement("div");
    lokasiVaksin.setAttribute(
      "class",
      "lokasiVaksin flex justify-between bg-opacity-90 bg-white blur-md invert drop-shadow-xl md:filter-none"
    );
    let divContainer = document.createElement("div");
    divContainer.setAttribute("class", "flex-row w-full");
    //container header card
    let containerHead = document.createElement("div");
    let upperContainer = document.createElement("div");
    upperContainer.setAttribute("class", "flex justify-between w-full");
    let pLogo = document.createElement("p");
    pLogo.innerText = "🏥";
    pLogo.setAttribute("class", "text-lg");
    let buttonWrap = document.createElement("div");
    buttonWrap.setAttribute("class", "w-1/5 h-4 flex flex-wrap justify-end");
    let buttonWrap2 = document.createElement("div");
    buttonWrap2.setAttribute("class", "w-full");
    buttonWrap.append(buttonWrap2);
    let buttonWrap3 = document.createElement("div");
    buttonWrap3.setAttribute("class", "w-full h-full flex");
    buttonWrap2.append(buttonWrap3);
    let theButton = document.createElement("button");
    theButton.innerText = "Daftar";
    theButton.setAttribute("onclick", "alarm()");
    theButton.setAttribute("type", "button");
    theButton.setAttribute(
      "class",
      "daButton mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    );
    buttonWrap3.append(theButton);
    let pPuskes = document.createElement("p");
    pPuskes.innerText = "Puskesmas";
    pPuskes.setAttribute("class", "text-lg");
    upperContainer.append(pLogo, buttonWrap);
    containerHead.append(upperContainer, pPuskes);
    //container puskes
    let containerNama = document.createElement("div");
    let pNama = document.createElement("p");
    pNama.innerText = nama;
    pNama.setAttribute("class", "text-lg font-semibold");
    containerNama.append(pNama);
    //location container
    let containerLocation = document.createElement("div");
    containerLocation.setAttribute("class", "flex");
    let pin = document.createElement("p");
    pin.innerText = "📌";
    pin.setAttribute("class", "text-base mr-2");
    let pLocation = document.createElement("p");
    pLocation.innerText = lokasi;
    pLocation.setAttribute("class", "text-base");
    containerLocation.append(pin, pLocation);
    //container info
    let containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "flex");
    let call = document.createElement("p");
    call.innerText = "📞";
    call.setAttribute("class", "text-base mr-2");
    let pInfo = document.createElement("p");
    pInfo.innerText = noTelp;
    pInfo.setAttribute("class", "text-base mr-5");
    let pPimpinan = document.createElement("p");
    pPimpinan.innerText = pimpinan;
    pPimpinan.setAttribute("class", "text-base mr-5");
    containerInfo.append(call, pInfo, pPimpinan);
    divContainer.append(
      containerHead,
      containerNama,
      containerLocation,
      containerInfo
    );
    lokasiVaksin.append(divContainer);
    mainLokasi.append(lokasiVaksin);
  }
}
export default populateLokasi;
