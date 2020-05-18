const createUser = (req, res) =>{
    res.send.json({status: 'OK', message: 'user-created '});
}

const delUser = (req, res) => {
    res.send.json({status: 'OK', message: 'User Deleted'});
}

const getUser = (req, res) => {
    res.send.json({status: 'OK', data: []});
}

const updateUser = (req,res) => {
    res.send.json({status: 'OK', message: 'User updated'});
}

module.exports = {
    createUser, delUser, getUser, updateUser
};