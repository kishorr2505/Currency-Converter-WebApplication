const base_url = "";///us/inr.json";

const dropdown = document.querySelectorAll(".dropdown select")
const btn = document.querySelector(".exchange");
const fromCurr = document.querySelector("#select1");
const toCurr = document.querySelector("#select2");
const msg = document.querySelector(".msg");

document.addEventListener("load",()=>{

})

for(let select of dropdown){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name ==="from" && currCode ==="USD"){
            newOption.selected = "selected";
        }else if(select.name ==="to" && currCode ==="INR"){
            newOption.selected = "selected";
        }
    select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}


const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (event)=>{
    event.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".amount input");
    // console.log(amount.value);
    let amountVal =  amount.value; 
    if(amountVal ==="" || amountVal <1){
        amount.value = "1";
        amountVal = 1;
    }
    // console.log(fromCurr.value,toCurr.value);
    let fr = fromCurr.value.toLowerCase();
    let to = toCurr.value.toLowerCase();

    let URL = `https://v6.exchangerate-api.com/v6/357f27dc68c1c2052b681f7a/pair/${fr}/${to}`;

//    console.log(URL);
try {
    
    let response = await fetch(URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();

    
    let rate = data.conversion_rate;
    

    let finalAmount = amountVal * rate;
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
} catch (error) {
    console.error("Error fetching exchange rate:", error);
    msg.innerText = "Error fetching exchange rate. Please try again later.";
}
}



