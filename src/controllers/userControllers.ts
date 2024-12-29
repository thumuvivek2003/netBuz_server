import { Request, Response } from "express";
import UserModel from "../models/User";

// Assuming this function might be causing an issue due to its return type
export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user profile", error: error.message });
  }
};

export const updateUserDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, mobile } = req.body;
    const user = await UserModel.findByIdAndUpdate(
      id,
      { name, mobile },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

export const addUserRoles = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { roles } = req.body;
    const user = await UserModel.findByIdAndUpdate(
      id,
      { $addToSet: { roles: { $each: roles } } },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json({ message: "Roles added successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding roles", error: error.message });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const users = await UserModel.find().skip(skip).limit(limit);
    const total = await UserModel.countDocuments();
    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      data: users,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving users", error: error.message });
  }
};
