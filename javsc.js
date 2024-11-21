let input = document.querySelector('input');
console.dir(input);
let hi = function ()
{
    console.log('mouse out');
    console.log(this.event);    
    this.st
};
input.addEventListener("keypress", hi);
