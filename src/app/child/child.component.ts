import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Query,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { NgContentExampleComponent } from '../ng-content-example/ng-content-example.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  // title: string = 'child title';
  // name: string = 'child name';

  // CONTENT CHILD
  // @ContentChild('selector') propertyName: DataType;
  // @ContentChild('tag') heading!: ElementRef<HTMLHeadingElement>;
  // @ContentChild('tag', { static: false })
  // heading!: ElementRef<HTMLHeadingElement>;
  // @ContentChild('tag', { read: TemplateRef })
  // heading!: ElementRef<HTMLHeadingElement>;

  // @ContentChild(TemplateRef) template!: ElementRef<HTMLHeadingElement>;

  // @ContentChild(NgContentExampleComponent)
  // component!: NgContentExampleComponent;
  // @ContentChild('descendants', { descendants: true }) // true - direct and indirect descendants, false - direct descendants only
  // component!: NgContentExampleComponent;

  @ContentChildren(NgContentExampleComponent) allChildren!: QueryList<NgContentExampleComponent>;

  // ngOnInit lifecycle hook usage
  // ngOnInit(): void {
  //   this.heading && console.log('ngOnOnit heading', this.heading);
  // }

  // ngAfterContentInit lifecycle hook usage
  //Called after ngOnInit when the component's or directive's content has been initialized.

  ngAfterContentInit(): void {
    // this.heading && console.log('heading', this.heading);
    // this.template && console.log('template', this.template);
    // this.component && console.log('component', this.component);

    this.allChildren && console.log('component', this.allChildren);

    // this.component?.getClassName();
  }
}
