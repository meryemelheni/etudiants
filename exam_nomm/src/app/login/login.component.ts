import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  pending = false;

  onSubmit(): void {
    if (this.pending) {
      return;
    }

    this.pending = true;

    // Simulate an async login request
    setTimeout(() => {
      console.log('Email :', this.email);
      console.log('Mot de passe :', this.password);
      alert('Connexion réussie (simulation)');
      this.pending = false;
    }, 800);
  }
}

