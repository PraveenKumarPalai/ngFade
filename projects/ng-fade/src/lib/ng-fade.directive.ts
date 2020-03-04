import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[ngFade]"
})
export class NgFadeDirective {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    if (this.supportsIntersectionObserver()) this.fadeOpacity();
  }

  private supportsIntersectionObserver() {
    return window && "IntersectionObserver" in window;
  }

  private fadeOpacity() {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: this._buildThresholdList()
    };
    let obsr = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        let prevRatio = 0;
        if (entry.intersectionRatio >= prevRatio) {
          this._fadeOpacity(entry);
        }
        prevRatio = entry.intersectionRatio;
      });
    }, options);
    obsr.observe(this.elRef.nativeElement);
  }

  private _buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }
  private _fadeOpacity(el: any) {
    el.target.style.opacity = el.intersectionRatio;
  }
}

