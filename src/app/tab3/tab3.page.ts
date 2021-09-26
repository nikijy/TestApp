import { Component, OnInit } from '@angular/core';
import { AuthorService } from './../services/api-call-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-authordetail',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.authorService.getauthorProfile(id).subscribe(result => {
      this.information = result;
    });
  }
  openWebsite() {
    window.open(this.information[0].profilelink, '_blank');
  }
}
