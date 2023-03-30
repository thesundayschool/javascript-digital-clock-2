
setInterval(function(){

    let timeNow = new Date()

    let myTime = timeNow.toLocaleTimeString()

    document.querySelector('.time_container').innerHTML = myTime


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[timeNow.getMonth()]);


    let myDate = timeNow.toLocaleDateString()

    document.querySelector('.date').innerHTML = timeNow.getDate()
    document.querySelector('.month').innerHTML = months[timeNow.getMonth()]
    document.querySelector('.year').innerHTML = timeNow.getFullYear()

}, 1000)
