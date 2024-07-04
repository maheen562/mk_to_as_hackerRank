import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GPTService } from './gpt.service';

@Component({
  selector: 'app-gpt',
  // standalone: true,
  // imports: [],
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.css'
})
export class GptComponent {
  queryFormGroup!: FormGroup

  result : any
  constructor(private fb: FormBuilder,private gptService: GPTService){ }
  ngOnInit(){
    this.queryFormGroup = this.fb.group({
      query: this.fb.control("")
    })
  }

  getGPTAnswer(){
    this.gptService.handleAskGPT().subscribe((response:any) =>{
      this.result = response;
    },
    (error)=>{
      alert(error);
    }
  )

  }
  
  

}
