//  I was a little annoing thus I make this little function reusable
//  to Scroll viewport to an explicit target


// This the elements to be scrolled 
let black = document.getElementById('black');
let blue = document.getElementById('blue');
let red = document.getElementById('red');

let btn = document.getElementById('toRed');//this just to test the stop propagation


function avaScroll(element,target){

    let posTarget = target.offsetTop;//vertical position of the target

    element.addEventListener('click',function(e){

        e.stopPropagation();

        window.scroll({
            top: posTarget,
            behavior: "smooth"
          });

    });
}

// scrollDai(contBeta);
avaScroll(btn,blue);// on button to blue
avaScroll(black,red);// from black to red
avaScroll(red,blue); // from red to blue
avaScroll(blue,black);// from blue to black
