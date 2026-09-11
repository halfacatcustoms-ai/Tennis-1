/* =========================
   TENNIS BALL ANIMATION
========================= */


const field = document.querySelector("#ball-field");


function makeBall(index) {


    // Create a tennis ball

    const ball =
        document.createElement("div");


    ball.className = "ball";


    /*
    --------------------------------
    RANDOM STARTING POSITION
    --------------------------------
    */


    const startX =
        8 + Math.random() * 84;


    const landingY =
        58 + Math.random() * 28;


    ball.style.left =
        `${startX}%`;


    ball.style.top =
        `${landingY}%`;


    /*
    --------------------------------
    RANDOM SIDEWAYS MOVEMENT

    Each bounce gets a different
    horizontal direction so the balls
    do NOT simply move straight
    up and down.
    --------------------------------
    */


    function randomSidewaysMovement() {

        const movement =
            Math.random() * 180 - 90;


        return `${movement.toFixed(0)}px`;

    }


    /*
    --------------------------------
    STARTING OFFSET
    --------------------------------
    */


    ball.style.setProperty(

        "--x0",

        `${(
            Math.random() * 20 - 10
        ).toFixed(0)}px`

    );


    /*
    --------------------------------
    DIFFERENT SIDEWAYS POSITION
    FOR EACH BOUNCE
    --------------------------------
    */


    for (
        let bounce = 1;
        bounce <= 6;
        bounce++
    ) {

        ball.style.setProperty(

            `--dx${bounce}`,

            randomSidewaysMovement()

        );

    }


    /*
    --------------------------------
    RANDOM ANIMATION SPEED
    --------------------------------
    */


    const duration =
        3.7 + Math.random() * 1.7;


    ball.style.setProperty(

        "--dur",

        `${duration}s`

    );


    /*
    --------------------------------
    ADD BALL TO PAGE
    --------------------------------
    */


    field.appendChild(ball);


    /*
    --------------------------------
    START BOUNCING

    Balls are staggered so they
    don't all appear at once.
    --------------------------------
    */


    setTimeout(() => {

        ball.classList.add("bounce");


        /*
        After the bouncing finishes,
        fade the ball away.
        */


        setTimeout(() => {

            ball.style.transition =
                "opacity 1.5s ease, transform 1.5s ease";


            ball.style.opacity = "0";


            ball.style.transform =
                "translateY(20px) scale(.7)";


        }, duration * 1000);


    }, index * 230);


    /*
    --------------------------------
    REMOVE BALL AFTER ANIMATION
    --------------------------------
    */


    setTimeout(() => {

        ball.remove();

    },

    7000 + index * 230);

}



/* =========================
   LAUNCH ALL TENNIS BALLS
========================= */


function launchBalls() {


    /*
    Respect reduced-motion settings
    */

    if (

        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

    ) {

        return;

    }


    /*
    Create 9 balls
    */

    for (
        let i = 0;
        i < 9;
        i++
    ) {

        makeBall(i);

    }

}



/* =========================
   START WHEN PAGE LOADS
========================= */


window.addEventListener(

    "load",

    () => {

        setTimeout(

            launchBalls,

            650

        );

    }

);



/* =========================
   REPEAT ANIMATION

   Every 10.5 seconds,
   a new group of balls appears.
========================= */


setInterval(

    launchBalls,

    10500

);
