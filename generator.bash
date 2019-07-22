#!/bin/bash

# Softcopy
pdftk E=Booklet-En.pdf A=Booklet-Ar.pdf shuffle E A output CMP-Booklet.pdf
pdfnup CMP-Booklet.pdf
rm CMP-Booklet.pdf
mv CMP-Booklet-nup.pdf CMP-Booklet.pdf

# Hardcopy
echo "" | ps2pdf -sPAPERSIZE=a4 - blank.pdf
pdftk E=Booklet-En.pdf A=Booklet-Ar.pdf B=blank.pdf cat E1 B E2-end Aend-2 B A1 output CMP-Booklet-printable.pdf
rm blank.pdf
