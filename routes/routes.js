import express from 'express';
import {
  getnumbers,
  getnumberById,
  addnumber,
  updatenumber,
  deletenumber,
  getHistory, // ✅ أضفنا دالة جديدة لجلب كل التحويلات
} from '../controllers/controllers.js';

 const router = express.Router();

// ✅ GET /conversion → لعرض كل التحويلات (تاريخ التحويلات)
router.get('/conversion', getHistory);

// ✅ POST /convert → لتحويل وحفظ الرقم الروماني
router.post('/convert', addnumber);

// ✅ باقي CRUD routes
router.get('/', getnumbers);
router.get('/:id', getnumberById);
router.put('/:id', updatenumber);
router.delete('/:id', deletenumber);

export default router;