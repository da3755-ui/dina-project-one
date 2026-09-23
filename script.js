var audio;
//check which window were in
if (window.location.pathname.includes("/crew/")) { 
    audio = new Audio("../assets/dragon-studio-door-creaking-335491.mp3"); //if we're in same page explore other files to open sound
} else {
    audio = new Audio("assets/dragon-studio-door-creaking-335491.mp3");
}

document.querySelectorAll(".door-one, .door-two, .door-three, .door-four, .exit").forEach(function(door) { //finds all doors + exit image, for every door execute

    door.addEventListener("click", function(event) { //wait for click trigger

        event.preventDefault(); //stops it fromhref first

        audio.currentTime = 0; //start from beginning

        audio.play();

        if (door.classList.contains("exit")) { //if exit clicked delay

            setTimeout(function() {
                window.location.href = "../index.html"; //send to main entrance
            }, 2000);

        } else if (!window.location.pathname.includes("/crew/")) { //this means were not in crew page and not in exit

            setTimeout(function() {
                window.location.href = "crew/";
            }, 2000);

        }

    });

});