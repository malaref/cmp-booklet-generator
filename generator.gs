/**
 *
 * DISCLAIMER
 *
 * This Google Apps Script code is open-source and free to use, distribute and modify.
 * It was written in a very ad-hoc fashion to do a very specific task.
 * It is not modular and it can use a lot of refactoring.
 * It consists of two very similar functions; one for the English document and another for the Arabic one.
 * Please use it at your own risk and take care when modifying it.
 *
 */

function generateEnglishDocument() {
  var base = DocumentApp.openById(DriveApp.getFileById("1UNaYMcJwFciL3aKI6cfW7U0wwwgGUVLZlZx7sVF8vRw").makeCopy("Boolet-En").getId());
  var templateTable = DocumentApp.openById("11kpPlTzkiko85MjC9pKbWTKj-vuAqoMaeaxZFIGmmzU").getBody().getTables()[0];
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var header = data[0];
  var characteristics = header.indexOf("Characteristics | طبيعة المشروع");
  var innovation = header.indexOf("Innovation | من زاوية الابتكار");
  
  for(var i = 1; i < data.length; i++) {
    var row = data[i];
    var table = templateTable.copy();
    table.replaceText("{Project Code}", ("0" + i).slice(-2));
    for(var j = 0; j < header.length; j++) {
      table.replaceText("{" + header[j] + "}", row[j]);
    }
    if(row[characteristics] === "Service | خدمة") table.findText("{Service}").getElement().asText().setUnderline(true);
    else if(row[characteristics] === "Product | منتج") table.findText("{Product}").getElement().asText().setUnderline(true);
    else throw new Error("Unknown characteristics!");
    if(row[innovation] === "New | جديد") table.findText("{New}").getElement().asText().setUnderline(true);
    else if(row[innovation] === "Improved | مطور") table.findText("{Improved}").getElement().asText().setUnderline(true);
    else if(row[innovation] === "Traditional | تقليدي") table.findText("{Traditional}").getElement().asText().setUnderline(true);
    else throw new Error("Unknown innovation!");
    table.replaceText("{Service}", "Service");
    table.replaceText("{Product}", "Product");
    table.replaceText("{New}", "New");
    table.replaceText("{Improved}", "Improved");
    table.replaceText("{Traditional}", "Traditional");
    base.appendPageBreak();
    base.appendTable(table);
  }
  base.saveAndClose();
}

function generateArabicDocument() {
  var base = DocumentApp.openById(DriveApp.getFileById("1j1rNRUn1sZ09VyU55ZrXzc7HQja73z5GrGtcCfZF0a4").makeCopy("Boolet-Ar").getId());
  var templateTable = DocumentApp.openById("1-qxwgdpa3s743wrYMrpN2HkUjd1zmZ-dH1reHVAVNV4").getBody().getTables()[0];
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var header = data[0];
  var characteristics = header.indexOf("Characteristics | طبيعة المشروع");
  var innovation = header.indexOf("Innovation | من زاوية الابتكار");
  
  for(var i = 1; i < data.length; i++) {
    var row = data[i];
    var table = templateTable.copy();
    table.replaceText("{كود المشروع}", ("0" + i).slice(-2));
    for(var j = 0; j < header.length; j++) {
      table.replaceText("{" + header[j] + "}", row[j]);
    }
    if(row[characteristics] === "Service | خدمة") table.findText("{خدمة}").getElement().asText().setUnderline(true);
    else if(row[characteristics] === "Product | منتج") table.findText("{منتج}").getElement().asText().setUnderline(true);
    else throw new Error("Unknown characteristics!");
    if(row[innovation] === "New | جديد") table.findText("{جديد}").getElement().asText().setUnderline(true);
    else if(row[innovation] === "Improved | مطور") table.findText("{مطور}").getElement().asText().setUnderline(true);
    else if(row[innovation] === "Traditional | تقليدي") table.findText("{تقليدي}").getElement().asText().setUnderline(true);
    else throw new Error("Unknown innovation!");
    table.replaceText("{خدمة}", "خدمة");
    table.replaceText("{منتج}", "منتج");
    table.replaceText("{جديد}", "جديد");
    table.replaceText("{مطور}", "مطور");
    table.replaceText("{تقليدي}", "تقليدي");
    base.appendPageBreak();
    base.appendTable(table);
  }
  base.saveAndClose();
}
