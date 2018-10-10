export class User {
    id: String;
    name: String;
    mail: String;
    password: String;
    profilePic: String;
    runAways?: Number;
    personalHate?: Array<User>
}
