const mySqlConnection = require("../connection");

function getUsers(callback) {
    const sql = "SELECT * FROM users";
    mySqlConnection.query(sql, callback);
}

function getUserById(userId, callback) {
    const sql = "SELECT * FROM users WHERE id = ?";
    mySqlConnection.query(sql, [userId], callback);
}

function insertUser(name, message, phone, email, callback) {
    const sql = "INSERT INTO users (name, message, phone, email) VALUES (?, ?, ?, ?)";
    mySqlConnection.query(sql, [name, message, phone, email], callback);
}

function updateUser(userId, name, message, phone, email, callback) {
    const sql = "UPDATE users SET name = ?, message = ?, phone = ?, email = ? WHERE id = ?";
    mySqlConnection.query(sql, [name, message, phone, email, userId], callback);
}

function deleteUser(userId, callback) {
    const sql = "DELETE FROM users WHERE id = ?";
    mySqlConnection.query(sql, [userId], callback);
}

module.exports = { getUsers, getUserById, insertUser, updateUser, deleteUser };
