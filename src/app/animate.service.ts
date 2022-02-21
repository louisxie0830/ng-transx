import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {
  DIS = 120;
  ANG = 45;
  BIG_DIS = 450;
  constructor() { }

  getAnimate(type) {
    let currentTo, nextFrom, nextTo;

    switch (type) {
      // move left quart
      case "moveLeftQuart":
        currentTo = {
          x: -this.DIS,
          alpha: 0,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          x: this.DIS
        };

        nextTo = {
          ease: "quart.inOut"
        };
        break;

      // move right quart
      case "moveRightQuart":
        currentTo = {
          x: this.DIS,
          alpha: 0,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          x: -this.DIS
        };

        nextTo = {
          ease: "quart.inOut"
        };
        break;

      // move left back
      case "moveLeftBack":
        currentTo = {
          x: -this.DIS,
          alpha: 0,
          ease: "back.in"
        };

        nextFrom = {
          alpha: 0,
          x: this.DIS
        };

        nextTo = {
          ease: "back.out"
        };
        break;

      // move right back
      case "moveRightBack":
        currentTo = {
          x: this.DIS,
          alpha: 0,
          ease: "back.in"
        };

        nextFrom = {
          alpha: 0,
          x: -this.DIS
        };

        nextTo = {
          ease: "back.out"
        };
        break;

      // zoom out back
      case "zoomOutBack":
        currentTo = {
          scale: 1.5,
          alpha: 0,
          ease: "back.in"
        };

        nextFrom = {
          scale: 0.5,
          alpha: 0
        };

        nextTo = {
          ease: "back.out"
        };
        break;

      // zoom in back
      case "zoomInBack":
        currentTo = {
          scale: 0.5,
          alpha: 0,
          ease: "back.in"
        };

        nextFrom = {
          scale: 1.5,
          alpha: 0
        };

        nextTo = {
          ease: "back.out"
        };
        break;

      // rotate in back
      case "rotateLeftBack":
        currentTo = {
          rotation: -this.ANG,
          alpha: 0,
          ease: "back.in"
        };

        nextFrom = {
          rotation: this.ANG,
          alpha: 0
        };

        nextTo = {
          rotation: 0,
          ease: "back.out"
        };
        break;

      // rotate right back
      case "rotateRightBack":
        currentTo = {
          rotation: this.ANG,
          alpha: 0,
          ease: "back.in"
        };

        nextFrom = {
          rotation: -this.ANG,
          alpha: 0
        };

        nextTo = {
          rotation: 0,
          ease: "back.out"
        };
        break;

      // rotate left Top
      case "rotateLeftTop":
        currentTo = {
          rotation: -this.ANG,
          alpha: 0,
          ease: "back.in",
          transformOrigin: "50% 0%"
        };

        nextFrom = {
          rotation: this.ANG,
          alpha: 0
        };

        nextTo = {
          rotation: 0,
          ease: "back.out",
          transformOrigin: "50% 0%"
        };
        break;

      // rotate right Top
      case "rotateRightTop":
        currentTo = {
          rotation: this.ANG,
          alpha: 0,
          ease: "back.in",
          transformOrigin: "50% 0%"
        };

        nextFrom = {
          rotation: -this.ANG,
          alpha: 0
        };

        nextTo = {
          rotation: 0,
          ease: "back.out",
          transformOrigin: "50% 0%"
        };
        break;

      case "zoomRotateIn":
        currentTo = {
          rotation: -this.ANG,
          scale: 1.5,
          alpha: 0,
          ease: "quart.in"
        };

        nextFrom = {
          rotation: this.ANG * 2,
          scale: 0.1,
          alpha: 0
        };

        nextTo = {
          rotation: 0,
          ease: "quart.inOut"
        };
        break;

      case "zoomRotateOut":
        currentTo = {
          rotation: -this.ANG,
          scale: 0.1,
          alpha: 0,
          ease: "quart.in"
        };

        nextFrom = {
          rotation: this.ANG * 2,
          scale: 1.5,
          alpha: 0
        };

        nextTo = {
          rotation: 0,
          ease: "quart.inOut"
        };
        break;

      case "fadeIn":
        currentTo = {
          alpha: 0,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scale: 1.2
        };

        nextTo = {
          scale: 1,
          alpha: 1,
          rotation: 0,
          ease: "quart.inOut"
        };
        break;

      case "fadeOut":
        currentTo = {
          alpha: 0,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scale: 0.7
        };

        nextTo = {
          scale: 1,
          alpha: 1,
          rotation: 0,
          ease: "quart.inOut"
        };
        break;

      case "shuttleLeft":
        currentTo = {
          alpha: 0,
          x: -this.BIG_DIS,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          x: this.BIG_DIS
        };

        nextTo = {
          x: 0,
          ease: "quart.out"
        };
        break;

      case "shuttleRight":
        currentTo = {
          alpha: 0,
          x: this.BIG_DIS,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          x: -this.BIG_DIS
        };

        nextTo = {
          x: 0,
          ease: "quart.out"
        };
        break;

      case "shuttleDown":
        currentTo = {
          alpha: 0,
          y: this.BIG_DIS * 2,
          scale: 0.85,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scale: 0.85,
          y: -this.BIG_DIS * 2
        };

        nextTo = {
          y: 0,
          scale: 1,
          ease: "quart.out"
        };
        break;

      case "shuttleUp":
        currentTo = {
          alpha: 0,
          y: -this.BIG_DIS * 2,
          scale: 0.85,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scale: 0.85,
          y: this.BIG_DIS * 2
        };

        nextTo = {
          y: 0,
          scale: 1,
          ease: "quart.out"
        };
        break;

      case "flip":
        currentTo = {
          alpha: 0,
          rotationY: -90,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          rotationY: -90
        };

        nextTo = {
          rotationY: 0,
          ease: "quart.out"
        };
        break;

      case "rollLeft":
        currentTo = {
          alpha: 0,
          scale: 0.35,
          rotation: this.ANG,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scale: 1.6,
          x: 200,
          rotation: -this.ANG
        };

        nextTo = {
          alpha: 1,
          rotation: 0,
          x: 0,
          scale: 1,
          ease: "quart.out"
        };
        break;

      case "rollRight":
        currentTo = {
          alpha: 0,
          scale: 0.35,
          rotation: -this.ANG,
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scale: 1.6,
          x: -200,
          rotation: this.ANG
        };

        nextTo = {
          alpha: 1,
          rotation: 0,
          x: 0,
          scale: 1,
          ease: "quart.out"
        };
        break;

      case "scaleXLeft":
        currentTo = {
          alpha: 0,
          scaleX: 0.1,
          transformOrigin: "100% 100%",
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scaleX: 2,
          x: -200
        };

        nextTo = {
          alpha: 1,
          x: 0,
          scale: 1,
          transformOrigin: "100% 100%",
          ease: "quart.out"
        };
        break;

      case "scaleXRight":
        currentTo = {
          alpha: 0,
          scaleX: 0.1,
          transformOrigin: "0% 0%",
          ease: "quart.in"
        };

        nextFrom = {
          alpha: 0,
          scaleX: 2,
          x: 200
        };

        nextTo = {
          alpha: 1,
          x: 0,
          scale: 1,
          transformOrigin: "0% 0%",
          ease: "quart.out"
        };
        break;
    }

    const one = { to: currentTo };
    const two = { to: nextTo, from: nextFrom };

    return { one, two };
  }
}
