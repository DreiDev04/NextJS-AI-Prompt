import { Schema, model, models } from "mongoose";

const PromtSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Please provide a prompt"],
  },
  tag: {
    type: String,
    required: [true, "Please provide a tag"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromtSchema);

export default Prompt;