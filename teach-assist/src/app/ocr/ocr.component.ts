import { Component } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.min.js';
@Component({
  selector: 'app-ocr',
  // standalone: true,
  // imports: [],
  templateUrl: './ocr.component.html',
  styleUrl: './ocr.component.css'
})
export class OCRComponent {

pdfinput:any;
upload: any;
afterupload: any;
select: any;
download: any;
pdftext: any;
test:string=""
 constructor() {
//   // Initialize properties (adjust selectors as per your HTML structure)
  this.pdfinput = document.querySelector(".selectpdf") as HTMLInputElement ;
  this.upload = document.querySelector(".upload") as HTMLInputElement ;
  this.afterupload = document.querySelector(".afterupload") as HTMLInputElement ;
  this.select = document.querySelector(".select") as HTMLInputElement ;
  this.download = document.querySelector(".download") as HTMLInputElement ;
  this.pdftext = document.querySelector(".pdftext") as HTMLInputElement ;
  let api="";

  if (this.upload && this.pdfinput) {
    this.upload.addEventListener('click',async () => {
      console.log("hello")
      this.test="hello"
      // let fileupload = this.pdfinput?.files?.[0];

      // if (fileupload && fileupload.type === "application/pdf") {
      //   let fr = new FileReader();
      //   fr.readAsDataURL(fileupload);
      //   fr.onload = () => {
      //     let res = fr.result as string;
      //     this.extractText(res,false)
      //     // let b64 = res.split("base64,")[1]
      //     // fetch(api,{
              
      //     //   method:"POST",
      //     //   body: JSON.stringify({
      //     //     img: b64,
      //     //     type: fileupload.files[0].type,
      //     //     name: fileupload.files[0].name
      //     //   }) 
          
            
      //     // })
      //     // .then(res=>res.text())
      //     // .then(data=> {
      //     //   text.innerHTML
      //     // })
      //   }
      // }else {
      //     alert("Please select a valid PDF file.");
      //   }
    })
  }
 }

// Example of an async function (assuming you want to extract text from PDF)
  alltext = []
  async extractText(url: any, pass: any) {
    let pdf;

    pdf = await pdfjsLib.getDocument(url).promise
    // const pdfData = this.base64ToUint8Array(url); // Convert data URL to Uint8Array
    // const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    // const pdf = await loadingTask.promise;
    console.log(pdf)
    // Implement your PDF text extraction logic here
    let pages = pdf.numPages;
    for(let i=1;i<=pages;i++){
      let page= await pdf.getPage(i);
      let txt = await page.getTextContent();
      // console.log(txt)
      // let text = txt.items.map((s)=>s.str).join("");
      // this.alltext.push(text)

    }
  }

  // base64ToUint8Array(base64: string): Uint8Array {
  //   const raw = atob(base64.split(',')[1]);
  //   const uint8Array = new Uint8Array(raw.length);
  //   for (let i = 0; i < raw.length; i++) {
  //     uint8Array[i] = raw.charCodeAt(i);
  //   }
  //   return uint8Array;
  // }
}
