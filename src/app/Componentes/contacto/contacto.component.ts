import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent {
  public sendContainer = false;

  constructor(private router: Router) { }

  public sendEmail(e: Event): void {
    e.preventDefault();
    emailjs.sendForm('service_cvns2ne', 'template_zapi20g', e.target as HTMLFormElement, 'owTDrexC1cLMWOgjw')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.sendContainer = true;
        setTimeout(() => {
          this.sendContainer = false;
          this.router.navigate(['/inicio']);
        }, 3000);
      }, (error) => {
        console.log(error.text);
      });
  }
}