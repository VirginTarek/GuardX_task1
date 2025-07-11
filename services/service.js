import Conversion from '../models/conversion.model.js';

export async function getnumbers() {
  return await Product.find();
}

export async function getnumberById(id) {
  return await Product.findById(id);
}

export async function addnumber(productData) {
  return await Product.create(productData);
}

export async function updatenumber(id, productData) {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
}

export async function deletenumber(id) {
  return await Product.findByIdAndDelete(id);
}