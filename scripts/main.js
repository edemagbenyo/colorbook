let board = document.querySelector("#board")
let lineWidth = document.querySelector("#lineWidth")


board.width = ((window.innerWidth)*70)/100;
board.height = ((window.innerHeight)*70)/100;
const ctx = board.getContext('2d');

ctx.strokeStyle = "#BADA55"
ctx.lineJoin="round"
ctx.lineCap="round"
ctx.lineWidth=10

let isDrawing = false;
let lastX = 0
let lastY = 0 
let hue = 0

const draw = (e)=>{
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();

  //start from
  ctx.moveTo(lastX, lastY)

  //go to
  ctx.lineTo(lastX, lastY)
  ctx.stroke()
  // console.log(e.offsetY,e.offsetX);
  lastX = e.offsetX
  lastY = e.offsetY
  
  // [lastX, lastY] = [e.offsetX, e.offsetY]
  hue++;
}

const setLineWidth = (e)=>{
  ctx.lineWidth = e.target.value
}

board.addEventListener("mousemove",draw)
board.addEventListener("mousedown",(e)=>{
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})
board.addEventListener("mouseup",()=>{
  isDrawing = false;
})
board.addEventListener("mouseout",()=>{
  isDrawing = false;
})

lineWidth.addEventListener("change",setLineWidth);