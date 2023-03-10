import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-item-page',
  templateUrl: './single-item-page.component.html',
  styleUrls: ['./single-item-page.component.scss'],
})
export class SingleItemPageComponent implements OnInit {

  itemId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id')!;
    });
  }
}
