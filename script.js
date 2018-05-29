//get current size

let drawingArea = document.getElementById("drawingArea")
let style = window.getComputedStyle(drawingArea);
let width = style.width.slice(0, -2) 
let height = style.height.slice(0,-2)
let timer
console.log(width, height)

// round it down to nearest even number 
  width = 10 * Math.round(width / 10)
  height = 10 * Math.round(height / 10)

console.log(width, height)
//set it to that so that each cell
drawingArea.style.width = width + "px"
drawingArea.style.height = height + "px"

//geneate rows and cells
for (let i = 0 ; i < ((width /10) * (height / 10)); i++){
    let aCell = document.createElement("div")
        aCell.id = i;
        aCell.classList.add("cell")
        aCell.addEventListener("mousemove", function(e){
            console.log(e)
            if (e.buttons === 1){
                aCell.style.backgroundColor = "black"
            }
        },false)
        aCell.addEventListener("dblclick", function(){
            aCell.style.backgroundColor = "red"
        })
        drawingArea.appendChild(aCell)
}

document.getElementById("clear").addEventListener("click", function(){
    let allClasses = document.getElementsByClassName("cell")
    console.log(allClasses)
    for (key in allClasses){
        document.getElementById(key).style.backgroundColor = "white"
    }
})

