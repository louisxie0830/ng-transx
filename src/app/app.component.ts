import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-transx';
  currentIndex = 0;
  items = [1, 2, 3, 4, 5];
  nextTransition = "moveRightBack";
  prevTransition = "moveLeftBack";
  options = [
    { text: "fadeIn", value: "fadeIn" },
    { text: "fadeOut", value: "fadeOut" },
    { text: "flip", value: "flip" },
    { text: "moveLeftQuart", value: "moveLeftQuart" },
    { text: "moveRightQuart", value: "moveRightQuart" },
    { text: "moveLeftBack", value: "moveLeftBack" },
    { text: "moveRightBack", value: "moveRightBack" },
    { text: "zoomOutBack", value: "zoomOutBack" },
    { text: "zoomInBack", value: "zoomInBack" },
    { text: "rotateLeftBack", value: "rotateLeftBack" },
    { text: "rotateRightBack", value: "rotateRightBack" },
    { text: "rotateLeftTop", value: "rotateLeftTop" },
    { text: "rotateRightTop", value: "rotateRightTop" },
    { text: "zoomRotateIn", value: "zoomRotateIn" },
    { text: "zoomRotateOut", value: "zoomRotateOut" },
    { text: "shuttleLeft", value: "shuttleLeft" },
    { text: "shuttleRight", value: "shuttleRight" },
    { text: "shuttleDown", value: "shuttleDown" },
    { text: "shuttleUp", value: "shuttleUp" },
    { text: "rollLeft", value: "rollLeft" },
    { text: "rollRight", value: "rollRight" },
    { text: "scaleXLeft", value: "scaleXLeft" },
    { text: "scaleXRight", value: "scaleXRight" }
  ];
}
