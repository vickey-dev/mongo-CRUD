"use strict";

let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  item: { type: String },
  qty: { type: Number },
  status: { type: String },
  lastModified: {type: Date},
  size: {
    h: { type: String },
    w: { type: String },
    uom: { type: String },
  },
});
module.exports = mongoose.model("inventory", inventorySchema, "inventory");
