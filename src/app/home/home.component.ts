import { ViewportScroller } from '@angular/common';
import { Component, OnInit,HostListener  } from '@angular/core';


import '../../styles.scss';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private readonly viewportScroller: ViewportScroller) { }

  public ngOnInit() {
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let element = document.querySelector('.navbar');
    if (number < 80) {
      element?.classList.remove('bg-secondary');
    } else {
      element?.classList.add('bg-secondary');
    }
  }

}
/* $('.nav-menu').addClass('custom-navbar');
} else {
  $('.nav-menu').removeClass('custom-navbar');
} */