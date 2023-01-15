import deleteLog from "./Component/deleteLog.js";
import deletingForm from "./Component/deletingForm.js";
import submit from "./Component/submit.js";
import vaccinedArray from "./Component/vaccined.js";
import greetingStatus from "./Component/greeting.js";
import populateLokasi from "./Component/populateLokasi.js";
import alarm from "./Component/alert.js";
import storeDb from "./Component/database.js";

storeDb();
submit();
deletingForm();
document.getElementById("clear").addEventListener("click", () => {
  deleteLog();
});
vaccinedArray();
greetingStatus();
populateLokasi();

let button = document.getElementsByClassName("daButton");
for (const element of button) {
  element.addEventListener("click", () => {
    alarm();
  });
}
