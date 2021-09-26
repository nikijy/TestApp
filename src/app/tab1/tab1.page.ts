import { Component, OnInit } from '@angular/core';
import { AuthorService, SearchType } from './../services/api-call-service.service';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private authorservice: AuthorService) { }

    ngOnInit() {
     this.results = this.authorservice.searchauthor(this.searchTerm, this.type);
   }
     livesearch() {
    this.results = this.authorservice.searchauthor(this.searchTerm, this.type);
  }
}
