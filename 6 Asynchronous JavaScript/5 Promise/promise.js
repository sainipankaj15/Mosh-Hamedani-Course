const p = new Promise((resolve,reject)=>{
  
  // let understand after asynchronous function result is 

setTimeout(() => {
    
        resolve(15);  // this is result    penidng to fulfilled
        reject(new Error('message'))    // in case if result is not ready this is error    and this is goes pending to rejected 
    
}, 5000);
})


p.then((result)=>{
    console.log('Result is ',result);
}).catch((err)=>{
  console.log(err.message);
})