import * as Conversion from "../services/service.js";
import { romanToInt } from "../main_function/romantoint.js";

// ✅ Get all conversions
export async function getnumbers(req, res) {
  try {
    const allNumbers = await Conversion.getnumbers();
    res.status(200).json(allNumbers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// ✅ Get conversion by ID
export async function getnumberById(req, res) {
  try {
    const numid = await Conversion.getnumberById(req.params.id);
    if (!numid) {
      return res.status(404).json({ message: "Conversion not found" });
    }
    res.status(200).json(numid);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// ✅ Add new conversion (POST /convert)
export async function addnumber(req, res) {
  try {
    const { roman } = req.body;

    if (!roman || typeof roman !== "string") {
      return res.status(400).json({ message: "Invalid Roman numeral input" });
    }

    const integer = romanToInt(roman);

    const newConversion = await Conversion.addnumber({ roman, integer });

    res
      .status(201)
      .json({
        integer,
        message: "Conversion added",
        conversion: newConversion,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// ✅ Update existing conversion
export async function updatenumber(req, res) {
  try {
    const { roman } = req.body;

    if (!roman || typeof roman !== "string") {
      return res.status(400).json({ message: "Invalid Roman numeral input" });
    }

    const integer = romanToInt(roman);

    const updatedConversion = await Conversion.updatenumber(req.params.id, {
      roman,
      integer,
    });

    if (!updatedConversion) {
      return res.status(404).json({ message: "Conversion not found" });
    }

    res
      .status(200)
      .json({ message: "Conversion updated", conversion: updatedConversion });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// ✅ Delete conversion
export async function deletenumber(req, res) {
  try {
    const deletedConversion = await Conversion.deletenumber(req.params.id);
    if (!deletedConversion) {
      return res.status(404).json({ message: "Conversion not found" });
    }
    res.status(200).json({ message: "Conversion deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// ✅ Get conversion history (GET /conversion)
export async function getHistory(req, res) {
  try {
    const history = await Conversion.getnumbers(); // Assuming this returns all in reverse or we sort
    const mapped = history.map((item, index) => ({
      id: index + 1,
      roman: item.roman,
      integer: item.integer,
      timestamp: item.timestamp,
    }));

    res.status(200).json(mapped);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
