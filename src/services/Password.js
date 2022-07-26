import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

export const checkPassword = async (password,hash) => {
    try {
        const isValid = await bcrypt.compare(password,hash);
        return { isValid };
    } catch (error) {
        throw error;
    }
}