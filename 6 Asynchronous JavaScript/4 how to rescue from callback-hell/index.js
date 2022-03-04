console.log('Before');
// Asynchorouns  = non blocking
//nested callback
getUser(155,displayuser);


function displayuser(user){
    console.log('User',user); 
    getrepo(user.name,displayrepo);

}

function displayrepo(repo){
    console.log('REPO are',repo);
    getcommit(repo,displaycommit);
}

function displaycommit(commits){
    console.log("Commits are " , commits);
}


// first callback function
function getUser(id,callback) {

    setTimeout(()=>{
        console.log('Inside and it  will run after 2 seconds');
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


//Third callback function
function getcommit(repo,callback){
    setTimeout(() => {
        callback(['commit 1 ','commit 2',]) ;
    }, 2000);
}



console.log('After');
