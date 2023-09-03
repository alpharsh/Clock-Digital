// Format change code
let button = 0
let btn = () => {
    button++
    if (button % 2 == 0) {
        document.getElementById("ap").removeAttribute("hidden", "true")
    }
    else {
        document.getElementById("ap").toggleAttribute("hidden", "true")
    }
}

// Date and time code
let time = () => {
    let a = new Date()    // we store the current time in a variable called date. We do that by using the 'new Date()' constructor, this constructor returns the browser’s date along with the time zone. Note: The date object is static, we would have to keep updating it, we do that later in the code.
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()  // we extract the hours, minutes, and seconds from the variable (date) using the getHours(), getMinutes() and getSeconds() methods.
    let ap = "AM"

    if (button % 2 == 0) {
        if (h >= 12) {
            ap = "PM"
            if (h > 12) { h = h - 12 }
        } else if (h == 0) {
            h = 12;
            ap = "AM"
        }
    }
    else {
    }
    if (h < 10) { h = "0" + h }
    if (m < 10) { m = "0" + m }
    s = s < 10 ? "0" + s : s;
    document.getElementById("hour").innerHTML = h
    document.getElementById("min").innerText = m
    document.getElementById("sec").innerText = s
    document.getElementById("ap").innerHTML = `&nbsp;${ap}`     // this will print date 

    let dd = a.toDateString()                 // this will get date 
    document.getElementById("date").innerHTML = dd;
}
setInterval(time, 1000);

// Blink code
let blink = document.getElementsByTagName("b")
setInterval((x) => { blink[0].classList.toggle("blink") }, 500)
setInterval((x) => { blink[1].classList.toggle("blink") }, 500)
