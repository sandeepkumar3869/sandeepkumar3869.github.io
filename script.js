// Todo: Make M+ M- and MC functional
let string = "",s="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      s=string;
      string = "";
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'x'){
      string = string.substring(0,string.length-1);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'prev'){
      document.querySelector('input').value = s;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})