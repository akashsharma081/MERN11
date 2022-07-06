// to handel the async by the help of promise 

// var x=100;
// var y=100;

// let promise= new Promise((reslove,reject)=>{
//     if(x==y){
//         reslove();
//     }
//     else{
//         reject();
//     }

//     setTimeout(() => {
//         console.log("proceess1");
//     }, 4000);
// })

// promise.then(()=>{
//     console.log("hello");
// }).catch(()=>{
//     console.log("Error");
// })

// if we want to bound the promise so we do this in given below

// var x=100;
// var y=10;

// let promise= new Promise((reslove,reject)=>{
//     if(x==y){
//         reslove();
//     }
//     else{
//         reject("hi");
//     }

// })

// promise.then(()=>{
//     console.log("hello");
// }).catch((u)=>{
//     console.log("Error",u);
// })

// it run the in sequence order in promise.all
// var a = Promise.resolve(10)
// var b= 67
// var c=new Promise((resolve)=>{
//     setTimeout(resolve,5000,'This is Timeout');
// })
// Promise.all([a,b,c]).then((values)=>{
//     console.log(values);
//     console.log("Finished");
// })



function a(){
    return 4+5;
}

function b(){
    return 4+50;
}

function c(){
    return 4+50;
}
Promise.all([a,b,c]).then((values)=>{
        var i=values[0];
        console.log(i());
        console.log("Finished");
    })
    

const u=((x,y)=>{
    return x+y;
}).then((h)=>{
    console.log(h);
})
u(2,3);
