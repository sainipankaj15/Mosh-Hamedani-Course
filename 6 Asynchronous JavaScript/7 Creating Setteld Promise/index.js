// some time we need ki ishe promise ko call kare which are already settled 

// settle  se means yeh h ki ya tho already resolved ho ya already hi reject ho 


// Example of already solved Promise
const p = Promise.resolve(1);
p.then((result)=>{
    console.log(result);
});

// Example of already rejected Promise
const a = Promise.reject(new Error('This is error message'));
a.catch((error)=>{
    console.log(error.message);
});