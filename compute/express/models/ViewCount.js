import mongoose from "mongoose";
const { Schema, model } = mongoose;

const viewCountSchema = new Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const ViewCount = model("ViewCount", viewCountSchema);

export default ViewCount;
