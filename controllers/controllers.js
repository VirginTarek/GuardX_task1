import * as productService from '../services/service.js';

export async function getnumbers(req, res) {
  try {
    const allProducts = await productService.getnumbers();
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function getnumberById(req, res) {
  try {
    const product = await productService.getnumberById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function addnumber(req, res) {
  try {
    const newProduct = await productService.addnumber(req.body);
    res.status(201).send({ message: 'Product created', product: newProduct });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function updatenumber(req, res) {
  try {
    const updatedProduct = await productService.updatenumber(req.params.id, req.body);
    if (!updatedProduct) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function deletenumber(req, res) {
  try {
    const deletedProduct = await productService.deletenumber(req.params.id);
    if (!deletedProduct) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.status(200).send({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}