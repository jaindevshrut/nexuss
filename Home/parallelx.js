// day night check
const now = new Date();
const time = now.getHours() < 6 || now.getHours() > 20 ? 'night' : 'day';
console.log(now.getHours(),time)

const section = document.querySelector('section');
        Array.from(section.children).forEach(sec =>{            
            if (sec.classList.contains(time)){
                sec.classList.remove('d-none');
            }else{
                sec.classList.add('d-none')
            }
        });
        let sec = document.querySelector('#sec');
        let moon = document.querySelector('.moon')
        let sun = document.querySelector('.sun');
        let treen = document.querySelector('.treen');
        let mountains = document.querySelector('.mountain');
        let text = document.querySelector('#text');
        let btn = document.querySelector('#btn');
        let tree = document.querySelector('.tree');
        let front = document.querySelector('.front');
        let mid = document.querySelector('.mid');
        let back = document.querySelector('.back');
        let body = document.querySelector('body');
        let day = [sun,mountains,tree];
        let night = [moon,treen,front,back,mid];
        body.setAttribute('id',time);
        window.addEventListener('scroll',()=>{
            let value = scrollY;
            console.log(value)
            if(value){
            tree.style.top = value * (1.5) + 'px';
            mountains.style.top = value * (-0.5) + 'px'; }
            text.style.marginBottom = value * 10 + 'px'; 
            moon.style.right = value * (-0.05) + 15 + '%';
            moon.style.top = value * (-0.05) + 10 + '%'
            treen.style.top = value * (0.3) + 26 + '%';
            front.style.top = value * (0.15)+ -5 + '%';
            mid.style.top = value * (0.1)+ 8 + '%';
            back.style.top = value * (0.1) + 2 +'%';
        });