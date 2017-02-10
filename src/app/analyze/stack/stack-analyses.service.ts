import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Logger } from '../../shared/logger.service';
>>>>>>> e5f6d20... add recommender feature under analyze
=======
import { Logger } from '../../shared/logger.service';
>>>>>>> 97e90ae... fixup merge conflict recommendor

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class StackAnalysesService {

<<<<<<< HEAD
<<<<<<< HEAD
  readonly STACK_ANALYSES_BASE_URL: string
    = 'http://ose-vm1.lab.eng.blr.redhat.com:32000/api/v1/stack-analyses/';

  constructor(private http: Http) { }
=======
  private stackAnalysesUrl = process.env.STACK_API_URL;

  constructor(private http: Http, private logger: Logger) { }
>>>>>>> e5f6d20... add recommender feature under analyze
=======
  private stackAnalysesUrl = process.env.STACK_API_URL;

  constructor(private http: Http, private logger: Logger) { }
>>>>>>> 97e90ae... fixup merge conflict recommendor

  getStackAnalyses(id: string): Observable<any> {
    return this.http.get(this.buildStackAnalysesUrl(id))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private buildStackAnalysesUrl(id: string): string {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.STACK_ANALYSES_BASE_URL + id;
=======
    return this.stackAnalysesUrl + 'stack-analyses/' + id;
>>>>>>> e5f6d20... add recommender feature under analyze
=======
    return this.stackAnalysesUrl + 'stack-analyses/' + id;
>>>>>>> 97e90ae... fixup merge conflict recommendor
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.result || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
<<<<<<< HEAD
<<<<<<< HEAD
    console.error(errMsg);
=======
    this.logger.error(errMsg);
>>>>>>> e5f6d20... add recommender feature under analyze
=======
    this.logger.error(errMsg);
>>>>>>> 97e90ae... fixup merge conflict recommendor
    return Observable.throw(errMsg);
  }

}