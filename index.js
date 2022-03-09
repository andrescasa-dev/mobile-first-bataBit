const arrow = document.getElementById("arrow");

function changeTable(){  
  arrow.classList.toggle("rotate")
  if(arrow.dataset.inSecond == 1){
    arrow.href = "#first-table";
    arrow.dataset.inSecond = "0";
  }
  else{
    arrow.href = "#second-table";
    arrow.dataset.inSecond = "1";
  }
}

arrow.addEventListener('click', changeTable);