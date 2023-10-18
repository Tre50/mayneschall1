let name = ['derek', 'tom', 'tim', 'todd']

export function getAllName(req, res) {
    res.send(name)
}

export function addName (req, res) {

    const newName = req.body
        students.push(newName.name)
        res.status(201).send({message: "Name added.", success: true})

    }