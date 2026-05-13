//Coding by Emad Adel
//https://github.com/emadadeldev/

// دالة لتحديد الأكواد التي يجب تجاهلها أثناء الفحص
// اضف الاكواد الخاصة باللعبة
function skipMatch(match) {
  switch (match) {
    case "~rp~": 
    case "~n~":
    case "~m~":
      return true;
    default:
      return false;
  }
}

// دالة لفحص توافق الأكواد الخاصة بين النص الإنجليزي والعربي
function FixedLineCode(text_en, text_ar) {

  // ريجكس لاستخراج الأكواد بين ~ ~
  const regex = /~(.*?)~/g;

  // التحقق من أن النصوص ليست فارغة
  if (text_en == null || text_ar == null) {
    return [];
  }

  let match;

  // إعادة تعيين مؤشر الريجكس
  regex.lastIndex = 0;

  // المرور على أكواد النص الإنجليزي
  while ((match = regex.exec(text_en)) !== null) {

    // تجاهل الأكواد المحددة
    if (skipMatch(match[0])) {
      continue;
    }

    // إذا لم يوجد الكود داخل النص العربي يرجع true
    if (!text_ar.includes(match[0])) {
      return true;
    }
  }

  return false;
}

// دالة لإصلاح وترتيب الأكواد الخاصة داخل النص العربي
function FixedLineCodes(text_en, text_ar) {

  // ريجكس لاستخراج الأكواد بين ~ ~
  const regex = /~(.*?)~/g;

  // التحقق من أن النصوص ليست فارغة
  if (text_en == null || text_ar == null) {
    return [];
  }

  // تحويل القيم إلى نصوص
  text_en=text_en+"";
  text_ar=text_ar+"";

  let match;

  // عداد أكواد النص العربي
  var arcount = 0;

  while ((match = regex.exec(text_ar)) !== null) {
    if (skipMatch(match[0])) {
      continue;
    }

    arcount++;
  }

  // إعادة تعيين المؤشر
  regex.lastIndex = 0;

  // عداد أكواد النص الإنجليزي
  var encount = 0;

  // المرور على أكواد النص الإنجليزي
  while ((match = regex.exec(text_en)) !== null) {

    // تجاهل الأكواد المحددة
    if (skipMatch(match[0])) 
    {
      continue;
    }

    encount++;
  }

  // إعادة تعيين المؤشر
  regex.lastIndex = 0;

  // إذا كان عدد الأكواد متساوي يتم الاستبدال
  if (arcount === encount) {

      // استبدال أكواد النص العربي بأكواد النص الإنجليزي
      text_ar = text_ar.replace(/~(.*?)~/g, function (item) {

        while ((match = regex.exec(text_en)) !== null) {

          // إرجاع الكود المقابل من النص الإنجليزي
          return match[0];
        }

        return item;

      });
  }

  return text_ar;
}

// دالة لفحص مجموعة أسطر
function FixedLines(input) {

  const lines = [];

  for (let i = 0; i < input.length; i++) {

    lines.push(FixedLineCode(input[i][0], input[i][1]));
  }

  return lines;
}

// دالة لإصلاح مجموعة أسطر
function FixedLines1(input) {

  const lines = [];

  for (let i = 0; i < input.length; i++) {

    lines.push(FixedLineCodes(input[i][0], input[i][1]));
  }

  return lines;
}

// دالة لعكس أكواد الألوان داخل النص
function swapColors(text) {

  // استخراج أكواد الألوان
  const reversedCodes = text.match(/~[oedi]~.*?~s~/g);

  if (reversedCodes) {

    reversedCodes.forEach((code) => {

      // عكس ترتيب الكود مع النص
      const reversed = code.replace(/~([oedi])~(.*?)~s~/, "~s~$2~$1~");

      text = text.replace(code, reversed);
    });
  }

  return text;
}

// تحويل جدول إلى مصفوفة نصوص
function ConvertTable(input) {

  const lines = [];

  for (let i = 0; i < input.length; i++) {

    const line = input[i][0];

    lines.push(line);
  }

  return lines;
}

// دالة رئيسية لتحويل النصوص إلى تنسيق المحرك
function ConvertToEngineText(input, SplitLine = false, SplitNum = 0, BreakLine = "") {

  // تعطيل التقسيم إذا كانت القيمة غير صحيحة
  if (typeof SplitNum !== 'number' || SplitNum === 0) {
    SplitLine = false;
  }

  // إذا كان الإدخال مصفوفة يتم تحويل كل عنصر
  return Array.isArray(input) ?
    input.map(row => row.map(cell => ConvertText(cell, SplitLine, SplitNum, BreakLine))) :
    ConvertText(input, SplitLine, SplitNum, BreakLine);
}

// تقسيم النص بناءً على ريجكس مع الاحتفاظ بالفواصل
function Textsplit(text, regex) {

  var token, index, result = [];

  while (text !== '') {

    regex.lastIndex = 0;

    token = regex.exec(text);

    if (token === null) {
      break;
    }

    index = token.index;

    // منع الحلقات اللانهائية
    if (token[0].length === 0) {
      index = 1;
    }

    result.push(text.substr(0, index));
    result.push(token[0]);

    index = index + token[0].length;

    text = text.slice(index);
  }

  result.push(text);

  return result;
}

