// // Import chatgpt-api module
// import { ChatGPT } from 'chatgpt-api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OPEN_AI_URL } from '../../constants/urls';
import OpenAI from "openai";

// // Create a new service class
@Injectable({
  providedIn: 'root'
})
export class GPTService {
    
    constructor(private http: HttpClient) { }
    handleAskGPT(){
        console.log("insdie handle")
        const apiKey = "Bearer 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";
        let url = "https://api.openai.com/v1/chat/completions"; 
        // let httpHeaders = new HttpHeaders().set('Content-Type': 'application/json',)
        let payload = {
            "model": "text-davinci-002",
            "prompt": "Once upon a time,"
        }
        return this.http.post(OPEN_AI_URL,payload,{headers: {
            'Authorization': apiKey, 'Content-Type': 'application/json'
          },})
    }

    
//   // Create a new instance of ChatGPT class with your API key
//   private chatgpt = new ChatGPT('sk-xxxxxxxxxxxxxxxx');

//   // Define a method to send a message and receive a response from ChatGPT
//   public async chat(message: string): Promise<string> {
//     try {
//       // Use chatgpt.query method with optional parameters
//       const response = await this.chatgpt.query(message, {temperature: 0.8, max_tokens: 32});
//       // Return the response text
//       return response.text;
//     } catch (error) {
//       // Handle any errors
//       console.error(error);
//       return 'Something went wrong.';
//     }
//   }
}