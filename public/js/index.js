// References

const submit = document.querySelector("#submit");
const text = document.querySelector("#text");
const qrCode = document.querySelector("#qr-code");

// Functions

// Listeners

const checkText = () => {
  if (text.value === "" || text.value === null) {
    return true;
  }
  return false;
};

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  if (checkText()) {
    alert("Please complete all the fields");
    return;
  }
  const req = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      txt: `${text.value}`,
    },
  };
  fetch("/api/createQr", req)
    .then((response) => response.text())
    .then((svg) => {
      qrCode.innerHTML = svg;
    });
});
