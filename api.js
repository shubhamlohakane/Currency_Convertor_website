let dropdowns=document.querySelectorAll(".dropdown select");
let btn=document.querySelector(".button button");
let amount=document.querySelector(".amount input");
let BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let fromcurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let msg=document.querySelector(".msg p");


let select;
for( select of dropdowns){
    for(let cuurcode in  countryList){
        let newoption=document.createElement("option");
        newoption.innerText=cuurcode;
        newoption.value=cuurcode;
        // select.append(newoption);
        if(select.name==="from1" && cuurcode==="USD"){
            newoption.selected="selected";
        }
         else if(select.name==="to"&& cuurcode==="INR"){
            newoption.selected="selected";
         }
         select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
   
        updateflag(evt.target);
    
    });
    
}

 let updateflag = (element)=>{
    let currcode=element.value;
    let code=countryList[currcode];
    console.log(code);
     let newsrc=`https://flagsapi.com/${code}/flat/64.png`;
     let countryflag=element.parentElement.querySelector("img");
     countryflag.src=newsrc;
 }

 
btn.addEventListener("click",async(evt)=>{    
 evt.preventDefault();
 let  amtval=amount.value;
 if(amtval===""||amtval<1){
    amtval=1;
 }
 const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromcurr.value.toLowerCase()][toCurr.value.toLowerCase()];
 let finalamount=amtval* rate;
 msg.innerText=`${amtval} ${fromcurr.value} = ${finalamount} ${toCurr.value}`;
});




