var data=[
    {name:'a',price:200,mobile:928283838},
    {name:'b',price:100,mobile:9282838353},
    {name:'c',price:300,mobile:9244353688}
]

// For Adding the value 
// var q=data.reduce(testdata)
// function testdata(total , value, index, array)
// {
//     if(index==1){
//           return total.price+value.price 
//     }
//     else{
//         return total+value.price
//     }
// }
// console.log(q);

// Verify the value 
// function test(){
//     r= /^[6-9]\d{9}$/
//     data.forEach((element,i)=>{
//        if(r.test(element.mobile)){
//            data[i]['verify']=true;
//        }
//        else
//        {
           
//         data[i]['verify']=false;
//        }
//     })
// }
// test()
// console.log(data);
                            //   or
// const r=/^[6-9]\d{9}$/
// data.forEach((element,i)=>{
//     console.log(element);
//     switch(r.test(element.mobile)){
//         case true:
//             console.log("Verified"); 
//             break
//         case false:
//             console.log("Not verified");
//             data.splice(i,1);  //here i is index number where it show not verfied we delete the data from json data 
//             break
//         default:
//             console.log("Something went wrong");
//     }
// })

// console.log(data);

// output
// { name: 'a', price: 200, mobile: 928283838 }
// Not verified
// { name: 'c', price: 300, mobile: 9244353688 }
// Verified
// [
//   { name: 'b', price: 100, mobile: 9282838353 },
//   { name: 'c', price: 300, mobile: 9244353688 }
// ]

// Here is incorrect mobile it deleted the that index number and name:'b' come at 0 index number 
// and skip that index number and check for next index number i.e 1 index number for this issue we prefer to use proper for loop 

const r=/^[6-9]\d{9}$/
for(i=0;i<data.length;i++){
    element=data[i]
    console.log(element);

    switch(r.test(element.mobile)){
                case true:
                    console.log("Verified"); 
                    break
                case false:
                    console.log("Not verified");
                    data.splice(i,1);  //here i is index number where it show not verfied we delete the data from json data 
                    i--;
                    break
                default:
                    console.log("Something went wrong");
            }
}
console.log(data);

// Output 
// { name: 'a', price: 200, mobile: 928283838 }
// Not verified
// { name: 'b', price: 100, mobile: 9282838353 }
// Verified
// { name: 'c', price: 300, mobile: 9244353688 }
// Verified
// [
//   { name: 'b', price: 100, mobile: 9282838353 },
//   { name: 'c', price: 300, mobile: 9244353688 }
// ]