
const chat = async(event)=>{
event.preventDefault();
const message = document.getElementById("chatid").value;
const response = await fetch(`https://pmsss.onrender.com/post?message=${message}`, { method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ additionalData: 'someValue' }),
  });

if(response.ok){
    // console.log(await response.json()); 
    const result = await response.json();
    document.getElementById("result").innerHTML=result;
    
}
else{
    console.log("something went wrong");
}

}