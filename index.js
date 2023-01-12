import deleteLog from "./Component/deleteLog.js";
import deletingForm from "./Component/deletingForm.js";
import submit from "./Component/submit.js";

let databaseSurabaya = [
  [1, "Asemrowo", "dr. Diah Miryati", "Jln. Asem Raya No. 8", "(031) 5456122"][
    (2,
    "Balas Klumprik",
    "dr. Yessy Pebriaty Sukatendel. MM",
    "Jln. Raya Balas Klumprik",
    "(031)",
    "7665219")
  ][
    (3,
    "Balongsari",
    "dr. Dewi Ayuning Asih",
    "Jln. Balongsari Tama No. 2 Surabaya",
    "(031) 7417104")
  ][
    (4,
    "Bangkingan",
    "dr. Winartuti Santoso, M.Kes",
    "Jln. Banyu Urip Kidul 6/8",
    "(031) 5685424")
  ][
    (5,
    "Banyu Urip",
    "dr. Aloysius Tri Joehanto, MH",
    "Jln. Raya Benowo No. 48",
    "(031) 7405936")
  ][
    (6,
    "Benowo",
    "dr. Aloysius Tri Joehanto",
    "MH	Jln. Raya Benowo No. 48",
    "(031) 7405936")
  ][
    (7,
    "Bulak Banteng",
    "drg. Elfi Asriningdiah Poedji Utami",
    "Jln. Dukuh Bulak Banteng Perintis Utama Lebar No.35",
    "(031) 3765209")
  ][
    (8,
    "Dr. Soetomo",
    "dr. Murtiningrum",
    "Jln. Pandegiling No.223-A",
    "081334932059")
  ][
    (9,
    "Dukuh Kupang",
    "dr. Khusnul Khowatin",
    "Jln. Dukuh Kupang 25/48",
    "(031) 5677615")
  ][
    (10,
    "Dupak",
    "dr. RR. Endang Dwihastutiningsih",
    "Jln. Dupak Bangunrejo Gg Poliklinik No.6 Surabaya",
    "(031) 3531009")
  ][
    (11,
    "Gading",
    "dr. Dwiastuti Setyorini",
    "Jln. Kapas Lor 1 no 1 Surabaya",
    "(031) 3767736")
  ][
    (12,
    "Gayungan",
    "drg. Harijanti Judaningsih",
    "Jln. Gayungsari Barat 124",
    "(031) 8290043")
  ][
    (13,
    "Gundih",
    "dr. Tita Pusparini, M. Kes",
    "Jln. Margodadi 36 - 38 Surabaya",
    "(031) 5476275")
  ][(14, "Gunung Anyar")][
    (15,
    "Jagir",
    "dr. Dessy Jumiaty Setia",
    "Jln. Bendul Merisi No 1",
    "(031) 8416926")
  ][
    (16,
    "Jemursari",
    "drg. Siti Januarsih",
    "Jln. Jemursari Selatan IV/5",
    "(031)8414743")
  ][
    (17,
    "Jeruk",
    "drg. Harjanti",
    "Jln. Raya Menganti Jeruk 277A",
    "(031) 7521680")
  ][
    (18,
    "Kalijudan",
    "dr. Ageng Rusbaya",
    "Jln. Kalijudan No. 123",
    "(031) 3824566")
  ][
    (19,
    "Kalirungkut",
    "dr. Bernadetta Martini",
    "Jln. Rungkut Puskesmas No. 1",
    "(031) 8700668")
  ][
    (20,
    "Kebonsari",
    "dr. Reyner Meilaksana S.M.H.Kes",
    "Jln. Kebonsari Manunggal No. 30 - 31",
    "(031) 8294420")
  ][
    (21,
    "Kedungdoro",
    "dr. Diah Roichan Arifiani, M.Kes",
    "Jln. Kaliasin Pompa 79-81 Surabaya",
    "(031) 5345968")
  ][(22, "Kedurus")][
    (23,
    "Kenjeran",
    "dr. Rosna Suswanti",
    "Jl. Tambak Deres 2 Surabaya",
    "089515356046")
  ][
    (24,
    "Keputih",
    "drg. Siti Rozaemah, M. Kes",
    "Jln. Keputih Tegal No. 19",
    "081336211653")
  ][
    (25,
    "Ketabang",
    "dr. Joyce Hestia Nugrahanti",
    "Jln. Jaksa Agung Suprapto No 10",
    "(031) 5311999")
  ][
    (26,
    "Klampis Ngasem",
    "dr. Denti Lina Rouli Tumanggor",
    "Jln. Arif Rahman Hakim 99B",
    "(031) 5992389")
  ][
    (27,
    "Krembangan Selatan",
    "dr. Raden Muhammad Ali Satria",
    "Jln. Pesapen Selatan No. 70",
    "081252405563")
  ][
    (28,
    "Lidah Kulon",
    "dr. Heni Agustina",
    "Jln. Menganti No. 1111A",
    "(031) 7533544")
  ][
    (29,
    "Lontar",
    "dr. Maulidina Fitria Ning Tiyas",
    "Jln. Lontar No. 26",
    "(031) 7522874")
  ][
    (30,
    "Made",
    "drg. Endang Susilowati",
    "Jln. Raya Made No 116 Kelurahan Made Kecamatan Sambikerep Surabaya",
    "(031) 7440828")
  ][
    (31,
    "Manukan Kulon",
    "dr. Lolita Riamawati, M.Kes",
    "Jln. Manukan Dalam 12 Tandes Surabaya",
    "(031) 7405982")
  ][
    (32,
    "Medokan Ayu",
    "dr. Dini Octavia Sitaresmi",
    "Jln. Medokan Asri Utara IV No. 31 Surabaya",
    "(031) 8720080")
  ][
    (33,
    "Menur",
    "dr. Medyana Puspita",
    "Jln. Manyar Rejo 1 no. 35",
    "(031) 5948677")
  ][
    (34,
    "Mojo",
    "dr. Ratna Megasari, M.Kes",
    "Jln. Mojo Klanggru Wetan 2/11",
    "(031) 5932332")
  ][
    (35,
    "Morokrembangan",
    "dr. Nurul Ihsani",
    "Jln. Tambakasri 13/7 Morokrembangan",
    "(031) 7493259")
  ][
    (36,
    "Mulyorejo",
    "dr. Erna Mindarti",
    "Jln. Mulyorejo Utara 201 BLK.",
    "(031) 3816885")
  ][
    (37,
    "Ngagel Rejo",
    "dr. Febria Sukmaini",
    "Jln. Ngagel Dadi III No.17",
    "(031) 5047055")
  ][
    (38,
    "Pacar Keling",
    "dr. Suluh Rahardjo",
    "Jln. Jolotundo Baru III/16",
    "(031) 50322310")
  ][
    (39,
    "Pakis",
    "drg. Puspa Karmila",
    "Jln. Kembang Kuning No.2",
    "(031) 5632985")
  ][
    (40,
    "Pegirian",
    "dr. Retno Widayanti",
    "Jln. Karang Tembok No 39",
    "(031) 3766179")
  ][
    (41,
    "Peneleh",
    "dr. Ayu Ekanita Hendrayani",
    "Jln. Makam Peneleh No.35",
    "(031) 5343473")
  ][
    (42,
    "Perak Timur",
    "dr. Anggraini Dian Prameswari",
    "Jln. Jakarta 9 Kel. Perak Timur Kec. Pabean Cantian Kab. Surabaya",
    "(031) 3524247")
  ][
    (43,
    "Pucang Sewu",
    "drg. Prasukma Yogawarti",
    "Jln. Pucang Anom Timur No. 72",
    "(031) 5018527")
  ][
    (44,
    "Putat Jaya",
    "drg. Teguh Rahayu",
    "Jln. Kupang Gunung V Raya no.16 Surabaya",
    "(031) 5687637")
  ][(45, "Rangkah")][
    (46,
    "Sawah Pulo",
    "dr. Gerryd Dina Soepardi",
    "Jln. Sawah Pulo Lapangan No. 2",
    "(031) 3296128")
  ][
    (47,
    "Sawahan",
    "dr. Grace Augustien W",
    "Jln. Raya Arjuna 119",
    "(031) 5342375")
  ][(48, "Sememi")][(49, "Sidosermo")][
    (50,
    "Sidotopo",
    "dr. Galih Satryo Utomo",
    "Jln. Pegirian No.236 Surabaya",
    "(031) 3767735")
  ][
    (51, "Sidotopo Wetan", "dr. Evi Susanti", "Jln. Randu 38", "(031) 3767737")
  ][
    (52,
    "Simolawang",
    "dr. Dwi Sapta Edy Purnama",
    "Jln. Simolawang II Barat 45 A",
    "(031) 3717433")
  ][(53, "Simomulyo")][
    (54,
    "Siwalankerto",
    "dr. Sri Hawati",
    "Jln. Siwalankerto No.134",
    "(031) 8482487")
  ][
    (55,
    "Tambak Rejo",
    "drg. Yekti Hapsari",
    "Jln. Ngaglik 87",
    "(031) 3715539")
  ][(56, "Tambak Wedi")][
    (57,
    "Tanah Kali Kedinding",
    "dr. Era Kartikawati",
    "Jln. H. M. Noer 226",
    "(031) 51501347")
  ][
    (58,
    "Tanjungsari",
    "dr. Yunita Andriani",
    "Jln. Raya Tanjungsari No.116",
    "(031) 7497858")
  ][
    (59,
    "Tembok Dukuh",
    "drg. Tiyas Pranadani",
    "Jln. Kalibutuh No 26 Surabaya",
    "(031) 5343410")
  ][
    (60,
    "Tenggilis",
    "dr. Riana Restuti",
    "Jln. Rungkut Mejoyo Selatan IV/P-48",
    "(031) 8490234")
  ][
    (61,
    "Wiyung",
    "dr. Tatien Tjahjandari",
    "Jln. Menganti Wiyung Pasar No. 1",
    "(031) 7532885")
  ][
    (62,
    "Wonokromo",
    "drg. Dwiana Yuniarti",
    "Jln. Karangrejo VI/4",
    "(031) 8281647")
  ][
    (63,
    "Wonokusumo",
    "dr. Heri Siswanto",
    "Jln. Wonokusumo Tengah No.55",
    "(031) 3717597")
  ],
];
function storeDb() {
  localStorage.setItem("surabayaArr", JSON.stringify(databaseSurabaya));
}
storeDb();
submit();
// deletingForm();
document.getElementById("clear").addEventListener("click", () => {
  deleteLog();
});
// let nama = document.getElementById("formName").value;
// nama.addEventListener
// let umur = document.getElementById("formUmur").value;
// console.log(nama, umur);
// console.log(rambo);

// export { form, deletingForm, submit, deleteLog };
