// --------------------------------------------------

// variables
let yesBtn = document.querySelector(".yes-btn");
let noBtn = document.querySelector(".no-btn");

// Function
function toggleButtons() {
  yesBtn.classList.toggle("active");
  noBtn.classList.toggle("active");
  // Condition
  if (yesBtn.classList.contains("active")) {
    yesBtn.classList.add("animate");
    noBtn.classList.remove("animate");
  } else {
    yesBtn.classList.remove("animate");
    noBtn.classList.add("animate");
  }
}
// addEventListener
yesBtn.addEventListener("click", toggleButtons);
noBtn.addEventListener("click", toggleButtons);

// ------------------------------------

/*
نکته برای خودم:
اگر تو صفحه چندتا از این وجود داشت چطوری میشه؟ که مستقل از یکدیگر کار بکنند
در مورد این سرچ کن
*/
