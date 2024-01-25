import crypto from 'crypto'
import util from 'util'

const scrypt = util.promisify(crypto.scrypt) as (password: string | Buffer, salt: string | Buffer, keylen: number) => Promise<Buffer>

async function hash_password(password: string): Promise<{ salt: string, hash: string }> {
    const salt: string = crypto.randomBytes(32).toString('hex')
    const derivedKey: Buffer = await scrypt(password, salt, 64);
    return {
        salt: salt,
        hash: derivedKey.toString('hex')
    }
}

async function check_password(password: string, hash: string, salt: string): Promise<boolean> {
    const derivedKey: Buffer = await scrypt(password, salt, 64);
    return hash === derivedKey.toString('hex');
}

export { hash_password, check_password }