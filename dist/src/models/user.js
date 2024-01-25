"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, nom, prenom, email, hash, salt) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.hash = hash;
        this.salt = salt;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map