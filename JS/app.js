const colorsContainer = document.querySelector(".colors-container");
const spawnButton = document.querySelector("#spawn-button");


let colorBlocks = ["a", "b", "c", "d"];

function getRandomNumber() {
   return Math.floor(Math.random() * 255)
}
function spawn() {
    colorsContainer.innerHTML = ""

    const commonColor = getRandomNumber()

    colorBlocks.forEach((_colorBlock, index) => {
        colorBlocks[index] = "rgb(" + commonColor + "," + getRandomNumber() + "," + getRandomNumber() + ")"
    })

    colorBlocks.forEach(colorBlock => {
       const divElement = document.createElement("div")
       divElement.textContent = colorBlock
       divElement.style.backgroundColor = colorBlock
       colorsContainer.append(divElement)
    })
}

spawn();

spawnButton.addEventListener("click", spawn);
document.addEventListener("keydown", spawn);