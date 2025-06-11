var typed1 = new Typed('.text', {
    strings:[, 'Web Designer--', 'Full Stack Developer--', 'Backend Developer--', 'Frontend Developer--'],
    typeSpeed:100,
    backSpeed:100,
    cursorChar:'',
    loop: true,
 })

var typed2 = new Typed('.hero_text', {
   strings:[, 'Full Stack Developer--', 'Web Designer--', 'Frontend Developer--', 'Backend Developer--'],
   typeSpeed:100,
   backSpeed:100,
   cursorChar:'',
   loop: true,
})

let bar = document.querySelector('.bar');
let side_bar = document.querySelector('.sidebar');

bar.addEventListener('click' ,() => {
   side_bar.classList.toggle('show_side_bar');
});