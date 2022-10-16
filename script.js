// Scripts needed to implement etch-a-sketch

const container = document.querySelector('#container');

for(let i = 1; i<=16; i++){

    for(let k = 1; k<=16; k++){

        const divList = document.createElement('div');

        divList.classList.add("box");

        container.appendChild(divList);
    }
}

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {

    // and for each one we add a 'click' listener
    box.addEventListener('mouseover', () => {
      
    box.classList.add("shadeBox");
     
    });
  });