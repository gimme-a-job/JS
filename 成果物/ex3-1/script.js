// p166,p169より
'use strict'

const now = new Date();
const hour = now.getHours();

const opening = 9;
const ending = 17;

let isBuisiness;

// p081 より
if(hour >=0 && hour < opening)
{
    isBuisiness = "営業時間外";
}
else if(hour >= opening && hour < ending)
{
    isBuisiness = "営業時間内";
}
else if(hour >= ending && hour < 24)
{
    isBuisiness = "営業時間外"
}

// "http://www.htmq.com/js/document_writeln.shtml"より
document.open();
// document.writeln("今は" + hour + "です"); // 検証用
// document.writeln("今は" + isBuisiness + "です");
document.getElementById('output').insertAdjacentHTML("beforeend", ("今は" + isBuisiness + "です") );
document.close();