// const appear = document.querySelector('.appear'); 
// const cb = function(entries){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('inview');
//       entry.unobserve(entry.target)
//     }
//   });
// }
// const io = new IntersectionObserver(cb);
// io.observe(appear);

const items = document.querySelectorAll('.appear');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview'); 
        }else{
            entry.target.classList.remove('inview'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }