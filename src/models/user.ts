export type UserType  = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    hash: string;
    salt: string;
}

export class User implements UserType {
    readonly id: number;
    readonly nom: string;
    readonly prenom: string;
    readonly email: string;
    readonly hash: string;
    readonly salt: string;

    constructor(nom: string, prenom: string, email: string, hash: string, salt: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.hash = hash;
        this.salt = salt;
    }
}
