import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent {

    // [] means property binding - one way up (c to d)
    // () means event binding (d to c)

    name = 'Angular2';
    wardColor = 'red';

    changeSuitColor() {
      this.wardColor = (this.wardColor === 'blue') ? 'red' : 'blue';
    }

}
