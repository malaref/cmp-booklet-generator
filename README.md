# CMP Booklet Generator

This repository contains *unofficial* code snippets and instructions to help class representatives generate the graduation projects booklet. I wrote them to help me create the required booklet for my class and I am publishing them with the hope they may help future representatives.  
At first, I intended to generate the whole thing with one click. However, as it turned out, manual editing is almost inevitable, or at the very least, it would take much more time to handle some cases in the code. Therefore, the goal of the scripts here is to automate most of the redundant *copy & paste* work.  
Currently, most is the booklet construction is automated. However, the table of contents, sponsors page and contact information pages are not. Most of which can easily be copied from the resulting form responses spreadsheet (see below) with some formatting. If you are interested in automating those, you can contact me, make a pull request, or fork the repository altogether; it is 100% up to you!

### Usage
* Copy [this form](https://docs.google.com/forms/d/1aC5SPCsrP5P-P4o5-sy8DIs6S-rKXWQm2r4kBXVWaTE/copy) and give it to the class to fill it.
  - If prompted to "restore the folder containing responses to File Upload questions", click RESTORE.
  - You may want to remove "Copy of " from the title :D
* Create a spreadsheet with the responses.
* Open the script editor of the sheet (Tools > Script editor)
* Add the code in *generator.gs* to the editor.
* Choose each function and run it; *generateEnglishDocument* and *generateArabicDocument*.
  - Review and grant the needed permissions to the code as needed.
* Two documents named **Booklet-En** and **Booklet-Ar** will appear in your drive.
* Do any manual edits needed, then download both files as PDF.
* Put the two PDF files in the same directory as *generator.bash* and run it.
* Two final files will be produced:
  - **CMP-Booklet.pdf** is a screen-friendly version to be shared on the internet. *(soft-copy)*
  - **CMP-Booklet-printable.pdf** is a printer-friendly to be printed as a booklet. *(hard-copy)*

#### I hope this helps you in any way and I wish you the best of luck with your projects!

**Muhammad Hamdy AlAref**  
*CMP-2019 Senior Year Class Representative,  
Department of Computer Engineering,  
Faculty of Engineering,  
Cairo University.*
