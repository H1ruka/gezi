const btns = document.querySelectorAll('.btn');

btns.forEach((btn, index) => {
    btn.addEventListener('click', function(event) {
        const point1 = document.querySelector('.almaty-section')
        const point2 = document.querySelector('.taraz-section')
        const point3 = document.querySelector('.shymkent-section')

        if (index === 0){
            point1.scrollIntoView({ 
                behavior: 'smooth' 
            })
        }
        else if (index === 1){
            point2.scrollIntoView({ 
                behavior: 'smooth' 
            })
        }
        else if (index === 2){
            point3.scrollIntoView({ 
                behavior: 'smooth' 
            })
        }
    });
});
