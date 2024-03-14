import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  radioTitle: string;
  selectedOption: string;
  radioItems: Array<string>;
  model   = {option: 'option3'};
  options = ['Option1', 'Option2', 'Option3'];
  

  constructor() { 
    this.radioTitle = 'Radio Button in Angular';
    this.radioItems = ['option1', 'option2', 'option3'];
    this.selectedOption ='hi';
  }
  getSelectedIndex(): number {
    return this.options.indexOf(this.selectedOption);
  }

  ngOnInit(): void {
  }
  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
}
