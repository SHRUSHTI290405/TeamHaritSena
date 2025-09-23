const startBtn = document.getElementById("startBtn");
const multiStepForm = document.getElementById("multiStepForm");
const steps = Array.from(document.querySelectorAll(".form-step"));
let currentStep = 0;

startBtn?.addEventListener("click", () => {
  window.scrollTo({ top: document.getElementById("flow").offsetTop, behavior: "smooth" });
});

function showStep(step) {
  steps.forEach((s, i) => s.classList.toggle("active", i === step));
}

showStep(currentStep);

// Next & Back Buttons
document.getElementById("next1").addEventListener("click", () => {
  currentStep++;
  showStep(currentStep);
});

document.getElementById("next2").addEventListener("click", () => {
  currentStep++;
  showStep(currentStep);
});

document.getElementById("prev2").addEventListener("click", () => {
  currentStep--;
  showStep(currentStep);
});

document.getElementById("prev3").addEventListener("click", () => {
  currentStep--;
  showStep(currentStep);
});

// Form Submit
multiStepForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const summary = `
  Pickup Location: ${document.getElementById("pickupLocation").value}
  Vehicle Assigned: ${document.getElementById("vehicleAssigned").value}
  Waste Type: ${document.getElementById("wasteType").value}
  Quantity: ${document.getElementById("quantity").value} kg
  Supplier Name: ${document.getElementById("supplierName").value}
  Reward Amount: ${document.getElementById("rewardAmount").value}
  `;

  document.getElementById("summary").innerText = summary;
  currentStep++;
  showStep(currentStep);
});

// Restart
document.getElementById("restartBtn").addEventListener("click", () => {
  multiStepForm.reset();
  currentStep = 0;
  showStep(currentStep);
});
