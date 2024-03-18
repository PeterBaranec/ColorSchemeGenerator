function getColorScheme() {
  const schemeBtn = document.getElementById("scheme-btn");
  schemeBtn.addEventListener("click", function () {
    const seedColor = document.getElementById("seed-color").value.substring(1);
    const colorScheme = document.getElementById("color-scheme").value;
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorScheme}&count=6`
    )
      .then((res) => res.json())
      .then((data) => {
        let colorSchemeData = Object.values(data.colors);
        colorSchemeData.forEach((color) => {
          let colorHtml = "";
          const schemeColorsEl = document.getElementById("scheme-colors");
          colorHtml = `
          <img src="${color.image.bare}">
          <p>${color.hex.value}</p>
          `;
          schemeColorsEl.innerHTML += colorHtml;
        });
      });
  });
}

getColorScheme();
