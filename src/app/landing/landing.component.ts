import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SmartAuthService} from '../smart-auth.service';
import { Patient } from '../../fhir/lib';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  ptName: string;
  ptFhir: Patient;
  property: string;
  data: string;

  constructor(private route: ActivatedRoute, private smartService: SmartAuthService) { }

  ngOnInit() {
    this.smartService.initialize(this.route);
  }

  getPatientName() {
    console.log('getting pt Name');
    this.smartService.getPatient().subscribe(
      patient => {
        this.ptFhir = patient;
        this.ptName = this.ptFhir.name[0].given + " " + this.ptFhir.name[0].family;
      }
    );
  }

  printPatientProperty() {
    console.log(this.ptFhir[this.property]);
    this.data += this.ptFhir[this.property] + '\n';
  }

  getPatientDetails() {
    if (!this.ptFhir) {
      return;
    }

    this.data = 'DOB: ' + this.ptFhir.birthDate + '\n' +
      'Gender: ' + this.ptFhir.gender + '\n' +
      'Name: ' + this.ptFhir.name[0].given + " " + this.ptFhir.name[0].family + '\n' +
      this.ptFhir.identifier[0].type.text + ': ' + this.ptFhir.identifier[0].value;
  }
}
