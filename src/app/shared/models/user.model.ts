export class User {
    id: string;
    name: string;
    mail: string;
    password: string;
    profilePic: string;
    runAways?: number;
    personalHate?: Array<User>
}
