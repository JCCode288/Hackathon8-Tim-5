import deletingForm from './deletingForm.js'

function vaccinedArray() {
  deletingForm();
  let person = JSON.parse(localStorage.getItem(`person`))
  let vaccined = person ? person["vaccined"] : null;
  let vaccineContainer = document.getElementById("vaksinPasien");
  let count = 1;
  if (!vaccined) {
    return;
  }
  for (const keys in vaccined) {
    if (vaccined[keys]) {
      let para = document.createElement("p");
      para.setAttribute("id", `button${count}`);
      para.setAttribute("class", `text-base text-left bg-green-300 bg-opacity-50 mt-2 rounded-sm `);
      para.innerText = ` ✔️ ${keys}`;
      vaccineContainer.append(para);
      count++;
    }
  }
}

export default vaccinedArray;
