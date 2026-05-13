//coding by Emad Adel
//https://github.com/emadadeldev/

/**
 * دالة تحديث التاب الحالي
 */
function Update_Current_Sheet() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // الحصول على التاب الحالي
  const sh = ss.getActiveSheet();

  // الحصول على آخر صف يحتوي بيانات
  const lastRow = sh.getLastRow();

  // إذا لم توجد بيانات كافية يتم إيقاف التنفيذ
  if (lastRow < 2) return;

  // كود السطر الجديد المستخدم داخل النصوص
  const newline = "~n~";

  // أول صف يبدأ منه التحديث
  const startRow = 3;

  // رقم عمود الإخراج
  const outputCol = 7; 

  // عدد الدفعات المستخدمة لتقسيم المعالجة
  const numBatches = 3; 

  // حساب إجمالي عدد الصفوف
  const totalRows = lastRow - startRow + 1;

  // حساب حجم كل دفعة
  const batchSize = Math.ceil(totalRows / numBatches); 

  // المرور على البيانات دفعة دفعة
  for (let offset = 0; offset < totalRows; offset += batchSize) {

    // تحديد عدد الصفوف في الدفعة الحالية
    const numRows = Math.min(batchSize, totalRows - offset);

    // جلب بيانات العمود A
    const A_vals = sh.getRange(startRow + offset, 1, numRows, 1).getValues();

    // جلب بيانات العمود B
    const B_vals = sh.getRange(startRow + offset, 2, numRows, 1).getValues();

    // جلب بيانات العمود D
    const D_vals = sh.getRange(startRow + offset, 4, numRows, 1).getValues();

    // جلب بيانات العمود F
    const F_vals = sh.getRange(startRow + offset, 6, numRows, 1).getValues();

    // جلب بيانات عمود الإخراج
    const OUT_vals = sh.getRange(startRow + offset, outputCol, numRows, 1).getValues();

    // مصفوفة لتخزين النتائج النهائية
    const finalArray = [];

    // المرور على جميع الصفوف
    for (let i = 0; i < numRows; i++) {

      // إذا كانت الخانة تحتوي على قيمة مسبقًا يتم تخطيها
      if (OUT_vals[i][0] !== "") {

        finalArray.push([OUT_vals[i][0]]);
        continue;
      }

      // إذا كانت الخانة فارغة يتم إضافة قيمة فارغة
      if (!D_vals[i][0]) {

        finalArray.push([""]);
        continue;
      }

      try {

        // تحويل النص إلى تنسيق المحرك
        const result = (B_vals[i][0] || "") + ConvertToEngineText(
          D_vals[i][0],
          true,
          F_vals[i][0],
          newline
        );

        // إضافة النتيجة إلى المصفوفة
        finalArray.push([result]);

      } catch (e) {

        // في حالة حدوث خطأ يتم إضافة قيمة فارغة
        finalArray.push([""]);
      }
    }

    // كتابة النتائج داخل العمود المحدد
    sh.getRange(startRow + offset, outputCol, numRows, 1).setValues(finalArray);
  }

  // إظهار رسالة عند انتهاء التنفيذ
  ss.toast("✅ تم الانتهاء من تحديث التاب الحالي", "اكتمل التنفيذ", 4);
}