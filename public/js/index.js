// References

const submit = document.querySelector("#submit");
const text = document.querySelector("#text");
const qrCode = document.querySelector("#qr-code");
const dwnBtn = document.querySelector('#dwn-btn');

// Functions

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Listeners

const checkText = () => {
  if (text.value === "" || text.value === null) {
    return true;
  }
  return false;
};

submit.addEventListener("click", (e) => {
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

dwnBtn.addEventListener('click', () =>{
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
      let filename = 'qr.svg';
      download(filename,svg)
    });
})
