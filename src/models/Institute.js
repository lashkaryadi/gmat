

const mongoose = require("mongoose");
const { Schema } = mongoose;
const instituteSchema = new Schema(
  {
  
    name: { type: String, required: true, trim: true, index: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    

 
    address: {
      street: String,
      city: { type: String, index: true },
      state: String,
      pincode: String
    },
    description: { type: String },
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 }
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Institute", instituteSchema);
