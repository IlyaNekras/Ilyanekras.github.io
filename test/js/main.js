
$(document).ready(function () {
    $('.carousel__inner').slick({
        dots: true,
        speed: 1200,
        adaptiveHeight: true,
        arrows: false
    });

    //timer
    const countDownDate = new Date().getTime() + (30 * 60 * 1000);

    let countDownFunction = setInterval(() => {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =
            /* days + "д " +  */hours + "ч " + minutes + "м " + seconds + "с ";

        if (distance < 0) {
            clearInterval(countDownFunction);
            document.getElementById("timer").innerHTML = "Время истекло"
        }
    }, 1000)

});