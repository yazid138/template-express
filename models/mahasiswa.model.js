const Sequalize = require('sequelize');
const db = require('../config/database');

const mahasiswa = db.define('mahasiswa', {
    nim: Sequalize.INTEGER,
    nama: Sequalize.STRING,
    jurusan: Sequalize.STRING
}, {
    freezeTableName: true,
    timestamps: false
});

mahasiswa.removeAttribute('id');

module.exports = mahasiswa;