// Scripts needed to implement etch-a-sketch
let sketchSize = 16;
let alphaColor = 0;
let aCount = 0;
const container = document.querySelector('#container');

generateSketch(sketchSize);

const btn = document.querySelector('#btnSize');

btn.addEventListener('click', () => {
      
    // get sketch size

    sketchSize = prompt("Please enter a value between 0 and 100.");

    generateSketch(sketchSize);
     
});

function generateSketch(skSize) {
    // erase previous table

    container.innerHTML ="";

    // generate a new sketch table based on size

    for(let i = 1; i<=skSize; i++){

        for(let k = 1; k<=skSize; k++){
    
            const divList = document.createElement('div');
    
            divList.classList.add("box");
    
            container.appendChild(divList);
        }
    }

    let boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
    
        box.addEventListener('mouseover', () => {
          
       // box.classList.add("shadeBox");

            // Count

            aCount++;

            alphaColor = alphaColor + 0.1;

            // Random colors

            let rColor = Math.floor(Math.random() * 255 );
            let gColor = Math.floor(Math.random() * 255 );
            let bColor = Math.floor(Math.random() * 255 );

            let rgb = 'rgba(' + rColor + ',' + gColor + ',' + rColor + ',' + alphaColor + ')';

            box.style.backgroundColor = rgb;

            // reset counter

            if(aCount >= 10){
                aCount = 0;
                alphaColor =0;
            }
         
        });
    });
}



  