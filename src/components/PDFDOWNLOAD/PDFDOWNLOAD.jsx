import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function PDFDOWNLOAD(
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  company,
  title,
  firstname,
  lastname,
  address,
  phone,
  email
) {
  let paragraphOneReplaced = paragraphOne.replaceAll(`*COMPANY*`, company).replaceAll(`*TITLE*`, title);
  let paragraphTwoReplaced = paragraphTwo.replaceAll(`*COMPANY*`, company).replaceAll(`*TITLE*`, title);
  let paragraphThreeReplaced = paragraphThree.replaceAll(`*COMPANY*`, company).replaceAll(`*TITLE*`, title);

  let today = new Date();

  let date =
    today.toLocaleString("default", { month: "long" }) +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();

  var dd = {
    content: [
      {
        text: `${firstname} ${lastname}`,
        style: "header",
        alignment: "center",
      },
      {
        text: `${address} \n ${phone} • ${email}  `,
        lineHeight: 1.5,
        style: "lineofinfo",
        alignment: "center",
      },
      {
        image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACDQAAAAGAQMAAAAMx85LAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAANQTFRFAAAAp3o92gAAABVJREFUeJxjYBgFo2AUjIJRMAoIAwAGMAABi2lPXwAAAABJRU5ErkJggg==`,
        alignment: 'center',
        width: '475',
      },
      {
        text: [`${date} \n`, `${company} \n`, `${title} \n`],
        style: "leftalignedstuff",
      },
      {
        text: `Dear ${company},`,
        style: "prone",
        bold: false,
      },
      {
        text: `${paragraphOneReplaced}`,
        style: "prone",
        bold: false,
      },
      {
        text: `${paragraphTwoReplaced}`,
        style: "prtwo",
        bold: false,
      },
      {
        text: `${paragraphThreeReplaced}`,
        style: "prtwo",
        bold: false,
      },
      {
        text: "All the best,",
        style: "ending",
        bold: false,
      },
      {
        text: `${firstname} ${lastname}`,
        style: "signature",
      },
    ],

    styles: {
      header: {
        fontSize: 30,
        bold: true,
        alignment: "justify",
      },
      lineofinfo: {
        fontSize: 11,
        alignment: "justify",
        margin: [20, 8, 25, 0],
      },

      prone: {
        fontSize: 12,
        alignment: "justify",
        margin: [20, 20, 25, 0],
      },

      prtwo: {
        fontSize: 12,
        alignment: "justify",
        margin: [20, 20, 25, 0],
      },

      leftalignedstuff: {
        fontSize: 13,
        bold: true,
        alignment: "left",
        margin: [20, 20, 25, 0],
      },

      ending: {
        fontSize: 12,
        bold: false,
        alignment: "justify",
        margin: [20, 15, 25, 0],
      },

      signature: {
        fontSize: 12,
        bold: true,
        alignment: "justify",
        margin: [20, 12.5, 25, 0],
      },
    },
  };
  pdfMake.createPdf(dd).download(`${firstname} ${lastname} - ${company}.pdf`);
}

export default PDFDOWNLOAD;
