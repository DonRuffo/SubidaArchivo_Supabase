import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton],
})
export class HomePage {
  constructor(private router:Router) {}

  onClick (){
    this.router.navigate(['/upload'])
  }
}
