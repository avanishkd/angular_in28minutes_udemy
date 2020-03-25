import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'welcome component';
  msg ='welcome to welcome component';
  name=''
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name']
  }

}
