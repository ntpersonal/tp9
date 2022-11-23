import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ngOnInit(): void {
    this.productForm = this.fb.nonNullable.group({
      id:[0],
      libelle:[''],
      couleurs: this.fb.array([])
    })
    this.productForm = this.fb.nonNullable.group({
      id:[0, Validators.required],
      libelle:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]]
      })
      
  }

}
