const colorsContainer = document.querySelector(".colors-container");
const spawnButton = document.querySelector("#spawn-button");


let colorBlocks = ["a", "b", "c", "d"];

function getRandomNumber() {
   return Math.floor(Math.random() * 255)
}
function spawn() {

    const commonColor = getRandomNumber()

    colorBlocks.forEach((_colorBlock, index) => {
        colorBlocks[index] = "rgb(" + commonColor + "," + getRandomNumber() + "," + getRandomNumber() + ")"
    })

    colorBlocks.forEach(colorBlock => {
       const divElement = document.createElement("div")
       divElement.textContent = colorBlock
       colorsContainer.append(divElement)
    })
}

spawnButton.addEventListener("click", spawn);