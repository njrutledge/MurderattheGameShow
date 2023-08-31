import { Component } from '@angular/core';
import { QUESTION } from './question';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `<div class="jumbotron">
  <div class="container">
      <div class="row">
          <div class="col-sm-8 offset-sm-2">
              <router-outlet></router-outlet>
          </div>
      </div>
  </div>
</div>`/*`<div>
    <question-board [questions] = "Questions"></question-board>
  </div>`,*/
})
export class AppComponent {
  title = 'murder at the game show';
  constructor(
    private router: Router,
    private titleService: Title
  ){}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`MatGS - ${title}`);
        }
      });
  }
}