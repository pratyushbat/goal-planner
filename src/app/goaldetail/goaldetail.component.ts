import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-goaldetail',
  templateUrl: './goaldetail.component.html',
  styleUrls: ['./goaldetail.component.scss'],
})
export class GoaldetailComponent implements OnInit {
  public selectedId;

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  // ngOnInit(): void {
  //   alert('called goal detail')
  //   let id = parseInt(this.route.snapshot.params['id']);
  //   this.deptId = id;
  // }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      let id = parseInt(params['id']);
        this.selectedId = id;
    })
  }

  goPrevious() {
    let previousId = this.selectedId - 1;
    this.router.navigate(['/goals', previousId]);
    // this.router.navigate([previousId],{relativeTo:this.route})
  }
  goNext() {
    let nextId = this.selectedId + 1;
    this.router.navigate(['/goals', nextId]);
    // this.router.navigate([nextId],{relativeTo:this.route})
  }
  goToGoalList() {
    let selectedId = this.selectedId ? this.selectedId:null;
    // this.router.navigate(['/goals', {id:selectedId}]);
    this.router.navigate(['../', {id:selectedId}],{relativeTo:this.route})
  }
}
