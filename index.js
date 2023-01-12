import deleteLog from "./Component/deleteLog.js";
import deletingForm from "./Component/deletingForm.js";
import submit from "./Component/submit.js";
import vaccinedArray from "./Component/vaccined.js";
import greetingStatus from "./Component/greeting.js";

function storeDb() {
  let databaseSurabaya = [
    [
      1,
      "Asemrowo",
      "dr. Diah Miryati",
      "Jln. Asem Raya No. 8",
      "(031) 5456122",
    ],
    [
      2,
      "Balas Klumprik",
      "dr. Yessy Pebriaty Sukatendel. MM",
      "Jln. Raya Balas Klumprik",
      "(031)7665219",
    ],
    [
      3,
      "Balongsari",
      "dr. Dewi Ayuning Asih",
      "Jln. Balongsari Tama No. 2 Surabaya",
      "(031) 7417104",
    ],
    [
      4,
      "Bangkingan",
      "dr. Winartuti Santoso, M.Kes",
      "Jln. Banyu Urip Kidul 6/8",
      "(031) 5685424",
    ],
    [
      5,
      "Banyu Urip",
      "dr. Aloysius Tri Joehanto, MH",
      "Jln. Raya Benowo No. 48",
      "(031) 7405936",
    ],
    [
      6,
      "Benowo",
      "dr. Aloysius Tri Joehanto",
      "MH	Jln. Raya Benowo No. 48",
      "(031) 7405936",
    ],
    [
      7,
      "Bulak Banteng",
      "drg. Elfi Asriningdiah Poedji Utami",
      "Jln. Dukuh Bulak Banteng Perintis Utama Lebar No.35",
      "(031) 3765209",
    ],
    [
      8,
      "Dr. Soetomo",
      "dr. Murtiningrum",
      "Jln. Pandegiling No.223-A",
      "081334932059",
    ],
    [
      9,
      "Dukuh Kupang",
      "dr. Khusnul Khowatin",
      "Jln. Dukuh Kupang 25/48",
      "(031) 5677615",
    ],
    [
      10,
      "Dupak",
      "dr. RR. Endang Dwihastutiningsih",
      "Jln. Dupak Bangunrejo Gg Poliklinik No.6 Surabaya",
      "(031) 3531009",
    ],
    [
      11,
      "Gading",
      "dr. Dwiastuti Setyorini",
      "Jln. Kapas Lor 1 no 1 Surabaya",
      "(031) 3767736",
    ],
    [
      12,
      "Gayungan",
      "drg. Harijanti Judaningsih",
      "Jln. Gayungsari Barat 124",
      "(031) 8290043",
    ],
    [
      13,
      "Gundih",
      "dr. Tita Pusparini, M. Kes",
      "Jln. Margodadi 36 - 38 Surabaya",
      "(031) 5476275",
    ],
    [14, "Gunung Anyar"],
    [
      15,
      "Jagir",
      "dr. Dessy Jumiaty Setia",
      "Jln. Bendul Merisi No 1",
      "(031) 8416926",
    ],
    [
      16,
      "Jemursari",
      "drg. Siti Januarsih",
      "Jln. Jemursari Selatan IV/5",
      "(031)8414743",
    ],
    [
      17,
      "Jeruk",
      "drg. Harjanti",
      "Jln. Raya Menganti Jeruk 277A",
      "(031) 7521680",
    ],
    [
      18,
      "Kalijudan",
      "dr. Ageng Rusbaya",
      "Jln. Kalijudan No. 123",
      "(031) 3824566",
    ],
    [
      19,
      "Kalirungkut",
      "dr. Bernadetta Martini",
      "Jln. Rungkut Puskesmas No. 1",
      "(031) 87006689",
    ],
    [
      20,
      "Kebonsari",
      "dr. Reyner Meilaksana S.M.H.Kes",
      "Jln. Kebonsari Manunggal No. 30 - 31",
      "(031) 8294420",
    ],
  ];
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
  let objDb = {};
  for (const [noUrut, ...sisaArr] of databaseSurabaya) {
    if (sisaArr.length > 2 && sisaArr.length > 3) {
      if (!objDb[noUrut]) {
        objDb[noUrut] = {};
      }
      let [nama, pimpinan, lokasi, noTelp] = sisaArr;
      objDb[noUrut]["nama"] = nama;
      objDb[noUrut]["pimpinan"] = pimpinan;
      objDb[noUrut]["lokasi"] = lokasi;
      objDb[noUrut]["noTelp"] = noTelp;
    }
  }
  localStorage.setItem("vaksinId", JSON.stringify(vaksinId));
  localStorage.setItem("vaksinNama", JSON.stringify(vaksinNama));
  localStorage.setItem("surabayaArr", JSON.stringify(objDb));
}
storeDb();
submit();
deletingForm();
document.getElementById("clear").addEventListener("click", () => {
  deleteLog();
});
vaccinedArray();
greetingStatus();

// let location = document.getElementById("mainLokasi");
// let personLoc = JSON.parse(localStorage.getItem("person"))["tempatTinggal"];
let locationDB = JSON.parse(localStorage.getItem(`surabayaArr`))
console.log(locationDB);

let mainLokasi = document.getElementById("containerLokasi");
console.log(mainLokasi);
for (const key in locationDB) {
  let { nama, lokasi, pimpinan, noTelp } = locationDB[key];
  console.log(nama, lokasi, pimpinan, noTelp);
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
  theButton.setAttribute("type", "button");
  theButton.setAttribute(
    "class",
    "mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  );
  theButton.innerText = `Daftar`
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