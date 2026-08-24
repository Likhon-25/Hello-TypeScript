type userRole = "Admin" | "User" | "Moderator" | "Guest";

interface User {
  name: string;
  role: userRole; //Type ailes
  email: string;
}

interface Admin extends User {
  permissions: string[];
}

interface Moderator extends User {
  moderatedSections: string[];
}

const bigBoss : Admin = {
    name : "Bog Boss",
    role: 'Admin',
    email:' abcd12@gmail.com',
    permissions: ['manage_users', 'edit_content']

}
