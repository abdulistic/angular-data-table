import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormArray, FormGroup } from '@angular/forms';
import { apiRoutes } from '../shared/api-routes';
import { ClientConstants } from '../common/common';
import { ApiResponse } from '../shared/interfaces/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class httpRequestService {
  public apiRoutes = apiRoutes;
  public baseUrl: any
  
  private header: any;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.baseUrl = apiRoutes.BaseUrl;
    
    var token = localStorage.getItem(ClientConstants.SessionConstants.AuthSession);
    if (token == null) {
      token = "";
    }

    this.header = { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Expose-Headers': '*', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': '*', 'Authorization': 'Bearer ' + token }
  }

  get(api: string) {
    let headers = new HttpHeaders();
    let options = { headers: headers };
    return this.httpClient.get<object>(this.baseUrl + api, options);
  }

  post(api: string, data: any) {
    let headers = new HttpHeaders();
    let options = { headers: headers };
    return this.httpClient
      .post<ApiResponse>(this.baseUrl + api, data, options);
  }

  delete(api: string, data: any) {
    let headers = new HttpHeaders();
    let options = { headers: headers };
    return this.httpClient.delete(this.baseUrl + api + "/" + data.id, options);
  }

  update(api: string, data: any) {
    let headers = new HttpHeaders();
    let options = { headers: headers };
    return this.httpClient.put(this.baseUrl + api + "/" + data.id, JSON.stringify(data), options);
  }

  updateData(url: string, data: any, id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<any>(this.baseUrl + url + "/" + id, data, { headers });
  }

  public NavigateToRouteWithQueryString(routeName: string, queryParams?: NavigationExtras) {
    if (queryParams == undefined || queryParams == null)
      this.router.navigate([routeName]);
    else
      this.router.navigate([routeName], queryParams);
  }

  public NavigateToRoute(routeName: string, params?: NavigationExtras) {
    if (params == undefined || params == null)
      this.router.navigate([routeName]);
    else
      this.router.navigate([routeName, params]);
  }

  public findInvalidControlsRecursive(formToInvestigate: FormGroup | FormArray): string[] {
    var invalidControls: string[] = [];
    let recursiveFunc = (form: FormGroup | FormArray) => {
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        if (control?.invalid) invalidControls.push(field);
        if (control instanceof FormGroup) {
          recursiveFunc(control);
        } else if (control instanceof FormArray) {
          recursiveFunc(control);
        }
      });
    }
    recursiveFunc(formToInvestigate);
    return invalidControls;
  }
}