// دالة تحويل النص الكامل
function ConvertText(Text, SplitLine = false, SplitNum = 0, BreakLine = "") {

  // ريجكس لاكتشاف الأحرف العربية
  var arabicRegex = /[ٮ-ۯ؀-ٟﭐ-ﻼ]+/gm;

  // إذا لم يوجد عربي يرجع النص كما هو
  if (!arabicRegex.test(Text)) {
    return Text;
  }

  // الحصول على اسم الشيت الحالي
  var sheetName = SpreadsheetApp.getActiveRange().getSheet().getName().trim();

  // الشيتات المسموح فيها بمعالجة الألوان اكتب اسم التاب
  var validSheets = [
    "Chapter 1","Chapter 2", //مثال
  ];

  // معالجة النصوص بين الأقواس والاقتباسات
  if (validSheets.includes(sheetName)) {

    Text = Text.replace(/\((.*?)\)/g, "~s~($1)~x~");
    Text = Text.replace(/"(.*?)"/g, '~s~"$1"~y~');
  }

  // عكس الألوان واستبدال ~rp~ بمسافة
  var ll = swapColors(Text + "").replace(/~rp~/gm, " ");

  // تقسيم النص حسب أكواد الأسطر
  Lines = Textsplit(ll, /\~lr:.*?\~|\~sl:.*?\~|\~n\~/gm);

  for (i = 0; i < Lines.length; i++)
  {

    // استخراج الأكواد الموجودة ببداية السطر
    const reversedCodes = Lines[i].match(/^(~.*?~)(\s*)(.*)/g);

    if (reversedCodes) {

      reversedCodes.forEach((code) => {

        // استثناء النصوص بين الأقواس والاقتباسات
        if (!code.startsWith("~s~(") && !code.startsWith('~s~"')) {

          // عكس ترتيب الكود مع النص
          const reversed = code.replace(
            /^(~.*?~)(\s*)(.*)/,
            "$3$2$1"
          );

          Lines[i] = Lines[i].replace(code, reversed);
        }
      });
    }

    // تحويل السطر
    Lines[i] = ConvertText1(Lines[i], SplitLine, SplitNum, BreakLine)
  }

  return Lines.join('').trim("\n").trim("\r");
}

// دالة تحويل النص العربي
function ConvertText1(text, SplitLine = false, SplitNum = 0, BreakLine = "") {

  Codes = [];

  var text = text + "";

  // التحقق من أن النص ليس فارغ
  if (text == "") { return; }

  // إذا لم يوجد نص عربي يرجع كما هو
  if (!text.match(/[ٮ-ۯ؀-ٟﭐ-ﻼ]/gm)) { return text; }

  // إذا كان التقسيم مفعل
  if (SplitLine) {

    // تقسيم النص
    text = SplitText(text, BreakLine, SplitNum)

    // تحويل النص العربي
    text = convertArabic(text + "");

  } else {

    // تحويل النص العربي مباشرة
    text = convertArabic(text + "");
  }

  // تقسيم النص حسب الأسطر
  SplitString = text.split(/\r?\n/);

  for (f = 0; f < SplitString.length; f++) {

    // عكس ترتيب الكلمات
    SplitString[f] = wordsReverser(SplitString[f]);
  }

  text = SplitString.join("\n");

  return text;
}

// دالة تقسيم النص حسب طول محدد
function SplitText(input, breakc, len) {

  var text = input + "";

  var breaklinecodeInput = breakc + "";

  var limit = len;

  // استبدال كود السطر الجديد
  if (breaklinecodeInput == "$newline") {
    breaklinecodeInput = "\r\n";
  }

  var lines = [];

  var current = "";

  // إضافة سطر جديد بعد التنظيف
  function addLine(line) {
    lines.push(line.trim());
  }

  var i = 0;

  while (i < text.length) {

    var ch = text[i];

    // دالة لسحب النص حتى رمز النهاية
    function grabUntil(endChar) {

      var end = text.indexOf(endChar, i + 1);

      if (end !== -1) {

        current += text.substring(i, end + 1);

        i = end;

        return true;
      }

      return false;
    }

    // تجاهل النصوص بين الأقواس والمربعات والاقتباسات
    if (ch == "[" && grabUntil("]")) { i++; continue; }
    if (ch == '"' && grabUntil('"')) { i++; continue; }
    if (ch == "(" && grabUntil(")")) { i++; continue; }

    // معالجة الأكواد الخاصة
    if (ch == "~") {

      if (text[i + 1] == "~") {

        var end = text.indexOf("~~", i + 2);

        if (end !== -1) {

          current += text.substring(i, end + 2);

          i = end + 2;

          continue;
        }

      } else {

        var end = text.indexOf("~", i + 1);

        if (end !== -1) {

          current += text.substring(i, end + 1);

          i = end;

          continue;
        }
      }
    }

    current += ch;

    // إذا وصل الحد الأقصى للطول
    if (current.length >= limit) {

      var mid = Math.floor(current.length / 2);

      var left = current.lastIndexOf(" ", mid);

      var right = current.indexOf(" ", mid);

      var splitPos;

      // تحديد أفضل نقطة للتقسيم
      if (left === -1 && right === -1) {

        splitPos = mid;

      } else if (left === -1) {

        splitPos = right;

      } else if (right === -1) {

        splitPos = left;

      } else {

        splitPos = (mid - left <= right - mid) ? left : right;
      }

      // إضافة السطر وتقسيم الباقي
      addLine(current.substring(0, splitPos));

      current = current.substring(splitPos + 1);
    }

    i++;
  }

  // إضافة آخر سطر
  if (current.length > 0) {
    addLine(current);
  }

  return lines.join(breaklinecodeInput);
}

//تجربة سريعة في الخانة
//=CONCAT(CONCAT(CONCAT(E3,"="),B3) ,ConvertToEngineText(D3,true,F3,"~n~"))