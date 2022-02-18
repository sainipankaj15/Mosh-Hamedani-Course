
const EventEmitter = require('events');


class Logger extends EventEmitter
{


    // wo function class k ander aa gayya now we will use it as a method
   log(message){
        console.log(`This is ${message}`);
    
        this.emit('messagelogged');
    
    };

}
// overall baat yeh h ki Logger class h uske pass wo saari functionality h jo EvetEmitter k pass thi aur saath mai khud ki tho h hi 



// module.exports = {
//     Logger : Logger,
//     // (yeh jo dusre module mai kis naam se access kargaa) : (ishe wale mai model mai jo naam h wo )
//     // left side : right side
// }

// above line (22 to 26 shoudl work but now they are working so line 30 is solution of this)

module.exports = Logger;