//  This thing is not multi threading. this is single thread but in a single thread we are using multiple promises
const p1 = new Promise((resolve,reject)=>{
  
    setTimeout(() => {
        console.log('This is first promise 1');
        resolve(2);
    }, 2000);

});

const p2 = new Promise((resolve,reject)=>{
  
    setTimeout(() => {
        console.log('This is first promise 2');
        resolve(5);
    }, 2000);

});

// Promise.all function yeh kaam karta h ki jab dono hi promise ready honge tho yeh chalegaa
// before this program hum kya kar rahe the ki pahle ek promise chalegaa uske baad dusra chelgaa 
// but abe saare promsie ek parallele chal rahe h tho jaise hi sab khatam honge promise.all result send kar dega
// yaad rakhnaa result as a aaray hone wala h kykoi sab promise k reuslt aayage usme


// if we want result when all promisse call complelted then we will write like this 
Promise.all([p1,p2]).then((result)=>{
    console.log("Me all wala result hu jo thabi aata hu jab all promise ready ho jaate h");
    console.log(result);
})


// but what if we want result yadi given all promise mai se koi bhi ready ho jaayge tho pahle return kar denge
Promise.race([p1,p2]).then((result)=>{
    console.log("Me race wala result hu jo bas koi bhi ek promise ready par aa jaata hu ");
    console.log(result);
})


// Note we should use catch also in promise.all if any promise failed then it will show error 
Promise.all([p1,p2]).then((result)=>{
    console.log("Me all wala result hu jo thabi aata hu jab all promise ready ho jaate h");
    console.log(result);
}).catch((err)=>{
  console.log(err);
  // if any promise failed in given array then it will throw error 
})