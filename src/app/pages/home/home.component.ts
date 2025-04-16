import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BorderDirective } from 'src/app/directive/border.directive';
import { HighlightDirective } from 'src/app/directive/highligh.directive';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  hostDirectives: [HighlightDirective, BorderDirective],
  
})
export class HomeComponent implements OnInit {
  allUsers$: Observable<any>;
  maleUsers$: Observable<any>;
  femaleUsers$: Observable<any>;
  showInput: boolean = true;

  constructor(private http: HttpClient,public highlight: HighlightDirective,
    public border: BorderDirective) {}
  ngOnInit(): void {
    this.highlight.color = 'lightcoral';
    this.border.color = 'red';


    // https://medium.com/@piyalidas.it/sharereply-4df28d6d54a8
    console.log('ok');
    this.allUsers$ = this.getAllUsers();
    this.maleUsers$ = this.allUsers$.pipe(
      map((res) => res.filter((user: any) => user.gender === 'male'))
    );
    this.femaleUsers$ = this.allUsers$.pipe(
      map((res) => res.filter((user: any) => user.gender === 'female'))
    );
  }

  sign = 'login';
  tour = 'overview';

  getAllUsers(): Observable<any> {
    // shareReplay(1) means only one value will be cache
    return this.http
      .get(
        'https://raw.githubusercontent.com/piyalidas10/dummy-json/main/fakeuser.json'
      )
      .pipe(shareReplay(1));
    // return this.http.get('https://raw.githubusercontent.com/piyalidas10/dummy-json/main/fakeuser.json');
  }
}
