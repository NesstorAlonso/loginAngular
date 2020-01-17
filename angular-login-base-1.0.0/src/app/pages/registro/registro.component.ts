import { Component, OnInit } from '@angular/core';
import { EmailModel } from '../../models/email.model';
import { NgForm } from '@angular/forms';
import { formatNumber } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: EmailModel;

  constructor( private auth: AuthService) { }

  ngOnInit() {

    // Inicializado el modelo usuario;
    this.email = new EmailModel();
    // this.email.puerto = '54';
   }

   onSubmit( form: NgForm){

    if(form.invalid){ return; }

    this.auth.nuevoEmail(this.email)
    .subscribe( resp => {
      console.log(resp);
    })


   }

}
