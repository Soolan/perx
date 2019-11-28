import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-directives',
  templateUrl: './my-directives.component.html',
  styleUrls: ['./my-directives.component.scss']
})
export class MyDirectivesComponent implements OnInit {
  logoSize = 'p';
  noPerx = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.noPerx = true;
    }, 12000);
  }
}
