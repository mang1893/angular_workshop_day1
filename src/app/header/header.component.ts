import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = 'My Angular App'; // Accepts title as input
  @Input() buttonDisabled: boolean = false; // Accepts buttonDisabled as input
  //title: string = 'My angular App';
  //buttonDisabled: boolean = false;

  userName: string = '';
  name: any;

  onButtonClick() {
    alert('Button clicked');
    this.buttonDisabled = true;
    this.title = "angular is easy";

  }
}
