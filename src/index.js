//common js写法
// const data = require('sam-test-data')


// console.log(data.random(), data.a, data.b)

// module.exports = {}

//es js写法
import { random, a, b } from 'sam-test-data'


console.log(random(100), a, b )

export default random
