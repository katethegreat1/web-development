const cowsay = require('cowsay')

const msg = cowsay.say({
    text : "I'm a moooodule",
    e : 'oO',
    T : 'U '
})

console.log(msg)