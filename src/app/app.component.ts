import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfigService } from './pages/service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiUrl: string;
  constructor(private configService: ConfigService) {}
  ngOnInit() {
    this.apiUrl = this.configService.getConfig().apiUrl || 'No URL found';
    this.showData();
  }

  
   
    showData() {
    fetchData()
      .then((res) => res.text())
      .then(y => {
      // console.log('y => ', y);
      document.getElementById("demo").innerHTML = y
      });
   }
}
const fetchData = (function () {
  let offset = 5;
  return async function () {
    offset = offset + 5;
    return await fetch(`https://dummyjson.com/users?limit=${offset}&select=firstName,age`);
  };
})();