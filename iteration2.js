function showTab(tabId) {
  if (tabId === "firstTab") {
    document.getElementById("showTab").innerHTML = "First Tab content.";
  } else if (tabId === "secondTab") {
    document.getElementById("showTab").innerHTML = "Second Tab content.";
  } else if (tabId === "thirdTab") {
    document.getElementById("showTab").innerHTML = "Third Tab content.";
  } else if (tabId === "fourthTab") {
    document.getElementById("showTab").innerHTML = "Fourth Tab content.";
  }
}

function closeTag() {
  document.getElementById("cookieConsent").style.display = "none";
}

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  closeTag();
}

function checkCookies() {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");
  if (cookiesAccepted === "true") {
    closeTag();
  }
}

addEventListener("DOMContentLoaded", checkCookies); // "Cuando el HTML esté listo, ejecuta checkCookies automáticamente"
