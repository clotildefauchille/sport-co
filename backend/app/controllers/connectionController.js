

const connectionController = {
    getUser: async (req, res) => {
        console.log(req.body);
        res.json({
            "firsname": "ton prénom",
            "lastname": "ton nom",
            "pseudo": "ton pseudo"
        });
    }
}

module.exports = connectionController;