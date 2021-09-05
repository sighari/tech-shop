import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@techshop.com",
    password: bcrypt.hashSync("admin+123", 10),
    isAdmin: true,
  },
  {
    name: "Aymen Souissi",
    email: "aymen@example.com",
    password: bcrypt.hashSync("user123", 10),
  },
  {
    name: "Maysa Slama",
    email: "maysa@example.com",
    password: bcrypt.hashSync("user123", 10),
  },
];

export default users
