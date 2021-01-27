import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IActuell } from '../shared/interfaces/actuell';

@Component({
  selector: 'app-aktuelles',
  templateUrl: './aktuelles.component.html',
  styleUrls: ['./aktuelles.component.scss']
})
export class AktuellesComponent implements OnInit {

  public actuelles$: Observable<IActuell[]> | undefined;
  
  ngOnInit(): void {
    this.actuelles$ = of([
      { id: "j8P9sz", title: "Pepperoni", text: "test1", date: new Date('11.12.1897'), image: 'c://temp.jpg' },
      { id: "tMot06", title: "Supreme", text: "test2", date: new Date(), image: 'c://temp1.jpg' },
      { id: "x9sD3g", title: "Sizzler", text: "test3", date: new Date(), image: 'c://temp2.jpg' },
      { id: "x9sD3g", title: "SizTertererzler", text: "test4", date: new Date(), image: 'c://temp4.jpg' },
    ]);
  }

}
