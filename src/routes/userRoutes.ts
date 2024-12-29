// Import necessary modules and controllers
import express from "express";
import {
  getUserProfile,
  updateUserDetails,
  addUserRoles,
  getUsers,
} from "../controllers/userControllers";

const userRouter = express.Router();
userRouter.get('/', getUsers);
userRouter.get("/:id", getUserProfile);
userRouter.put("/:id", updateUserDetails);
userRouter.patch("/:id/roles", addUserRoles);


export default userRouter;
