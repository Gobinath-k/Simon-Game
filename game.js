



var buttoncolor=["green","red","yellow","blue"];
var userclickpattern=[];
var gamepattern=[];
 var state=false;
 var level=0;
document.addEventListener("keypress",function(){
  if(!state){
  sequence();
  state=true;
  }
})


  var button=document.querySelectorAll(".btn");
  for(var i=0;i<button.length;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function (){
   var s=this.id;
   playSound(s);
   userclickpattern.push(s);
   addchanges(s);
   checkanswer(userclickpattern.length-1);
  })
  }
  

  function checkanswer(position){
   if(userclickpattern[position]===gamepattern[position]){
    console.log("success");
    if(userclickpattern.length===gamepattern.length){
      setTimeout(function (){
       sequence();
      },1000);
    }

   }
   else{
    console.log("failed");
    playSound("wrong");
     document.querySelector("Body").classList.add("game-over");
     setTimeout(function(){
        document.querySelector("Body").classList.remove("game-over"); 
     },200);
    document.querySelector("h1").innerHTML="Game Over Press any key to restart the Game";
    restart();
   }
  }


function sequence(){
   userclickpattern=[];

   level++;
   document.querySelector("h1").innerHTML="LeveL  "+level;

  var randomnomber=Math.floor(Math.random()*4);
  // alert(randomnomber);
  var randomchooser=buttoncolor[randomnomber];
  gamepattern.push(randomchooser);
  $("#"+randomchooser).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomchooser);

}
function playSound(choose) {
  var audio = new Audio("./sounds/" + choose + ".mp3");
  audio.play();
}
function addchanges(key){
  document.querySelector("#"+key).classList.add("pressed");
  setTimeout(function (){
   document.querySelector("#"+key).classList.remove("pressed");
  },100);
}
function restart(){
  state=false;
  level=0;
  gamepattern=[];
}


