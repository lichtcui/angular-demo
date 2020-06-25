import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Account, AccountType, Currency } from '@interfaces/form';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

type ResolvedData = [Account[], AccountType[], Currency[]];

@Injectable({ providedIn: 'root' })
export class HomeResolveService implements Resolve<ResolvedData> {
  private accountsUrl = 'api/accounts';
  private accountTypesUrl = 'api/accountTypes';
  private currenciesUrl = 'api/currencies';

  constructor(private http: HttpClient) {}

  private getUrl<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  resolve(): Observable<ResolvedData> {
    return forkJoin([
      this.getUrl<Account>(this.accountsUrl),
      this.getUrl<AccountType>(this.accountTypesUrl),
      this.getUrl<Currency>(this.currenciesUrl),
    ]);
  }
}
