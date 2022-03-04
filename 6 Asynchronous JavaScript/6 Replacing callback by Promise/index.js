console.log('Before');
// Asynchorouns  = non blocking
//nested callback


// getUser(155,displayuser);

// function displayuser(user){
//     console.log('User',user); 
//     getrepo(user.name,displayrepo);

// }

// function displayrepo(repo){
//     console.log('REPO are',repo);
//     getcommit(repo,displaycommit);
// }

// function displaycommit(commits){
//     console.log("Commits are " , commits);
// }



getUser(1).then((user)=>{
   console.log(user);

   getrepo(user.name).then((repo)=>{
    console.log(repo);

    getcommit(repo).then((commit)=>{
       console.log(commit);
    });

   });
})


// Lines 24-36 =  41-47 = 52-57

getUser(1)
.then((repo)=>getrepo(repo))
.then((repo)=>{console.log(repo); return getcommit(repo)})
.then(commit=>console.log(commit))
.catch(err=>{
   console.log(err);
})




getUser(1)
.then((user)=>{console.log(user); return getrepo(user.name)})
.then((repo)=>{console.log(repo); return getcommit(repo)})
.then((commit)=>{
   console.log(commit);
})




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
        reject(new Error('Error Message'));
    }, 2000);
   })
}



console.log('After');
