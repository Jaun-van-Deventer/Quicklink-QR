function generateQRCode(text, size = 256) {
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";
  qrcodeContainer.style.display = "inline-block";
  qrcodeContainer.style.borderRadius = "2%";
  qrcodeContainer.style.border = "1px solid";
  qrcodeContainer.style.boxShadow = `
  -25px -10px 30px -5px rgba(225, 0, 255, 0.5),
  25px -10px 30px -5px rgba(255, 0, 212, 0.5),
  25px 10px 30px -5px rgba(255, 174, 0, 0.5),
  -25px 10px 30px -5px rgba(255, 230, 0, 0.5)`;
  qrcodeContainer.style.position = "relative";
  qrcodeContainer.innerHTML = `
  <div style="
    position: absolute;
    top: -1px; left: -1px; right: -1px; bottom: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(to right bottom, #e300ff, #ff00aa, #ff5956, #ffb900, #fffe00);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  "></div>
`;

  const qrCode = new QRCode(qrcodeContainer, {
    text: text,
    width: size,
    height: size,
  });
}
