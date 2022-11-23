import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  productForm!:FormGroup;
  constructor(private fb:FormBuilder) { }
  public get idProduct()
  { return this.productForm.get('id'); }
  isValidPattern(){
    return this.productForm.controls['libelle'].errors?.['pattern'] &&
    this.productForm.controls['libelle'].dirty;
    }
    public get libelle(){
      return this.productForm.get('libelle');
    }
    public get lesCouleurs(){
      return this.productForm.get('couleurs') as FormArray;
      }
      onAjouter(){
        this.lesCouleurs.push(this.fb.control('',Validators.required));
        // Autre possbilité
         // this.lesCouleurs.push(new FormControl(''));
        }
        onVider(){
          this.lesCouleurs.clear();
          this.productForm.reset();
        } 
        onAffiche(){
          console.log(this.productForm.value);
        }
  ngOnInit(): void {
    this.productForm = this.fb.nonNullable.group({
      id:[0, Validators.required],
      libelle:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      couleurs: this.fb.array([])
    })  
  }

}
