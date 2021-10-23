const Mahasiswa = require('../models').Mahasiswa;
const controller = {}

controller.getAll = async (req, res) => {
    try {
        await Mahasiswa.findAll()
            .then(result => {
                if (result.length > 0) {
                    res.json({
                        message: 'get mahasiswa',
                        data: result
                    })
                } else {
                    res.status(404).json({
                        message: 'get mahasiswa kosong',
                        data: []
                    })
                }
            })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

controller.create = async (req, res) => {
    try {
        await Mahasiswa.create({
            nim: req.body.nim,
            nama: req.body.nama,
            jurusan: req.body.jurusan
        })
            .then(result => {
                res.json({
                    message: 'create mahasiswa',
                    data: result
                })
            })
    } catch (err) {
        res.status(400).json({
            message: err.errors
        })
    }
}

module.exports = controller;