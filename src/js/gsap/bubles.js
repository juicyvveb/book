import gsap from "gsap";

export const bubbles_move = (count) => {
    console.log('bubbles move')
    if(count){
        console.log(count)
        return
    }
    console.log('working')
    const colors = ['rgb(0, 217, 255)', 'rgb(51, 44, 44)', 'rgb(143, 250, 110)', 'black'];
    let counter = 0;
    const t1 = gsap.timeline({
        repeat: count || -1,
        onRepeat: changeColor,
        onRepeatParams: ['backgroundColor']
    });
    t1.fromTo('.buble',
        { y: -120, opacity: 0 },
        {
            y: 0, duration: 1.8,
            ease: "bounce.out",
            stagger: 0.1,
            opacity: 1,
        },)


    function changeColor(t) {
        gsap.set('.buble', { backgroundColor: colors[counter], ease: 'ease-in' })
        if (counter + 1 >= colors.length) {
            counter = 0;
        } else {
            counter++;

        }
    }
}