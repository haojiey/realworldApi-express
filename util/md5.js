const crypto = require('crypto');

module.exports = str => {
    return crypto.createHash('md5').update('liangjie' + str).digest('hex')
}