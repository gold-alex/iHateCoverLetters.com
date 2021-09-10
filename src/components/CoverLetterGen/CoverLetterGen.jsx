import jsPDF from 'jspdf';
import react from 'react';

function CoverLetterGen(paragraphOne, paragraphTwo, company, title, date, firstname, lastname) {
    //Testing out variables
      var doc = new jsPDF({lineHeight: 1.5});
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(22);
      doc.text(`Alex Goldberg`, 105, 20, "center");

      doc.setFontSize(16);
      doc.text(`816 Acoma St. Unit 907 Denver, CO 80204`, 105, 30, "center");
      
      
      //retrieving current date
      doc.setFontSize(12);
      doc.text(date, 20, 40, "left")
      doc.text(company, 20, 48, "left")
      doc.text(title, 20, 56, "left")    
      
      //Dear ______
      doc.setFontSize(12);
      doc.text(`Dear ${company},`, 20, 66, "left" );

      //Body of text goes here
      //Paragraph One 
      let text = paragraphOne;
      let text2 = paragraphTwo;
      doc.text(text, 20, 76, {maxWidth: 170, align: "justify"}); //Line height we use to calculate ending line height

      let height  = text.length /13 ;

    //   Dynamically calculating height
    
      let endingLine = height + 85; // Calculating where we want to start our next paragraph

      //paragraph two
      doc.text(text2, 20, endingLine, {maxWidth: 170, align: "justify"}); //Line height we use to calculate ending line height

      //Dynamically calculating height of next line
      let allthebest = (text2.length/10) + endingLine; // Calculating where we want to start our next paragraph

      doc.text("All the best,", 20, allthebest, "left" );

      //Dynamically calculating height of next line
      let name = (allthebest + 8); // Calculating where we want to start our next paragraph
    
      doc.text(`${firstname} ${lastname}`, 20, name, "left" );

      doc.save(`${firstname}-${lastname}-${company}.pdf`)
    }   
    
      
export default CoverLetterGen;