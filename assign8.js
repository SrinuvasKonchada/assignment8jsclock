

const h=document.querySelector(".hours");
const m=document.querySelector(".minutes");
const s=document.querySelector(".seconds");
const a=document.querySelector(".am");


function digital(){
    const time=new Date()
    let h1=time.getHours();
    let m1=time.getMinutes();
    let s1=time.getSeconds();

    let h2=h1<10?"0"+h1:h1;
    let m2=m1<10?"0"+m1:m1;
    let s2=s1<10?"0"+s1:s1;

    
    m.textContent=m2;
    s.textContent=s2;

    if(h2>12){
        let h3=h2-12;
        
       let h4=h3<10?"0"+h3:h3;
         h.textContent=h4;
    }else{
        h.textContent=h2;
    }


    if(h2<12){
        let am="AM"
        a.textContent=am

    }else{
         am="PM"
        a.textContent=am
    }
    


    


}
setInterval(digital,1000)
digital()