import express from 'express';
import { getnumbers, getnumberById, addnumber, updatenumber, deletenumber } from '../controllers/controllers.js';
const router = express.Router();

router.get('/', getnumbers);
router.get('/:id', getnumberById);
router.post('/', addnumber);
router.put('/:id', updatenumber);
router.delete('/:id', deletenumber);

export default router;