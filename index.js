import deleteLog from "./Component/deleteLog.js";
import deletingForm from "./Component/deletingForm.js";
import submit from "./Component/submit.js";

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
