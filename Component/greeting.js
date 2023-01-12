function greetingStatus() {
  let greetingsContainer = document.getElementById("greetings");
  let person = JSON.parse(localStorage.getItem("person"));
  let { name, umur } = person;
  let headerContainer = document.createElement("div");
  let header = document.createElement("div");
  header.innerText = `Hi, ${name}! `;
  let umurHead = document.createElement("div");
  umurHead.innerText = ` ${umur} tahun`;
  headerContainer.append(header, umurHead);
  headerContainer.setAttribute("class", "flex");
  greetingsContainer.append(headerContainer);
}

export default greetingStatus;
