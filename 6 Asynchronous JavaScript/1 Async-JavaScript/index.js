console.log('Before');



function getUser(id) {

    setTimeout(()=>{
        console.log('Inside and it  will run after 4 seconds');

        return {id: id, name: 'Ankur'};
    },2000)
    // return 1;
}

const user = getUser(155);
console.log(user);

console.log('After');
