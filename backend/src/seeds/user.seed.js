import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

config();

const seedUsers = [
  // Female Users
   {
    email: "emma.smith@example.com",
    fullName: "Emma Smith",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "olivia.jones@example.com",
    fullName: "Olivia Jones",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "sophia.martinez@example.com",
    fullName: "Sophia Martinez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  // Male Users
  {
    email: "liam.brown@example.com",
    fullName: "Liam Brown",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "noah.davis@example.com",
    fullName: "Noah Davis",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "ethan.garcia@example.com",
    fullName: "Ethan Garcia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
 
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Hash passwords and insert new users
    const usersWithHashedPasswords = await Promise.all(
      seedUsers.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );

    await User.insertMany(usersWithHashedPasswords);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();