// p166,p169より
'use strict'

const now = new Date();
const hour = now.getHours();

let isBuisiness;

// p081 より
if(hour >=0 && hour < 12)
{
    isBuisiness = "午前";
}
else if(hour >=12 && hour < 24)
{
    isBuisiness = "午後"
}

// "http://www.htmq.com/js/document_writeln.shtml"より
document.open();
// document.writeln("今は" + isBuisiness + "です");
document.getElementById('output').insertAdjacentHTML("beforeend", ("今は" + isBuisiness + "です") );
document.close();