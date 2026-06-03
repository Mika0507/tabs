function showTab(tabId) {
  switch (tabId) {
    case "firstTab":
      document.getElementById("firstTab").style.visibility = "visible";
      document.getElementById("secondTab").style.visibility = "hidden";
      document.getElementById("thirdTab").style.visibility = "hidden";
      document.getElementById("fourthTab").style.visibility = "hidden";
      break;
    case "secondTab":
      document.getElementById("firstTab").style.visibility = "hidden";
      document.getElementById("secondTab").style.visibility = "visible";
      document.getElementById("thirdTab").style.visibility = "hidden";
      document.getElementById("fourthTab").style.visibility = "hidden";
      break;
    case "thirdTab":
      document.getElementById("firstTab").style.visibility = "hidden";
      document.getElementById("secondTab").style.visibility = "hidden";
      document.getElementById("thirdTab").style.visibility = "visible";
      document.getElementById("fourthTab").style.visibility = "hidden";
      break;
    case "fourthTab":
      document.getElementById("firstTab").style.visibility = "hidden";
      document.getElementById("secondTab").style.visibility = "hidden";
      document.getElementById("thirdTab").style.visibility = "hidden";
      document.getElementById("fourthTab").style.visibility = "visible";
      break;
    default:
  }
}
