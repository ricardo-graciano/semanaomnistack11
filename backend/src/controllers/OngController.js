const connection = require('../database/connection')
const genertaeUniqueId = require('../utils/generateUniqueId')

module.exports = {
    index: async(req, res) => {
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    },
    create: async(req, res) => {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = genertaeUniqueId()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    }
}