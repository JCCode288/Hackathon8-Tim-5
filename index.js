import deleteLog from "./Component/deleteLog.js";
import deletingForm from "./Component/deletingForm.js";
import submit from "./Component/submit.js";

let databaseSurabaya = [
  [1, "Asemrowo", "dr. Diah Miryati", "Jln. Asem Raya No. 8", "(031) 5456122"],
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
function storeDb() {
  let objDb = {};
  for (const [noUrut, ...sisaArr] of databaseSurabaya) {
    if (sisaArr.length > 2 && sisaArr.length > 3) {
      if (!objDb[noUrut]) {
        objDb[noUrut] = {};
      }
      let [nama, lokasi, noTelp] = sisaArr;
      objDb[noUrut]["nama"] = nama;
      objDb[noUrut]["lokasi"] = lokasi;
      objDb[noUrut]["noTelp"] = noTelp;
    }
  }
  localStorage.setItem("surabayaArr", JSON.stringify(objDb));
}
storeDb();
submit();
deletingForm();
document.getElementById("clear").addEventListener("click", () => {
  deleteLog();
});
// let nama = document.getElementById("formName").value;
// nama.addEventListener
// let umur = document.getElementById("formUmur").value;
// console.log(nama, umur);
// console.log(rambo);

// export { form, deletingForm, submit, deleteLog };
