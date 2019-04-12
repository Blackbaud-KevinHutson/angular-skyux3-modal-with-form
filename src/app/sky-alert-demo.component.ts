import { Component } from '@angular/core';

@Component({
  selector: 'sky-alert-demo',
  templateUrl: './sky-alert-demo.component.html'
})
export class SkyAlertDemoComponent {
  public closeable = true;
  public closed = false;
  public alertType = 'warning';

  public openAlert() {
    this.closed = false;
  }
}
