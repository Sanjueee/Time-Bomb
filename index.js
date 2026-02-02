const enter=document.getElementById("enter");
const button=document.getElementById("button-12");
const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
let timer;

let running = false;

button.addEventListener("click",() => {
    if (button.textContent === "STOP"){

        button.textContent="SET";
        button.classList.remove("stop");
        clearInterval(timer);
        enter.textContent=" wtf! you still here?  RUN Nigga!!";
        
    }
    else{

        button.textContent="STOP";
        button.classList.add("stop");
        setbutton();
         enter.textContent="RUN!!!!";

    }
});

function formatdigits(input){
    if (input.value !== ""){
        input.value=input.value.padStart(2,"0");
    }

}

[hours,minutes,seconds].forEach(input =>{
    input.addEventListener("change",()=> formatdigits(input));
});

function setbutton(){
        const hoursvalue=parseInt(hours.value)|| 0;
        const minutesvalue=parseInt(minutes.value)||0;
        const secondsvalue=parseInt(seconds.value)||0;

        let totalseconds=hoursvalue * 3600 + minutesvalue * 60 + secondsvalue;

        timer = setInterval(() => {
            if(totalseconds<= 1){
                clearInterval(timer);

                const video = document.getElementById("video");
                video.style.display = "block"; // Show video
                video.currentTime = 2;         // Start from beginning
                video.play();                 
                
                return;
            }
            
            totalseconds--;

            let h = String(Math.floor(totalseconds/3600)).padStart(2,"0");
            let m = String(Math.floor((totalseconds%3600)/60)).padStart(2,"0");
            let s = String(totalseconds%60).padStart(2,"0");

            hours.value=`${h}`;
            minutes.value=`${m}`;
            seconds.value=`${s}`;

            
        

            
            
        }, 1000);

    }

