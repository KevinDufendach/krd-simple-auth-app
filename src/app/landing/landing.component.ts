import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isUndefined} from 'util';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {
  state: string;
  code: string;
  private sub: any;
  urlParams: any;

  // Session params
  tokenUri: string;
  clientId: string;
  secret: string;
  serviceUri: string;
  redirectUri: string;
  // data: any;
  options: any;
  ptName: string;

  private accessToken: string;
  private patientId: string;

  body: HttpParams;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.urlParams = params;
    });

    // Get URL parameters from auth server
    this.state = this.getUrlParameter('state');
    this.code = this.getUrlParameter('code');

    // Load app parameters stored in session
    const params = JSON.parse(sessionStorage[this.state]);
    this.tokenUri = params.tokenUri;
    this.clientId = params.clientId;
    this.secret = params.secret;
    this.serviceUri = params.serviceUri;
    this.redirectUri = params.redirectUri;

    // this.body = new HttpParams();

    // Prep the token exchange call parameters
    this.body = new HttpParams()
      .set('code', this.code)
      .set('grant_type', 'authorization_code')
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId);
  }

  doPostRequest() {
    this.http.post(this.tokenUri, this.body).subscribe(
      data => {
        console.log(data);

        this.accessToken = data['access_token'];
        this.patientId = data['patient'];
      }
    );
  }

  getPatientName() {
    if (!this.accessToken) {
      return;
    }

    this.http.get(
      this.serviceUri + '/Patient/' + this.patientId, {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken)
      }
    ).subscribe( data => {
      // get pt name and store it in a variable
      this.ptName = data['name'][0].given.join(' ') + ' ' + data['name'][0].family.join(' ');
    });
  }

  private getUrlParameter(sParam: string): string {
    if (isUndefined(this.urlParams[sParam])) {
      console.log('parameter ' + sParam + ' does not exist');
      return '';
    }
    return this.urlParams[sParam];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
