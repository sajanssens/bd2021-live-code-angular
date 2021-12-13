import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from '../../../environments/environment';
import {Image} from './image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[];
  uri = serverUrl + '/images';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<Image[]>(this.uri)
      .subscribe(
        data => this.images = data,
      );
  }


}
