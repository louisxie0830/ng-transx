import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import gsap from "gsap";
import { AnimateService } from '../animate.service';

@Component({
  selector: 'ng-transx',
  templateUrl: './ng-transx.component.html',
  styleUrls: ['./ng-transx.component.scss']
})
export class NgTransxComponent implements OnInit, AfterViewInit {
  @Input() loop: boolean = false;
  @Input() autoplay: boolean | number = false;
  @Input() defaultIndex: number = 0;
  @Input() delay: number = -1;
  @Input() time: number = 0.6;
  @Input() nextTransition: string = 'moveLeftBack';
  @Input() prevTransition: string = 'moveRightBack';
  @Output() transitionend: EventEmitter<string | number> = new EventEmitter<string | number>();
  state = 'end';
  currentIndex = 0;
  list: Array<any> = [];

  constructor(private elt: ElementRef, private animateService: AnimateService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.currentIndex = this.defaultIndex;

    this.addSubList();
    this.showCurrentComp();
  }

  addSubList() {
    const { children } = this.elt.nativeElement.childNodes[0];
    Object.keys(children).forEach(element => {
      const displayStyle = children[element]?.style?.display || 'block';
      children[element].setAttribute('data', displayStyle);
      this.list.push(children[element]);
    });
  }

  showCurrentComp() {
    this.list.forEach((elem, index) => {
      if (index == this.currentIndex) {
        this.showComp(elem);
      } else {
        this.hideComp(elem);
      }
    });
  }

  showComp(elem) {

    const displayStyle = elem.getAttribute("data") || "block";
    elem.style.display = displayStyle;
  }

  hideComp(elem) {
    elem.style.display = "none";
    elem.style.zIndex = 9;
  }

  setToTop(elem) {
    elem.parentNode.appendChild(elem);
    elem.style.zIndex = 999;
  }

  prev(conf) {
    if (this.state != "end") return;

    let { time, delay, transition } = conf;
    time = time || this.time;
    delay = delay || this.delay;
    transition = transition || this.prevTransition;

    if (this.currentIndex <= 0) {
      // this.$emit("over", false);
      if (!this.loop) return;
    }

    const current = this.list[this.currentIndex];
    const next = this.list[(this.currentIndex + this.list.length - 1) % this.list.length];
    this.transition({ current, next, delay, time, transType: transition, direction: "prev" });
  }

  next(conf?) {
    conf = conf || {}
    if (this.state != "end") return;

    let { time, delay, transition } = conf;
    time = time || this.time;
    delay = delay || this.delay;
    transition = transition || this.nextTransition;

    if (this.currentIndex >= this.list.length - 1) {
      // this.$emit("over",true);
      if (!this.loop) return;
    }

    const current = this.list[this.currentIndex];
    const next = this.list[(this.currentIndex + 1) % this.list.length];
    this.transition({ current, next, delay, time, transType: transition, direction: "next" });
  }

  goto(index) {
    this.currentIndex = index;

    this.killAll();
    const currentDom = this.list[this.currentIndex];
    this.showCurrentComp();
    gsap.set(currentDom, { x: 0, y: 0, rotation: 0, alpha: 1, scale: 1 });
    // this.$emit("gotoend", this.currentIndex);
    this.state = "end";
  }

  kill(elem) {
    gsap.killTweensOf(elem);
  }

  killAll() {
    this.list.forEach(elem => {
      gsap.killTweensOf(elem);
    });
  }

  transition({ current, next, delay, time, transType, direction }) {
    this.state = "running";
    this.showComp(current);
    this.showComp(next);
    this.setToTop(next);

    const { one, two } = this.animateService.getAnimate(transType);
    const to = { x: 0, y: 0, rotation: 0, alpha: 1, scale: 1 };
    delay = delay < 0 ? time * 0.65 : delay;

    gsap.to(current, { duration: time, transformOrigin: "50% 50%", ...one.to });
    gsap.fromTo(next, two.from, {
      ...to,
      delay,
      duration: time,
      transformOrigin: "50% 50%",
      ...two.to,
      onComplete: this.transitionEnd.bind(this),
      onCompleteParams: [direction]
    });
  }

  transitionEnd(direction) {
    this.state = "end";
    if (direction == "next") {
      this.currentIndex++;
    } else {
      this.currentIndex = this.currentIndex + this.list.length - 1;
    }
    this.currentIndex = this.currentIndex % this.list.length;
    this.showCurrentComp();
    this.transitionend.emit(this.currentIndex);

    if (this.autoplay && (this.loop || this.currentIndex < this.list.length)) {
      setTimeout(() => {
        this.next();
      }, typeof this.autoplay === "boolean" ? 1000 : this.autoplay)
    }
  }
}
