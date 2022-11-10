import gsap from "gsap";

export const bubbles_move = () => {
    const colors = ['rgb(0, 217, 255)', 'rgb(51, 44, 44)', 'rgb(143, 250, 110)', 'black'];
    let counter = 0;
    const t1 = gsap.timeline({
        repeat: -1,
        onRepeat: changeColor,
        onRepeatParams: ['backgroundColor']
    });
    t1.fromTo('.bubble', {
        y: -120,
        opacity: 0
    }, {
        y: 0,
        duration: 1.8,
        ease: "bounce.out",
        stagger: 0.1,
        opacity: 1,
    }, )


    function changeColor(t) {
        if (document.querySelector('.bubble')) {
            gsap.set('.bubble', {
                backgroundColor: colors[counter],
                ease: 'ease-in'
            })
            if (counter + 1 >= colors.length) {
                counter = 0;
            } else {
                counter++;
            }
        }
        else{
            t1.kill()
            return false
        }
    }
}