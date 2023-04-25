const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



let menuBox=document.getElementById('menuBox')
        let menuIcon=document.getElementById('menuIcon')

        menuIcon.onclick=function(){
            menuBox.classList.toggle('open-menu')
            let sidebar=document.querySelector('.side_bar')
            
            if(menuBox.classList.contains('open-menu')){
                menuIcon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEF2_1HsG3EHZDKGJmmtMl2OYbKzWeP9u6v4J9H5mrsye-42lvNTWpXLumQZmvWVTWA&usqp=CAU"           
                


            }
            else{
                menuIcon.src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"


            }
        
        } 

let carousel=document.getElementById('carouselExampleInterval')
let paragraph=document.querySelectorAll('p')
let screenWidth=window.innerWidth

function responsive(){
    if(screenWidth<=650){
        paragraph.forEach((para)=>{
            para.classList.remove('w-75')
        })
        carousel.classList.remove('w-75')
    }
   else if(screenWidth>650){
        carousel.classList.add('w-75')
        paragraph.forEach((para)=>{
            para.classList.add('w-75')
        })
    }
}

responsive();

const desc=document.getElementsByClassName('page_desc')
console.log(desc)

       