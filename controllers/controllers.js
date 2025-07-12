import * as Conversion from '../services/service.js';
import { romanToInt } from '../main_function/romantoint.js';

// Get all conversions
export async function getnumbers(req, res) {
  try {
    const allNumbers = await Conversion.getnumbers();
    res.status(200).json(allNumbers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

// Get conversion by ID
export async function getnumberById(req, res) {
  try {
    const numid = await Conversion.getnumberById(req.params.id);
    if (!numid) {
      return res.status(404).send({ message: 'Conversion not found' });
    }
    res.status(200).json(numid);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

// Add new conversion
export async function addnumber(req, res) {
  try {
    const { roman } = req.body;

    if (!roman || typeof roman !== 'string') {
      return res.status(400).send({ message: 'Invalid Roman numeral input' });
    }

    const integer = romanToInt(roman);

    const newConversion = await Conversion.addnumber({ roman, integer });

    res.status(201).send({ message: 'Conversion added', conversion: newConversion });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

// Update existing conversion
export async function updatenumber(req, res) {
  try {
    const { roman } = req.body;

    if (!roman || typeof roman !== 'string') {
      return res.status(400).send({ message: 'Invalid Roman numeral input' });
    }

    const integer = romanToInt(roman);

    const updatedConversion = await Conversion.updatenumber(req.params.id, { roman, integer });

    if (!updatedConversion) {
      return res.status(404).send({ message: 'Conversion not found' });
    }

    res.status(200).send({ message: 'Conversion updated', conversion: updatedConversion });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

// Delete conversion
export async function deletenumber(req, res) {
  try {
    const deletedConversion = await Conversion.deletenumber(req.params.id);
    if (!deletedConversion) {
      return res.status(404).send({ message: 'Conversion not found' });
    }
    res.status(200).send({ message: 'Conversion deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
