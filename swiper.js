const container = document.querySelector('.conatiner-monedas__wrapper');
const nChildren = container.children.length;
const arrowPrev = document.getElementById('arrow-prev');
const arrowNext = document.getElementById('arrow-next');

let initialX = null;
let imageIndex = 0;
let locked = false;

container.style.setProperty('--n', nChildren);

// if in the event there some touche, give me that touch object if not means that it was a click.
function unify(mouseOrTouch){
  return mouseOrTouch.changedTouches ? mouseOrTouch.changedTouches[0] : mouseOrTouch;
}

function lock(mouseUp){
  initialX = unify(mouseUp).clientX; //give the X position where the event (mousedown or touchstart) was activated.
  container.classList.toggle('smooth', !(locked = true));
}

/**
 * 
 * @param {event that detect mouse up or touch start} mouseUp 
 * @returns a boolean which determines if show the isGoingPrevImage or the nextImage according to the user movement is to the right or not. 
 */
function whereMove(mouseUp){
  const finalX = unify(mouseUp).clientX;
  const isGoingPrevImage = finalX === initialX ? undefined: finalX > initialX; // it could right left and no move.
  return isGoingPrevImage;
}


function drag(mouseUpOrTouchStart){
  mouseUpOrTouchStart.preventDefault();
  if(locked){
    let currentX = unify(mouseUpOrTouchStart).clientX;
    let distance = Math.round( currentX  - initialX );
    container.style.setProperty('--extra', `${distance}px`);
  }
}

function moveOnLocked(mouseUp){
  debugger;
  if(locked){
    const isGoingPrevImage = whereMove(mouseUp);
    //if there is not movement or can't move then don't move
    move(isGoingPrevImage);
    locked = false;
    container.style.setProperty('--extra', '0px');
    initialX = null; //reset where was the first click
  }
}

function move(isGoingPrevImage){
  if((isGoingPrevImage !== undefined) && !(isGoingPrevImage && imageIndex === 0) && !( !isGoingPrevImage && imageIndex === (nChildren - 1))){
    container.classList.toggle('smooth', true);
    container.style.setProperty('--i', isGoingPrevImage ? --imageIndex : ++imageIndex) //if the user wants to go to the right, show prev image; if not, show next image. 
  }
}

function moveNext(){
  move(false);
  
}

function movePrev(){
  move(true);
}


container.addEventListener('mousedown', lock);
container.addEventListener('touchstart', lock);

container.addEventListener('mouseup', moveOnLocked);
container.addEventListener('touchend', moveOnLocked);

container.addEventListener('mousemove', drag);
container.addEventListener('touchmove', drag);

arrowNext.addEventListener('click', moveNext);
arrowPrev.addEventListener('click', movePrev);

