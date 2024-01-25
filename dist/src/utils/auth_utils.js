"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_password = exports.hash_password = void 0;
const crypto_1 = __importDefault(require("crypto"));
const util_1 = __importDefault(require("util"));
const scrypt = util_1.default.promisify(crypto_1.default.scrypt);
async function hash_password(password) {
    const salt = crypto_1.default.randomBytes(32).toString('hex');
    const derivedKey = await scrypt(password, salt, 64);
    return {
        salt: salt,
        hash: derivedKey.toString('hex')
    };
}
exports.hash_password = hash_password;
async function check_password(password, hash, salt) {
    const derivedKey = await scrypt(password, salt, 64);
    return hash === derivedKey.toString('hex');
}
exports.check_password = check_password;
//# sourceMappingURL=auth_utils.js.map