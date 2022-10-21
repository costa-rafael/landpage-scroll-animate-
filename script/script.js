const oberserver = new IntersectionObserver((teste) => {

    teste.forEach((entry) =>{

        console.log(entry)

        if (entry.isIntersecting){
            entry.target.classList.add("show");            
        }
        else{
            entry.target.classList.remove("show")
        }

    });

});

const hiddenElements = document.querySelectorAll(".hiddenLeft");
hiddenElements.forEach((el) => oberserver.observe(el));


const hiddenElementsReverse = document.querySelectorAll(".hiddenReverse");
hiddenElementsReverse.forEach((el) => oberserver.observe(el));


const hiddenElementsTop = document.querySelectorAll(".hiddenTop");
hiddenElementsTop.forEach((el) => oberserver.observe(el));

console.log(hiddenElements);