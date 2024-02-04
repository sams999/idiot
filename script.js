const findOutButton = document.getElementById("findOut");
const hiddenText = document.getElementById("hidden");

findOutButton.addEventListener("click", idiot);

const rU = document.querySelector("p");

function idiot() {
  hiddenText.innerHTML = `You are an idiot.`;
  findOutButton.innerHTML = "Try Again";
  findOutButton.removeEventListener("click", idiot); 
  findOutButton.addEventListener("click", reset); 
  rU.innerHTML = "Yes!";
}

function reset() {
  findOutButton.innerHTML = "Find Out";
  hiddenText.innerHTML = ""; 
  findOutButton.removeEventListener("click", reset); 
  findOutButton.addEventListener("click", idiot); 
  rU.innerHTML = "Are you an idiot?";
}