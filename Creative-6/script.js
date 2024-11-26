const playAnimation = (callback) => {
    const blocks = document.querySelectorAll(".title");

    const animateBlocks = (index) => {
        if (index < blocks.length) {
            const block = blocks[index];
            block.classList.remove("hidden");
            block.classList.add("animate");
            
            setTimeout(() => {
                animateBlocks(index + 1);
            }, 100);
        } else if (callback) {
            callback();
        }
    };

    animateBlocks(0);
};

document.addEventListener("DOMContentLoaded", () => {
    playAnimation(() => {
        const betNow = document.querySelector(".bet-now");
        const ball = document.querySelector('.ball');
        
        setTimeout(() => {
            ball.classList.remove("hidden");
            ball.classList.add("flyIn");
            
            betNow.classList.remove("hidden");
            betNow.classList.add("pulse");
        }, 100);

        // setTimeout(() => {
        //     ball.classList.add("swing");
        // }, 120)
    });
});


