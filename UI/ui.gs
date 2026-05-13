//Coding by Emad Adel
//https://github.com/emadadeldev/

function onOpen() {
  const ui = SpreadsheetApp.getUi();

  const mainMenu = ui.createMenu('👩‍💻 Emad Adel Tools');

  const updateSubMenu = ui.createMenu('🛠️ تحديث')
    .addItem('🔁 Update All G in [ Current Tab ]', 'Update_Current_Sheet');

  mainMenu
    .addSubMenu(updateSubMenu)
    .addSeparator()
    .addItem('MIT License - Emad Adel', 'donothing')
    .addToUi();
}