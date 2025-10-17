const tgl_btns = document.querySelectorAll(".toggle_btn");
const questions = document.querySelectorAll(".row");
const answers = document.querySelectorAll(".answer");

tgl_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isActive = btn.classList.contains("active");

    tgl_btns.forEach((b) => b.classList.remove("active"));

    if (!isActive) {
      btn.classList.add("active");
    }
  });
});

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const isActive = q.classList.contains("activeq");

    questions.forEach((q) => { q.classList.remove("activeq");});

   if (!isActive) {
      q.classList.add("activeq");
    }
  });
});
