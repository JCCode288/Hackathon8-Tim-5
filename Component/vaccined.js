function vaccinedArray() {
  let vaccined = JSON.parse(localStorage.getItem(`person`))["vaccined"];
  let vaccineContainer = document.getElementById("vaksinPasien");
  let count = 1;
  for (const keys in vaccined) {
    if (vaccined[keys]) {
      let para = document.createElement("p");
      para.setAttribute("id", `button${count}`);
      para.setAttribute("class", `text-sm text-left mt-2 p-.1 bg-green-200 bg-opacity-40 rounded-md `);
      para.innerText = `✔️ ${keys}`;
      vaccineContainer.append(para);
      count++;
    }
  }
}

export default vaccinedArray;