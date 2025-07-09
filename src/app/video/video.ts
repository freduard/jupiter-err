import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [HttpClientModule],
  templateUrl: './video.html',
  styleUrl: './video.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Video implements OnInit {
  httpClient = inject(HttpClient)
  data: any[] = []

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.httpClient
      .get('https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee')
      .subscribe((data: any) => {
        console.log(data.data.category.frontPage)
        this.data = data.data.category.frontPage
        this.data.shift()
      })
  }
}
