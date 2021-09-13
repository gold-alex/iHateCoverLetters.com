
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function PDFDOWNLOAD (paragraphOne, paragraphTwo, company, title, firstname, lastname, address, phone, email) {


    let paragraphOneReplaced = paragraphOne.replaceAll("*COMPANY*", company).replaceAll("*POSITION*", title);
    let paragraphTwoReplaced = paragraphTwo.replaceAll("*COMPANY*", company).replaceAll("*POSITION*", title);
  
    // let paragraphOneReplaced = paragraphOne.replace("*COMPANY*", company).replace("*POSITION*", title)
    // let paragraphTwoReplaced = paragraphTwo.replace("*COMPANY*", company).replace("*POSITION*", title)
  
  let today = new Date()
  let date =   (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() ;
  var dd = {
    content: [
      {
        text: `${firstname} ${lastname}`,
        style: 'header',
        alignment: 'center'
      },
      {
        text: `${address} \n ${phone} • ${email}  `,
        lineHeight: 1.5,
        style: 'lineofinfo',
        alignment: 'center'
      },
      {
        table : {
            headerRows : 1,
            widths: ["98.5%"],
            body : [
                    [''],
                    ['']
                    ]
        },
        layout : 'headerLineOnly',
      },
      { 
        text: [`${date} \n`, `${company} \n`, `${title} \n`],
        style: 'leftalignedstuff'
      },
      {
        text: `Dear ${company},`,
        style: 'prone',
        bold: false
      },
      {
        text: `${paragraphOneReplaced}`,
        style: 'prone',
        bold: false
      },
      {
        text: `${paragraphTwoReplaced}`,
        style: 'prtwo',
        bold: false
      },
      {
        text: 'All the best,',
        style: 'ending',
        bold: false
      },
      {
        text: `${firstname} ${lastname}`,
        style: 'signature',
      }
    ],
  
    styles: {
      header: {
        fontSize: 30,
        bold: true,
        alignment: 'justify',
      },
      lineofinfo: {
        fontSize: 11,
        alignment: 'justify',
        margin: [ 20, 8, 25, 0 ] 
      },

      prone: {
        fontSize: 12,
        alignment: 'justify',
        margin: [ 20, 20, 25, 0 ] 
      },
      
      prtwo: {
        fontSize: 12,
        alignment: 'justify',
        margin: [ 20, 20, 25, 0 ] 
      },
    
      leftalignedstuff: {
        fontSize: 13,
        bold: true,
        alignment: 'left',
        margin: [ 20, 20, 25, 0 ] 
      },
      
      ending: {
        fontSize: 12,
        bold: false,
        alignment: 'justify',
        margin: [ 20, 25, 25, 0 ] 
      },
      
      signature: {
        fontSize: 12,
        bold: true,
        alignment: 'justify',
        margin: [ 20, 12.5, 25, 0 ] 
      }
  }
}



  pdfMake.createPdf(dd).download(`${firstname} ${lastname} - ${company}.pdf`);



}

export default PDFDOWNLOAD;