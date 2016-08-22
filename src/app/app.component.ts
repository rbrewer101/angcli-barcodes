import { Component } from '@angular/core';

var ioBarcode = require("io-barcode");

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  value = 123456789012;

  opts = {
  width:  1.5,
  height: 50,
  quite: 10,
  displayValue: true,
  font: 'monospace',
  textAlign: 'center',
  fontSize: 20,
  fontWeight: '',
  backgroundColor: '',
  lineColor: "#000",
  customLabel: this.value // Will be displayed if displayValue is set to true
};

constructor() {
  console.log("this.value: ", this.value);
  console.log("this.opts: ", this.opts);
}

  canvas = ioBarcode.UPC(this.value, this.opts);

 imag = this.canvas.toDataURL('./barcode.png');

}
