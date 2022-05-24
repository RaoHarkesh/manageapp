let addproperty = document.querySelector(".plusman");
let flagplus = true;
let middlediv = document.querySelector(".middle");
let tickbtn = document.querySelector(".tick");
let deletebtn = document.querySelector(".deleteicon");
let deleteflag=false;
let array = [];
let increasebtn = document.querySelector(".increase");
let decreasebtn = document.querySelector(".decrease");
decreasebtn.addEventListener("click",function(){
  console.log(deleteflag);
  for(let pos=0; pos<array.length; pos++){
    let maxidx = pos;
    let temp; 
    for(let i=pos+1; i<array.length; i++){
        if(parseInt(array[maxidx].size)<parseInt(array[i].size)){
          maxidx = i;
        }
     }
     temp = array[pos];
     array[pos] = array[maxidx];
     array[maxidx] = temp;
   }
   let alltickets = document.querySelectorAll(".ticket");
   for(let i=0 ; i<alltickets.length; i++){
     alltickets[i].remove();
   }
   for(let i=0; i<array.length; i++){
     createticketbyarray(array[i].name , array[i].description, array[i].size);
   }
})
increasebtn.addEventListener("click",function(){
  console.log(deleteflag); 
  for(let pos=0; pos<array.length; pos++){
    let minidx = pos;
    let temp; 
    for(let i=pos+1; i<array.length; i++){
        if(parseInt(array[minidx].size)>parseInt(array[i].size)){
          minidx = i;
        }
     }
     temp = array[pos];
     array[pos] = array[minidx];
     array[minidx] = temp;
     
   }
    let alltickets = document.querySelectorAll(".ticket");
    for(let i=0 ; i<alltickets.length; i++){
      alltickets[i].remove();
    }
    for(let i=0; i<array.length; i++){
      createticketbyarray(array[i].name , array[i].description, array[i].size);
    }   
})
addproperty.addEventListener("click",function(){
    flagplus=!flagplus;
    if(flagplus){
      middlediv.style.display="flex";
    }
    else{
        middlediv.style.display="none";
    }
})
tickbtn.addEventListener("click",function(){
  let enternametxtarea = document.querySelector(".entername");
  let namevalue = enternametxtarea.value;
  let enterdestxtarea = document.querySelector(".enterdes");
  let entersizetxtarea = document.querySelector(".entersize");
  let desvalue = enterdestxtarea.value;
  let sizevalue = entersizetxtarea.value;
  enternametxtarea.value="";
  enterdestxtarea.value="";
  entersizetxtarea.value="";
  let data = parseInt(sizevalue);
  if(namevalue!=""&&desvalue!=""&&sizevalue!=""&&Number.isInteger(data)) 
  createticket(namevalue , desvalue , sizevalue);
})
function createticket(name , des , size){
  
  let ticket = document.createElement("div");
  ticket.setAttribute("class","ticket");
  ticket.innerHTML=  `<div class="tikname">
      <div class="tiknamehead"><span>Name</span></div>
      <div class="tiknamecont">${name}</div>
      </div>
    <div class="tikdes">
      <div class="tikdeshead"><span>Description</span></div>
     <div class="tikdescont">${des}</div>
  
    </div>
   <div class="tiksize">
    <div class="tiksizehead"><span>Size</span></div>
    <div class="tiksizecont">${size}</div>
  </div>`
  let allticketdiv = document.querySelector(".allticket");
   allticketdiv.appendChild(ticket);
   middlediv.style.display="none";
   flagplus=!flagplus;
   
   array.push({"name":name, "description": des, "size":size});
   console.log(array.length);
   //delete function
   ticket.addEventListener("click",function(){
     if(deleteflag){
       ticket.remove();
       let idx;
      for(let i=0; i<array.length; i++){
        if(array[i].name==name){
          idx=i;
        }
      }
      array.splice(idx,1);
     }
     
   })
  
}
// delete btn 
deletebtn.addEventListener("click",function(){
  console.log("clicked"); 
  deleteflag=!deleteflag;
   if(deleteflag){
     deletebtn.style.backgroundColor = "red";
   }
   else{
    deletebtn.style.backgroundColor = "";
   }
})
function createticketbyarray(name , des , size){
  let ticket = document.createElement("div");
  ticket.setAttribute("class","ticket");
  ticket.innerHTML=  `<div class="tikname">
      <div class="tiknamehead"><span>Name</span></div>
      <div class="tiknamecont">${name}</div>
      </div>
    <div class="tikdes">
      <div class="tikdeshead"><span>Description</span></div>
     <div class="tikdescont">${des}</div>
  
    </div>
   <div class="tiksize">
    <div class="tiksizehead"><span>Size</span></div>
    <div class="tiksizecont">${size}</div>
  </div>`
  let allticketdiv = document.querySelector(".allticket");
   allticketdiv.appendChild(ticket);
   ticket.addEventListener("click",function(){
    if(deleteflag){
      ticket.remove();
      let idx; 
      for(let i=0; i<array.length ; i++){
        if(array[i].name == name){
           idx=i;
         }
       }
       
       array.splice(idx,1);
    }
  
    
   })  
   
}