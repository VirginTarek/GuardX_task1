import Conversion from '../models/conversion.model.js'; 

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
import * as NumberService from '../services/service.js';