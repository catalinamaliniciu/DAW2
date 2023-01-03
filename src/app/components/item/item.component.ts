import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  name: string | null = null;
  constructor(public route: ActivatedRoute){}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });
  }
}
