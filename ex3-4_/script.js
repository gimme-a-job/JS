'use strict'

const form = document.getElementById('form');
const input = form.word.value;
const output = document.getElementById('output');

// p159より
form.onsubmit = function(event)
{
    event.preventDefault(); // p164より
    if(isNaN(input))
    {
        output.textContent = "数字ではありません";
    }  

};