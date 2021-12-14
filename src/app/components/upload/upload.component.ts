import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  uri = serverUrl + '/images';

  base64Data: string;

  uploadForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required])
  });

  message: string = '';

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  get uf() {
    return this.uploadForm.controls;
  }

  onImageChange(e): void {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.base64Data = reader.result as string;
        this.uploadForm.patchValue({
          data: reader.result
        });
      };
    }
  }

  upload(): void {
    // console.log(this.uploadForm.value);
    this.httpClient.post(this.uri, this.uploadForm.value)
      .subscribe(
        data => {
          this.uploadForm.reset();
          this.base64Data = null;
          this.message = 'Upload complete';
        },
        error => console.log(error)
      );
  }

}
