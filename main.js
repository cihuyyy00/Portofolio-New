const hamber = document.querySelector(".hamber");
const menu = document.querySelector(".menu");
const startIcon = document.querySelector(".start");
const closeIcon = document.querySelector(".close");

if (hamber && menu) {
  if (window.innerWidth <= 760) menu.classList.remove("tampil");

  hamber.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("tampil");
    hamber.setAttribute("aria-expanded", isOpen);
    startIcon.style.display = isOpen ? "none" : "block";
    closeIcon.style.display = isOpen ? "block" : "none";
  });
}

const web3Forms = document.querySelectorAll("[data-web3forms]");

web3Forms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const status = form.querySelector(".form-status");
    const button = form.querySelector('button[type="submit"]');
    const accessKey = form.querySelector('[name="access_key"]').value;

    if (!accessKey || accessKey === "cb37209d-dd42-47d6-ac16-df2d191d78f8") {
      status.textContent = "Masukkan access key Web3Forms terlebih dahulu.";
      status.className = "form-status error";
      return;
    }

    button.disabled = true;
    button.textContent = "Mengirim...";
    status.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json();

      if (!response.ok || !result.success) throw new Error(result.message);

      form.reset();
      status.textContent = "Pesan berhasil dikirim. Terima kasih!";
      status.className = "form-status success";
    } catch (error) {
      status.textContent = error.message || "Pesan gagal dikirim. Coba lagi.";
      status.className = "form-status error";
    } finally {
      button.disabled = false;
      button.textContent = "Kirim pesan ↗";
    }
  });
});
