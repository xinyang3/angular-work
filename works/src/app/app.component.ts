import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'works';

  constructor (public router:Router,
               public route:ActivatedRoute) {

  }

  ngOnInit () {

  }

  onClick () {
    this.router.navigateByUrl("router-index")
  }
}
