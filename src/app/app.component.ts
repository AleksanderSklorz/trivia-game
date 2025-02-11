import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonToggle, MatButtonToggleGroup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  start(event: MatButtonToggleChange): void {
    console.log(event);
  }
}
