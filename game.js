let gameseq=[];
let userseq=[];
let level=0;
high_score=[];
let h2=document.querySelector('h2');
btn_Colors=["yellow",'red','blue','green']
h1=document.querySelector('h1');
start=false;
document.addEventListener("keypress",function(){
    if(start== false){
        start=true;
        levelup();
        console.log("started")
    }
   
   
})
function levelup(){
    
    level++;
    h1.innerText=`Level ${level}`;
    rndidx=Math.floor(Math.random()*3);
    colour=btn_Colors[rndidx]
    rclo=document.querySelector(`.${colour}`)
    btnflash(rclo);
    gameseq.push(colour)
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function btnpress(){
btn=this;
btnflash(btn);
user=btn.getAttribute("id")
userseq.push(user);
check()
}

btn=document.querySelectorAll('.btn');
for(let allbtn of btn){
allbtn.addEventListener("click",btnpress)};

function check (){
    currentIdx=userseq.length-1;
    for (let i = 0; i < userseq.length; i++) {
        if (userseq[i] !== gameseq[i]) {
            h1.innerText = `Game Over. your score is ${level} Press any key to restart.`;
            high_score.push(level);
            high_scores(high_score);
            resetGame();
            return;
        }
    }
    if (userseq.length === gameseq.length) {
        setTimeout(levelup, 1000)
        userseq=[];
}
}
function resetGame(){
   
    level = 0;
    gameseq = [];
    userseq = [];
    start = false;
}

function high_scores(arr){
    ans=0;
   for (let i = 0; i < arr.length; i++) {
    if(ans<arr[i]){
        ans=arr[i];
    }
} console.log(ans);
h2.innerText=`Your High Score is ${ans}`
}
