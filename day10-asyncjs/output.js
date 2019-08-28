console.log('1');
setTimeout(function(){
    console.log('2');
    console.log('3');
}, 100);

for(let i = 0; i < 1000; i++) {
    console.log('hello');
}

//closure
//variables which are refered by call fucntions are persisted 
const city = 'bangalore';
setTimeout(() => {
    console.log(city);
}, 1000);

// execute sequentially
setTimeout(() => {
    console.log('function 1');
    setTimeout(() => {
        console.log('function 2')
    },500)
}, 3000)


//execute parallely
setTimeout(() => {
    console.log('1');
}, 1000);

setTimeout(() => {
    console.log('2');
}, 2000);
