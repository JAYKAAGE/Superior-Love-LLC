const canvas = document.getElementById("sparkles");
if (canvas) {
    const ctx = canvas.getContext("2d");


function resize(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

window.addEventListener("resize", resize);
resize();

const particles = [];

for(let i=0;i<120;i++){

    particles.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        radius:Math.random()*3+1,

        speed:(Math.random()*0.6)+0.2,

        alpha:Math.random(),

        glow:Math.random()*25+10,

        color:
            Math.random()>0.85
            ? "#d4af37"
            : "#2e8b57"

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.y-=p.speed;

        if(p.y<-10){
            p.y=canvas.height+10;
            p.x=Math.random()*canvas.width;
        }

        p.alpha += (Math.random()-0.5)*0.05;

        if(p.alpha<0.2)p.alpha=0.2;
        if(p.alpha>1)p.alpha=1;

        ctx.beginPath();

        ctx.fillStyle=p.color;

        ctx.globalAlpha=p.alpha;

        ctx.shadowBlur=p.glow;
        ctx.shadowColor=p.color;

        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

        ctx.fill();

    });

    ctx.globalAlpha=1;

    requestAnimationFrame(animate);

}

animate();
}