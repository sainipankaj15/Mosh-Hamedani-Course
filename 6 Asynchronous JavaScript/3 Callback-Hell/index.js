console.log('Before');
// Asynchorouns  = non blocking
//nested callback
getUser(155,(user)=>{
    console.log('User',user);

     getrepo(user.name,(repo)=>{
         console.log('REPO are',repo);

         getcommit(repo,(commits)=>{
          
         })
     })

});


// scynchronus =  blocking
const user =  getuser(id);
const repo = getrepo(user.name);
const commit = getcommit(repo[0]);


// first callback function
function getUser(id,callback) {

    setTimeout(()=>{
        console.log('Inside and it  will run after 4 seconds');
        callback({id:id,name:'Saini'});
    },2000)
    // return 1;
}


//second callback function
function getrepo(username,callback){
    setTimeout(() => {
        callback(['repo1','repo2','repo3']) ;
    }, 2000);
}



console.log('After');
