import jwt from 'jwt-simple';
import {} from 'dotenv/config';
import dayjs from 'dayjs';

const secret = process.env.SECRET;

export const createToken = (user) => {
    const iat = dayjs();
    const exp = dayjs().add(1,'day');
    const payload = {
        sub:user._id,
        iat,
        exp,
        role:user.role
    };
    const token = jwt.encode(payload,secret);
    return token;
}
