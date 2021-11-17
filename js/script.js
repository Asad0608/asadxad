let count = 0;
let count1 = 0;
let number = document.getElementById("number");
let zikr = document.getElementById("zikr");
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    if (count === 33) {
        count = 1
    } else {
        count++
    }
    console.log(count)
    if (count1 === 99) {
        count1 = 1
    } else {
        count1++
        if (count1 >= 0 && count1 <= 33) {
            zikr.innerHTML = "SUBXANOLLOX";
        } else if (count1 >= 34 && count1 <= 66) {
            zikr.innerHTML = "ALHAMDULILAH";
        } else if (count1 >= 67) {
            zikr.innerHTML = "ALLOXU AKBAR";
        } else {
            console.log("Funksiyada hato bor")
        }
        number.innerHTML = count
    }
})

