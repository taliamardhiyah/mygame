const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '92.204.41.25',
    user: 'varsalab_munchick',
    password: 'munchick@123',
    database: 'varsalab_game1'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;