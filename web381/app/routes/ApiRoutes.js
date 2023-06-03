const express = require('express')
const apiRouter = express.Router()
const People = require("../models/PeopleSchema")



function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

apiRouter.get('/', (req, res) => {
    res.send('API Page')
})

apiRouter.post('/add-person', (req, res) => {
    const {title, firstName, lastName} = req.body;
    new People({title, firstName, lastName}).save()
        .then(() => {
            res.status(200).json(
                {
                    "status": "Suc",
                }
            )
        })
        .catch((exception) => {
            res.status(400).json(
                {
                    "status": "Err",
                    "trace": {
                        message: exception.message,
                    }
                }
            )
        })
});

apiRouter.get('/view-people', (req, res) => {
    People.find({}).then((dbEntry) => {
        res.json(dbEntry);
    }).catch((exception) => {
        res.status(500).json({trace: exception.message});
    });
});

apiRouter.post('/find-people', (req, res) => {
    let filter = {}
    if (req.body.id){filter["_id"] = req.body.id}
    if (req.body.title){filter["title"] = req.body.title}
    if (req.body.firstName){filter["firstName"] = req.body.firstName}
    if (req.body.lastName){filter["lastName"] = req.body.lastName}
    if (isEmpty(filter)){
        return res.status(400).json(
            {
                "status": "Err",
                "trace": {
                    message: "No filter added",
                }
            }
        )
    }
    People.find(filter).then((dbEntry) => {
        res.json(dbEntry);
    }).catch((exception) => {
        res.status(500).json({trace: exception.message});
    });
});

apiRouter.delete('/delete/:id', (req, res) => {
    const {id} = req.params;

    People.findByIdAndDelete(id).then(() => {
        res.sendStatus(204);
    }).catch((exception) => {
        res.status(500).json({trace: exception.message});
    });
});

module.exports = apiRouter