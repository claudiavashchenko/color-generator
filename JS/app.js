const colorsContainer = document.querySelector(".colors-container");
const spawnButton = document.querySelector("#spawn-button");


let colorBlocks = ["a", "b", "c", "d"];
function spawn() {
    colorBlocks.forEach(colorBlock => {
       const divElement = document.createElement("div")
       divElement.textContent = colorBlock
       colorsContainer.append(divElement)
    })
}

spawnButton.addEventListener("click", spawn);