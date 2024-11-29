const User = require('../models/User');

class UserDAO {

    // Criar um novo usuário
    async create(userData) {
        try {
            const user = new User(userData);
            return await user.save();
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    // Buscar todos os usuários (sem incluir o userId nas respostas)
    async findAll() {
        try {
            return await User.find().select('-userid'); // Exclui o campo userId
        } catch (error) {
            throw new Error(`Error retrieving users: ${error.message}`);
        }
    }

    // Buscar um usuário pelo userId (sem incluir o userId na resposta)
    async findByUserId(userId) {
        try {
            const user = await User.findOne({ userid: userId }).select('-userid'); // Exclui o campo userId
            if (!user) {
                throw new Error(`User with userid ${userId} not found`);
            }
            return user;
        } catch (error) {
            throw new Error(`Error retrieving user with userid ${userId}: ${error.message}`);
        }
    }

    // Buscar um usuário pelo login (sem incluir o userId na resposta)
    async findByLogin(login) {
        try {
            const user = await User.findOne({ login }).select('-userid'); // Exclui o campo userId
            if (!user) {
                throw new Error(`User with login ${login} not found`);
            }
            return user;
        } catch (error) {
            throw new Error(`Error retrieving user with login ${login}: ${error.message}`);
        }
    }

    // Atualizar um usuário
    async update(userId, updateData) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { userid: userId },
                updateData,
                { new: true }
            ).select('-userid'); // Exclui o campo userId
            if (!updatedUser) {
                throw new Error(`User with userid ${userId} not found`);
            }
            return updatedUser;
        } catch (error) {
            throw new Error(`Error updating user with userid ${userId}: ${error.message}`);
        }
    }

    // Deletar um usuário
    async delete(userId) {
        try {
            const deletedUser = await User.findOneAndRemove({ userid: userId }).select('-userid');
            if (!deletedUser) {
                throw new Error(`User with userid ${userId} not found`);
            }
            return deletedUser;
        } catch (error) {
            throw new Error(`Error deleting user with userid ${userId}: ${error.message}`);
        }
    }
}

module.exports = new UserDAO();
