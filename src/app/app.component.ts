import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private http = inject(HttpClient);
  private apiRoot = environment.apiUrl;

  email: string = '';
  message: string = '';

  subscribe() {
    this.http
      .post(`${this.apiRoot}/subscibe`, { email: this.email })
      .subscribe((event) => {
        console.log('Subscription successful:', event);
      });
    console.log('Subscribed with email:', this.email);
  }

  createEvent() {
    this.http
      .post(`${this.apiRoot}/create-event`, { message:  this.message})
      .subscribe((event) => {
        console.log('message successful:', event);
      });
  }
}
