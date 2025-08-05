import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    industry: {
      type: String,
    },
    logo: {
      type: String,
    },
    about: {
      type: String,
    },
    contact: {
      phone: { type: String },
      email: { type: String },
      address: { type: String },
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"], // Admin approval
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);