import * as Conversion from '../services/service.js';

export async function getnumbers(req, res) {
  try {
    const allNumbers = await Conversion.getnumbers();
    res.status(200).json(allNumbers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function getnumberById(req, res) {
  try {
    const Number = await Conversion.getnumberById(req.params.id);
    if (!Number) {
      return res.status(404).send({ message: 'Number not found' });
    }
    res.status(200).json(Number);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function addnumber(req, res) {
  try {
    const newNumber = await Conversion.addnumber(req.body);
    res.status(201).send({ message: 'Number added', Number: newNumber });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function updatenumber(req, res) {
  try {
    const updatedNumber = await Conversion.updatenumber(req.params.id, req.body);
    if (!updatedNumber) {
      return res.status(404).send({ message: 'Number not found' });
    }
    res.status(200).send({ message: 'Number updated', Number: updatedNumber });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function deletenumber(req, res) {
  try {
    const deletedNumber = await Conversion.deletenumber(req.params.id);
    if (!deletedNumber) {
      return res.status(404).send({ message: 'Number not found' });
    }
    res.status(200).send({ message: 'Number deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}