import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SmartAuthService} from '../smart-auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  ptName: string;

  constructor(private route: ActivatedRoute, private smartService: SmartAuthService) { }

  ngOnInit() {
    this.smartService.initialize(this.route);
  }

  getPatientName() {
    this.smartService.makeServiceCall().subscribe( data => {
      // get pt name and store it in a variable
      this.ptName = data['name'][0].given.join(' ') + ' ' + data['name'][0].family.join(' ');
    });
  }
}
