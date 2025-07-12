// جدول القيم الرومانية
const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(roman) {
  if (typeof roman !== 'string') {
    throw new Error('Roman numeral must be a string');
  }

  let total = 0;
  let prevValue = 0;

  // نبدأ من آخر حرف ونتحرك للخلف
  for (let i = roman.length - 1; i >= 0; i--) {
    const currentChar = roman[i].toUpperCase();
    const currentValue = romanMap[currentChar];

    if (!currentValue) {
      throw new Error(`Invalid Roman numeral character: ${currentChar}`);
    }

    if (currentValue < prevValue) {
      total -= currentValue; // نطرح لو القيمة أقل من اللي بعدها
    } else {
      total += currentValue;
    }

    prevValue = currentValue;
   }

  return total;
 }