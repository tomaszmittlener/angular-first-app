import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{item.title}}
    </p>
  `,
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
