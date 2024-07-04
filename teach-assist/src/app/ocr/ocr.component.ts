// https://github.com/jzgoda/ng-pdfjs/blob/master/src/app/app.component.ts

import { Component } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/pdf.worker.min.mjs';


@Component({
  selector: 'ocr-extractor',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OCRComponent {
  password: string = '';
  alltext: string = '';
  pages: number[] = [];
  currentPageText: string = '';
  downloadLink: string = '';

  // constructor() {
  //   // Set the workerSrc to point to the custom worker file
  //   pdfjsLib.GlobalWorkerOptions.workerSrc = './assets/pdf.worker.js';
  // }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.extractText(input.files[0]);
    } else {
      alert("Select a valid PDF file");
    }
  }

  reload(): void {
    window.location.reload();
  }

  uploadPdf(): void {
    const fileInput = document.querySelector('.selectpdf') as HTMLInputElement;
    fileInput.click();
  }

  async extractText(file: File): Promise<void> {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      console.log("hello")
      fileReader.onload = async () => {
        const url = fileReader.result as string;
        let pdf;
        pdf = await pdfjsLib.getDocument(url).promise
        console.log(pdf)
        // if (this.password) {
        //   pdf = await pdfjsLib.getDocument({ url, password: this.password }).promise;
        // } else {
        //   pdf = await pdfjsLib.getDocument(url).promise;
        // }
        const pages = pdf.numPages;
        for (let i = 1; i <= pages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          console.log(textContent)
          const text = textContent.items.map((s: any) => s.str).join(' ');
          this.alltext+=text;
        }
        // this.pages = Array.from({ length: pages }, (_, i) => i + 1);
        // this.currentPageText = this.alltext[0];
        // this.updateDownloadLink();
      };
    } catch (err) {
      alert("something unexpected happened");
    }
  }

  onPageChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const pageIndex = parseInt(select.value, 10) - 1;
    this.currentPageText = this.alltext[pageIndex];
    this.updateDownloadLink();
  }

  updateDownloadLink(): void {
    this.downloadLink = `data:text/plain;charset=utf-8,${encodeURIComponent(this.currentPageText)}`;
  }
}
