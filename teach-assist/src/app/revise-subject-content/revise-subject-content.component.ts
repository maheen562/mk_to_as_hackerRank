import { Component } from '@angular/core';
import {summary,questions,feedback} from "../../constants/dummy_data"

@Component({
  selector: 'app-revise-subject-content',
  // standalone: true,
  // imports: [],
  templateUrl: './revise-subject-content.component.html',
  styleUrl: './revise-subject-content.component.css'
})
export class ReviseSubjectContentComponent {
  Summary = summary;
  question = questions[3]
  feedback = feedback

  display_feedback = false;

  DisplayFeedback(){
    this.display_feedback=true;
  }

}
