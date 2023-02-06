//#1
a = 0;
const fs = require('fs');
setInterval(function()
{
    a++;
    console.log('Hello world')
    if (a >= 150) stop;
}, 150);
//#2
a = 2;
const fs = require('fs');
setInterval(function()
{
    console.log(a);
    a += 2;
    if (a > 20) stop;
}, 150);

//#3
a = 4;
b = 11;
    x = a * Math.pow(b) / b
    if (x > 0){
        console.log('Hello')
    }
    else {
        console.log('olleh')
    }


//#4
a = 1;
b = 13
const fs = require('fs');
setInterval(function()
{
    let text = fs.readFileSync('readme.txt','utf8');
    x = Math.sqrt(a * a / b);
    y = Math.cos(a) * 100; 
    
    fs.writeFileSync('readme.txt',text+ "x = " +x+ " y = " +y);
    stop;
});