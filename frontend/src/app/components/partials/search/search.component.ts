import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params["searchTerm"]) {
        this.searchTerm = params["searchTerm"]
      }
    })
  }

  search(term: string): void {
    if(term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }
}
