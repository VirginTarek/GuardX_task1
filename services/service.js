import Conversion from '../models/models.js'; 

export async function getnumbers() {
  return await Conversion.find().sort({ timestamp: -1 }); // ✅ ترتيب بالتاريخ
}

export async function getnumberById(id) {
  return await Conversion.findById(id);
  }

export async function addnumber(conversionData) {
  return await Conversion.create(conversionData);
}

export async function updatenumber(id, conversionData) {
  return await Conversion.findByIdAndUpdate(id, conversionData, { new: true });
}

export async function deletenumber(id) {
  return await Conversion.findByIdAndDelete(id); 
}