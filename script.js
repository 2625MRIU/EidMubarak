const canvas=document.getElementById('starsCanvas')
const ctx=canvas.getContext('2d')

let stars=[]

function resize(){
canvas.width=window.innerWidth
canvas.height=window.innerHeight
initStars()
}

function initStars(){
stars=[]
for(let i=0;i<200;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*1.5,
opacity:Math.random(),
speed:0.01+Math.random()*0.02
})
}
}

function drawStars(){
ctx.clearRect(0,0,canvas.width,canvas.height)

stars.forEach(s=>{
s.opacity+=s.speed
if(s.opacity>1||s.opacity<0) s.speed*=-1

ctx.fillStyle=`rgba(255,255,255,${s.opacity})`
ctx.beginPath()
ctx.arc(s.x,s.y,s.size,0,Math.PI*2)
ctx.fill()
})

requestAnimationFrame(drawStars)
}

window.addEventListener('resize',resize)

resize()
drawStars()

function speakPashto(){
const message=new SpeechSynthesisUtterance("Da Akhtar Mubarak Sha. Allah de sta pa kor ke khushali rawali.")
message.lang="ps"
speechSynthesis.speak(message)
}

function startCelebration(){
confetti({particleCount:250,spread:120,origin:{y:0.6}})

const tl=gsap.timeline()

tl.to("#moon",{duration:0.8,scale:1.2,boxShadow:"0 0 100px #fffdd0",ease:"power4.in"})
tl.to("#eid-title",{duration:1.5,opacity:1,scale:1.2,letterSpacing:"10px",ease:"expo.out"},"-=0.4")
tl.to("#night-scene",{duration:1.2,opacity:0,scale:2,filter:"blur(20px)",display:'none',ease:"power4.inOut"},"+=1")
tl.to("#pashtun-scene",{duration:1.5,display:'block',opacity:1,onStart:()=>{
document.body.style.background="#f9f5e8"
speakPashto()
}})

tl.from(".content-wrapper > *",{duration:1,y:30,opacity:0,stagger:0.3,ease:"back.out(1.7)"})
}

setTimeout(()=>{
startCelebration()
},500)

document.getElementById('gift').onclick=function(){
const rewards=[
"😊 Smile at someone — it is charity",
"🤝 Forgive someone and spread peace",
"✨The most beloved person to Allah is those - who love his creature",
"💌 If you love someone - confess him today",
"📿 Say SubhanAllah 33 times"
]

this.innerText=rewards[Math.floor(Math.random()*rewards.length)]
this.style.fontSize="12px"
this.style.padding="10px"
}