console.log('Before');

// getUser(1)
// .then((repo)=>getrepo(repo))
// .then((repo)=>{console.log(repo); return getcommit(repo)})
// .then(commit=>console.log(commit))
// .catch(err=>{
//    console.log(err);
// })


// Lines no 3 to 9 ko we can write simple form like for calling a promise we can use Async and Await


// await likhne se wo wait karta h ushe function se result aane ka lkein hum javascript engine ko batnaa padgaa ki yaha await h then we use async funciton
// async and await approch 

async function displaycommit(){

    const user = await getUser(1);
    const repo = await getrepo(user.name);
    const commit = await getcommit(repo[0]);
    console.log(commit);

}

displaycommit(); // function ko call kar liya h 

// now look line 18 to 25 we are assunming all prmoise resolved but it is not really true in life so 
// there is thing like we use catch in promise 
// then above lines ka better version kuch isha hoga 

async function displaycommit(){
   
    // if all promise resolved
   try{
    const user = await getUser(1);
    const repo = await getrepo(user.name);
    const commit = await getcommit(repo[0]);
    console.log(commit);
   }

    // if any promise is rejected
   catch(err){
       console.log(err.message);
   }

}





// Converted callback function to promise
function getUser(id) {

   return new Promise((resolve,reject)=>{
     
    setTimeout(()=>{
        console.log('Inside and it  will run after 2 seconds');
        resolve({id:id,name:'Saini'});
        reject(new Error('Error Message'));
    },2000)

   })
    
}


//Converted callback function to promise
function getrepo(username){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log('Inside and it  will run after 2 seconds');

        resolve(['repo1','repo2','repo3']) ;
        reject(new Error('Error Message'));

    }, 2000);

  })
}


//Converted callback function to promise
function getcommit(repo){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log('Inside and it  will run after 2 seconds');
        resolve(['commit 1 ','commit 2',]) ;
        reject(new Error('Error  Message'));
    }, 2000);
   })
}



console.log('After');
