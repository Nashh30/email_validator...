console.log("This is my script");
let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "akshayKumar",
    "email": "akshayKumar@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  }


submitBtn.addEventListener("click",async(e)=>{
    e.preventDefault();
    console.log("clicked");
    resultCont.innerHTML = `<img width="123" src="/img/loading.svg" alt=".svg">`
    let key = "ema_live_7Gnkax0XZMzWZnoDs9w9zE0oivklAGIgQtOxpevW";
    let email = document.getElementById("username").value;
    let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

    let str = ``;
  for (key of Object.keys(result)){
    if(result[key] !== "" && result[key] !== " "){
        str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }
  resultCont.innerHTML= str;
})





  