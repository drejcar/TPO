import { Component } from '@angular/core';

@Component({
  selector:'not-found',
  template: `<div id="404">
             <h1>Error 404:</h1>
             <h2>This is not the page you are looking for</h2>
             <p>Ups, izgleda da ste zašli na neveljavno oziroma nedostopno stran</p>
             </div>
              `
})
export class PageNotFoundComponent {}
