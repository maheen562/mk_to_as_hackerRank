import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  // standalone: true,
  // imports: [],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  summary =  `<b>Why Memory Management?</b>
  - Support Multiprogramming: Multiple processes are loaded into memory to improve CPU utilization.
  - Security: Ensures isolation between processes and OS memory.
  - Run More Processes: Allows a single process to use more memory than physically available, and the sum of all processes' memory requirements can exceed physical memory.
  
  Early Systems – No Memory Abstraction
  - Programs referenced physical memory directly, e.g., MOV REGISTER, 1000.
  - Achieved multiprogramming by swapping processes between memory and disk.
  
  Memory Abstraction
  - Abstracts process addresses from physical memory addresses.
  - Uses dynamic relocation with base and limit registers and paged virtual memory.
  
  Base and Limit Registers
  - Base Register: Starting physical address of the program.
  - Limit Register: Length of the program.
  - CPU checks the logical address against the limit register and translates it using the base register.
  
  Memory Management Unit (MMU)
  - Translates logical addresses to physical addresses.
  - Ensures addresses are within bounds.
  
  Allocating and Deallocating Memory
  - Uses linked lists to track memory usage.
  - Allocates contiguous memory using strategies like first-fit, best-fit, and worst-fit.
  - Deallocates memory by updating the data structure.
  
  Fragmentation
  - External Fragmentation: Occurs when total free memory is enough but not contiguous.
  - Internal Fragmentation: Wasted space within allocated memory blocks.
  
  Paging
  - Divides processes into fixed-sized pages and memory into frames.
  - Pages are mapped to frames, and not all pages need to be in memory simultaneously.
  - Uses page tables to manage mappings.
  
  Page Faults and Replacement
  - Occurs when a referenced page is not in memory.
  - Uses algorithms like FIFO, Second-Chance, and LRU to manage page replacements.
  
  Translation Lookaside Buffer (TLB)
  - A cache for recently accessed page table entries to speed up address translation.
  - On a context switch, TLB entries are invalidated, causing initial misses.
  `;
  
  questions = [{
    question: "Why is memory management important in computer systems?",
    answer: "It supports multiprogramming by ensuring multiple processes can run simultaneously, provides security through isolation, and allows systems to run more processes than the physical memory can hold."
  },
  {
    question: "How did early systems manage memory without abstraction?",
    answer: "Programs directly referenced physical memory. Multiprogramming was achieved by swapping processes between memory and disk."
  },
  {
    question: "What are base and limit registers, and how do they work?",
    answer: "Base registers store the starting physical address of a program, and limit registers store the length of the program. The CPU uses these registers to translate logical addresses to physical addresses, ensuring they are within bounds."
  },
  {
    question: "What role does the Memory Management Unit (MMU) play in address translation?",
    answer: "The MMU translates logical addresses to physical addresses at runtime and ensures addresses are within the bounds set by the base and limit registers."
  },
  {
    question: "Describe the different memory allocation strategies and their trade-offs.",
    answer: "First-fit: Allocates the first suitable block; fast but can lead to fragmentation.\nBest-fit: Allocates the smallest suitable block; minimizes waste but is slower and can create small, unusable blocks.\nWorst-fit: Allocates the largest block; leaves large holes but may not be efficient."
  },
  {
    question: "What is external fragmentation, and how does it differ from internal fragmentation?",
    answer: "External fragmentation occurs when total free memory is sufficient but scattered in non-contiguous blocks. Internal fragmentation occurs when allocated memory blocks have unused space within them."
  },
  {
    question: "Explain the concept of paging in memory management.",
    answer: "Paging divides a process's address space into fixed-sized pages and physical memory into frames. Pages are mapped to frames, and not all pages need to be in memory simultaneously, allowing efficient use of memory."
  },
  {
    question: "What is a page fault, and how does the system handle it?",
    answer: "A page fault occurs when a process references a page not in memory. The system handles it by fetching the page from disk, loading it into memory, updating the page table, and resuming the process."
  },
  {
    question: "Describe the FIFO page replacement algorithm and its limitations.",
    answer: "FIFO evicts the oldest page in memory first. It's simple but can evict frequently used pages, leading to inefficiencies."
  },
  {
    question: "How does the Translation Lookaside Buffer (TLB) improve memory access times?",
    answer: "The TLB caches recently accessed page table entries, allowing faster address translation by avoiding repeated page table lookups."
  },
  {
    question: "What happens to TLB entries during a context switch?",
    answer: "TLB entries are invalidated because they contain mappings valid only for the current process. The new process will initially experience TLB misses until its entries are populated."
  }]
  
  displayQuestions(){
    for(let i=0;i<this.questions.length;i++){
        let eachquestion = `<div class="q-wrapper>Q: <textarea> {{questions[i].question}} </textarea></div>`
    }
  }

  constructor(private router:Router){}
  
  upload_text = "Upload Content"
  uploadMessage = ""
  uploadcomplete = false;
  link_to_mainpage = ""

  CompleteUpload(){
    if(this.uploadcomplete == true){
      this.router.navigate(['teacherSubject'])
    }
    this.upload_text = "Back to Main Page"
    this.uploadMessage = "Upload Complete!"
    this.uploadcomplete = true;
  }

  }
