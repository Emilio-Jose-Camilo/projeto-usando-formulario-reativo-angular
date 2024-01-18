import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formStatus: string = '';
  formdata: any = {};

  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      lastName: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, Validators.required, CustomValidators.checkUserName),
      dob: new FormControl(null, Validators.required),
      gender: new FormControl('male', Validators.required),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('india', Validators.required),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null, Validators.required),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
      experience: new FormArray([

      ])
    });
  
    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formStatus = status;
    })
  }

  onFormSubmitted() {
    console.log(this.reactiveForm.value);
    this.formdata = this.reactiveForm.value;
    this.reactiveForm.reset({
      firstname: null,
      lastname: null,
      email: null,
      username: null,
      dob: null,
      gender: 'male',
      address:{
        street: null,
        country: 'India',
        city: null,
        region: null,
        postal: null
      },
      skills: [
        null
      ],
      experience: [
        
      ]
    });
  }

  /*Add field  */
  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  /**Removing field */
  deleteSkills(index: number) {
    const controls = (<FormArray>this.reactiveForm.get('skills'));
    controls.removeAt(index)
  }

  AddExperience() {
    const formGroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),

    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }

  DeleteExperience(index: number) {
    const formArray = (<FormArray>this.reactiveForm.get('experience'));
    formArray.removeAt(index);
  }

  //method to generate username
  generateUsername() {
    let username = '';
    const fName: string = this.reactiveForm.get('firstName').value;
    const lName: string = this.reactiveForm.get('lastName').value;
    const dob: string = this.reactiveForm.get('dob').value;

    if(fName.length >= 3){
      username += fName.slice(0, 3);
    }
    else {
      username += fName;
    }

    if(lName.length >= 3){
      username += lName.slice(0, 3);
    }
    else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

    this.reactiveForm.patchValue({
      username: username,
      address: {
        city: 'New Delhi'
      }
    })
}

}

