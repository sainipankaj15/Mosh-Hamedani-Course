console.log('Before');

// callback k ander callback
getUser(155,(user)=>{
    console.log('User',user);

     getrepo(user.name,(repo)=>{
         console.log('REPO are',repo)
     })

});




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
