import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, CanActivate {
  isPublic: boolean = false;
  name: string | null = null;
  constructor(public route: ActivatedRoute, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // alert("canActivate");
    // console.log("Permission denied!");
    this.router.navigateByUrl('/forbidden');
    return this.isPublic;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      // alert(this.name);
    });
  }
}
