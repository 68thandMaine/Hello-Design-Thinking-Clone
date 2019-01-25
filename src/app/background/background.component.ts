import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent  {


  let index = 0;
  function changeBanner() {
      [].forEach.call(document.images, function(v, i) {
          document.images[i].hidden = i !== index
      });
      index = (index + 1) % document.images.length;
  }
  window.onload = function() {
      setInterval(changeBanner, 4000)
  };

}
