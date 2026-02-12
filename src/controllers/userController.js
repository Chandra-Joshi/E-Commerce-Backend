
import userService from "../services/userService.js";
const getUsers = async (req, res) => {
    try {
        const users = await userService.getUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

const postUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Placeholder for update and delete, implement as needed
// const updateUserById = async (req, res) => { ... }
// const deleteUserById = async (req, res) => { ... }

export default {
    getUsers,
    postUser,
    getUserById,
    // updateUserById,
    // deleteUserById
};