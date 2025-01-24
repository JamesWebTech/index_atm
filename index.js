 // Initial Balance and PIN
 let USER_PIN = "1234";
 let balance = 1000.0;

 function validatePin() {
   const pin = document.getElementById("pin").value;
   const errorElement = document.getElementById("pin-error");

   if (pin === USER_PIN) {
     errorElement.textContent = "";
     toggleContainer("menu-container");
   } else {
     errorElement.textContent = "Invalid PIN. Try again.";
   }
 }

 function showContainer(containerId) {
   toggleContainer(containerId);
 }

 function goBack() {
   toggleContainer("menu-container");
 }

 function logout() {
   alert("You have been logged out.");
   toggleContainer("pin-container");
 }

 function deposit() {
   const amount = parseFloat(document.getElementById("deposit-amount").value);
   if (amount > 0) {
     balance += amount;
     alert(`$${amount.toFixed(2)} deposited successfully!`);
     document.getElementById("deposit-amount").value = "";
     updateBalance();
   } else {
     alert("Please enter a valid amount.");
   }
 }

 function withdraw() {
   const amount = parseFloat(document.getElementById("withdraw-amount").value);
   if (amount > 0 && amount <= balance) {
     balance -= amount;
     alert(`$${amount.toFixed(2)} withdrawn successfully!`);
     document.getElementById("withdraw-amount").value = "";
     updateBalance();
   } else if (amount > balance) {
     alert("Insufficient funds.");
   } else {
     alert("Please enter a valid amount.");
   }
 }

 function changePin() {
   const currentPin = document.getElementById("current-pin").value;
   const newPin = document.getElementById("new-pin").value;
   const confirmNewPin = document.getElementById("confirm-new-pin").value;
   const errorElement = document.getElementById("change-pin-error");
   const successElement = document.getElementById("change-pin-success");

   errorElement.textContent = "";
   successElement.textContent = "";

   if (currentPin !== USER_PIN) {
     errorElement.textContent = "Current PIN is incorrect.";
     return;
   }

   if (newPin.length !== 4 || isNaN(newPin)) {
     errorElement.textContent = "New PIN must be a 4-digit number.";
     return;
   }

   if (newPin !== confirmNewPin) {
     errorElement.textContent = "New PIN and confirmation PIN do not match.";
     return;
   }

   USER_PIN = newPin;
   successElement.textContent = "PIN changed successfully!";
   document.getElementById("current-pin").value = "";
   document.getElementById("new-pin").value = "";
   document.getElementById("confirm-new-pin").value = "";
 }

 function updateBalance() {
   document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
 }

 function toggleContainer(containerId) {
   const containers = document.querySelectorAll(".container");
   containers.forEach(container => container.classList.remove("active"));
   document.getElementById(containerId).classList.add("active");
 }