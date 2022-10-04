const toggleModal = () => {
  const modal = document.getElementById("modal");
  const viewCv = document.getElementById("view-cv");
  viewCv.innerText = viewCv.innerText === "X" ? "VIEW MY RESUME" : "X";
  modal.classList.toggle("show");
};
