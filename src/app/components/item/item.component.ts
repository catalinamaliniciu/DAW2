import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  name: string | null = null;
  constructor(public route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      // alert(this.name);
    });
  }
}
