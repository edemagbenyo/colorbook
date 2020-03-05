import eraser from './libs/eraser';
(()=>{
  
  let board = document.querySelector("#board")
let lineWidth = document.querySelector("#lineWidth")
let lineColor = document.querySelector("#lineColor")
let resetCanvas = document.querySelector("#resetCanvas")
const line = 20
const color = "#BADA55"
const canvasWidth = ((window.innerWidth)*70)/100;
const canvasHeight = ((window.innerHeight)*70)/100;

let eraserSize= eraser.size;


lineWidth.value = line
lineColor.value = color

board.width = canvasWidth
board.height = canvasHeight;
const ctx = board.getContext('2d');

ctx.strokeStyle = color
ctx.lineJoin="round"
ctx.lineCap="round"
ctx.lineWidth=line

let isDrawing = false;
let lastX = 0
let lastY = 0 
let hue = 0

const draw = (e)=>{
  if (!isDrawing) return;
  // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
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
const setLineColor = (e)=>{
  ctx.strokeStyle = e.target.value
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
lineColor.addEventListener("change",setLineColor);
resetCanvas.addEventListener("click",(e)=>{
  ctx.clearRect(0,0, canvasWidth, canvasHeight)
})
})()