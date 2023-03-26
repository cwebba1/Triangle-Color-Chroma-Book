function run() {
    // for the initial run 
    const colorInputOne = document.getElementById("color1");
    const colorInputTwo = document.getElementById("color2");
    const paletteCount = document.getElementById("palette-count-input");
    console.log(paletteCount);

    
    [colorInputOne, colorInputTwo, paletteCount].forEach((colorInput) => {
        colorInput.addEventListener("input", function() {
            // Call a function which generates colors
           generatePalette(
                colorInputOne.value, 
                colorInputTwo.value,
                paletteCount.value
                );
        });
    });
}

function generatePalette(color1, color2, paletteCount) {
    const paletteContainer = document.getElementById("palette");
    // Remove all child nodes and append new nodes
    paletteContainer.innerHTML = "";
    // Add target to print palette values
    const paletteList = document.getElementById('list');
    paletteList.innerHTML = "";
    
    const colorPalette = chroma.scale([color1, color2]).mode("oklch").colors(paletteCount);



//Array of colors
colorPalette.forEach(colorPalette => {
    const paletteItem = document.createElement("div");
// Create a SPAN and append to the palette item div
const paletteColorValue = document.createElement("span");
paletteColorValue.classList.add("palette-color-value");

paletteColorValue.style.setProperty("--name-color", chroma.contrast(colorPalette, chroma(colorPalette).darken(3)) > 2 
? chroma(colorPalette).darken(3) 
: chroma(colorPalette).luminance(3)
);
console.log(colorPalette);

const myTextNode = document.createTextNode(colorPalette);

paletteColorValue.appendChild(document.createTextNode(colorPalette));

paletteItem.appendChild(paletteColorValue);
    paletteItem.classList.add("palette-item");
    paletteItem.style.setProperty("--palette-color",colorPalette);


    paletteContainer.appendChild(paletteItem);

});
}


window.addEventListener("load", () => {
    run();
});
