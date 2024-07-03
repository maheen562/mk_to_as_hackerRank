import { Injectable } from '@angular/core';
import { PDFExtract, PDFExtractOptions } from 'pdf.js-extract';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer'; // Import Buffer

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  constructor() {}

  extractTextFromPdf(file: File): Observable<any> {
    return new Observable(observer => {
      const reader = new FileReader();
      reader.onload = async () => {
        const pdfData = new Uint8Array(reader.result as ArrayBuffer);
        const buffer = Buffer.from(pdfData); // Convert Uint8Array to Buffer
        const pdfExtract = new PDFExtract();
        const options: PDFExtractOptions = {};

        pdfExtract.extractBuffer(buffer, options)
          .then(data => {
            observer.next(data);
            observer.complete();
          })
          .catch(err => {
            observer.error(err);
          });
      };

      reader.onerror = (error) => {
        observer.error(error);
      };

      reader.readAsArrayBuffer(file);
    });
  }
}
