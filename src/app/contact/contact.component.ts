import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{

  formularioContacto: FormGroup
  tipoDni: string = ''
  mostrarDni: boolean = false

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: [''],
      tipoDni: [''],
      email: ['', [Validators.email, Validators.required]]
      
    })
  }
  ngOnInit(): void {
    console.log('componente cargado');
    
    this.formularioContacto.get('nombre')?.setValue('Alex')
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(valor => {
      this.mostrarDni = valor != ''
      
      this.tipoDni = valor})
  }

  ngOnDestroy(): void {
      console.log('Se ha destruido el componente');
      
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
  enviar(){
    console.log(this.formularioContacto);
    
  }

}
