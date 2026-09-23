var audio;

if (window.location.pathname.includes("/crew/")) {
    audio = new Audio("../assets/dragon-studio-door-creaking-335491.mp3");
} else {
    audio = new Audio("assets/dragon-studio-door-creaking-335491.mp3");
}

document.querySelectorAll(".door-one, .door-two, .door-three, .door-four, .exit").forEach(function(door) {

    door.addEventListener("click", function(event) {

        event.preventDefault();

        audio.currentTime = 0;

        audio.play();

        if (door.classList.contains("exit")) {

            setTimeout(function() {
                window.location.href = "../index.html";
            }, 2000);

        } else if (!window.location.pathname.includes("/crew/")) {

            setTimeout(function() {
                window.location.href = "crew/";
            }, 2000);

        }

    });

});