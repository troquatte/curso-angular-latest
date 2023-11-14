import { Component, inject } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUpperCase && hasNumber) {
      return null;
    }

    return { textValidator: true };
  };
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    name: ['', [Validators.required, textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['NodeJs'],
    }),
    myFavoriteFoods: this.#fb.array([['X-tudo']]),
  });

  public update() {
    this.profileForm.patchValue({
      name: 'Maria',
      myStacks: {
        front: 'Vue',
        back: 'NestJs',
      },
    });
  }

  public addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get(
      'myFavoriteFoods'
    ) as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }

  public submit() {
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
