import {
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Heading';

  // Metadata properties
  // VIEW CHILD
  // @ViewChild('heading') heading: any;
  // @ViewChild('heading') heading!: ElementRef<any>;
  // @ViewChild('heading') heading!: ElementRef;
  // @ViewChild('heading') heading!: ElementRef<HTMLHeadingElement>;
  // @ViewChild('heading', {read: ChildComponent}) heading!: ElementRef<HTMLHeadingElement>;
  // @ViewChild('heading', { read: ChildComponent, static: true }) heading!: ElementRef<HTMLHeadingElement>;

  // @ViewChild('template') template: any;
  // @ViewChild('template') template!: TemplateRef<HTMLHeadingElement>;

  // @ViewChild('component') component: any;
  // @ViewChild('component') component!: ChildComponent;
  // @ViewChild(ChildComponent) component!: ChildComponent;
  // The template is accessed by the decorator after the component view has been initiated ngOnInit.
  // static - true to resolve query results before change detection runs, false to resolve after change detection. Defaults to false.
  // @ViewChild(ChildComponent, { static: true }) component!: ChildComponent;

  // VIEW CHILDREN
  @ViewChildren('heading') heading!: QueryList<ElementRef<HTMLHeadingElement>>;

  @ViewChildren('template') template!: QueryList<TemplateRef<HTMLHeadingElement>>;

  @ViewChildren(ChildComponent) component!: QueryList<ChildComponent>;

  // @ViewChildren('heading, ChildComponent') component!: QueryList<ChildComponent>;

  //ngOnInit lifecycle hook usage
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // NOT RECOMMENDED DO THAT!
  // ngOnInit(): void {
  //   console.log('component ngOnInit', this.component);
  // }

  // ngAfterViewInit lifecycle hook usage
  //Called after ngAfterContentInit when the component's view has been initialized.
  ngAfterViewInit(): void {
    console.log('heading', this.heading);
    console.log('template', this.template);
    console.log('component', this.component);

    this.component.forEach((item) => console.log('item', item));
    // NOT RECOMMENDED DO THAT!
    // this.heading.nativeElement.textContent = 'QWERTY';
    // this.component.name = 'Child name from parent';
  }
}
