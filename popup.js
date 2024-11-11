document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate");
  const downloadButton = document.getElementById("download");
  const linkInput = document.getElementById("link");
  const toggleDarkModeButton = document.getElementById("theme-toggle");

  console.log("Generate Button:", generateButton);
  console.log("Download Button:", downloadButton);
  console.log("Link Input:", linkInput);
  console.log("Toggle Dark Mode Button:", toggleDarkModeButton);

  if (generateButton && downloadButton && linkInput && toggleDarkModeButton) {
    const generateQRCodeFromInput = () => {
      const link = linkInput.value;
      if (link) {
        generateQRCode(link);
        downloadButton.style.display = "block";
      }
    };

    generateButton.addEventListener("click", generateQRCodeFromInput);

    linkInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        generateQRCodeFromInput();
      }
    });

    downloadButton.addEventListener("click", () => {
      const qrcodeCanvas = document
        .getElementById("qrcode")
        .getElementsByTagName("canvas")[0];

      console.log("QR Code Canvas:", qrcodeCanvas);

      if (qrcodeCanvas) {
        const link = document.createElement("a");
        link.href = qrcodeCanvas.toDataURL();
        link.download = "qrcode.png";
        link.click();
      }
    });

    toggleDarkModeButton.addEventListener("click", () => {
      const isDarkMode = document.body.classList.toggle("dark-mode");
      linkInput.classList.toggle("dark-mode");
      generateButton.classList.toggle("dark-mode");
      downloadButton.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", isDarkMode);
      updateToggleIcon(isDarkMode);
    });

    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
      document.body.classList.add("dark-mode");
      linkInput.classList.add("dark-mode");
      generateButton.classList.add("dark-mode");
      downloadButton.classList.add("dark-mode");
    }
    updateToggleIcon(savedDarkMode);
  } else {
    console.error("One or more elements not found in the DOM.");
  }
});

const updateToggleIcon = (isDarkMode) => {
  const toggleDarkModeButton = document.getElementById("theme-toggle");
  if (isDarkMode) {
    toggleDarkModeButton.src = "moon.png";
    toggleDarkModeButton.src = "sun.png";
  }
};

const storageKey = "theme-preference";

const onClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);

  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);
};

const theme = {
  value: getColorPreference(),
};

reflectPreference();

window.onload = () => {
  reflectPreference();
  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });
