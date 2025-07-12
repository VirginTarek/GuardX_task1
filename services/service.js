import Conversion from '../models/models.js'; 

export async function getnumbers() {
  return await Conversion.find();
}

export async function getnumberById(id) {
  return await Conversion.findById(id);
}

export async function addnumber(NumberData) {
  return await Conversion.create(NumberData);
}

export async function updatenumber(id, NumberData) {
  return await Conversion.findByIdAndUpdate(id, NumberData, { new: true });
}

export async function deletenumber(id) {
  return await Conversion.findByIdAndDelete(id);
}
