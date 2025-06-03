import { Component } from '@angular/core';
import supabase from '../../../environments/supabase.client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, IonItem, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonButton, IonText, IonContent, IonItem, IonLabel
  ],
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage {
  selectedFile: File | null = null;
  message: string = '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadFile() {
    if (!this.selectedFile) {
      this.message = 'Selecciona un archivo primero.';
      return;
    }

    const { data, error } = await supabase.storage
      .from('newarchive') // Cambia al nombre correcto de tu bucket
      .upload(`uploads/${Date.now()}-${this.selectedFile.name}`, this.selectedFile);

    if (error) {
      this.message = 'Error al subir: ' + error.message;
    } else {
      this.message = 'Archivo subido exitosamente.';
      console.log('URL del archivo:', data);
    }
  }
}
