import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  slug: {
    type: String,
    required: true,
  },

  uslug: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  size: [
    {
      type: String,
      required: true,
    },
  ],

  varient: [
    {
      type: String,
      required: true,
    },
  ],

  img: [
    {
      type: String,
      required: true,
    },
  ],

  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.products ||
  mongoose.model("products", ProductSchema);
