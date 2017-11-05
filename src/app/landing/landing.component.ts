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

    // Prep the token exchange call parameters
    // this.data = {
    //   code: this.code,
    //   grant_type: 'authorization_code',
    //   redirect_uri: this.redirectUri
    // };
    // if (!this.secret) {
    //   this.data['client_id'] = this.clientId;
    // }
    // this.options = {
    //   url: this.tokenUri,
    //   type: 'POST',
    //   data: this.data
    // };
    // if (this.secret) {
    //   this.options['headers'] = {
    //     'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.secret)
    //   };
    // }

    // this.body = new HttpParams();

    // Prep the token exchange call parameters
    this.body = new HttpParams()
      .set('code', this.code)
      .set('grant_type', 'authorization_code')
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId);
    //
    // if (!this.secret) {
    //   this.body.append('client_id', this.clientId);
    // }

    // // Prep the token exchange call parameters
    // this.body.set('code', 'myCode');

    console.log('body: ');
    console.log(this.body.toString());

    // if (this.secret) {
    //   this.options['headers'] = {
    //     'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.secret)
    //   };
    // }
  }

  doPostRequest() {
    console.log('Data: -------------');
    console.log(this.body.toString());

    this.http.post(this.tokenUri, this.body).subscribe(
      data => console.log(data)
    );
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
