import { Component, ViewChild, ElementRef} from "@angular/core";
import { createPopper } from "@popperjs/core";


@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})

export class DashHeaderComponent {
  
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef!: ElementRef<HTMLElement>;
  @ViewChild("popoverDropdownRef", { static: false }) popoverDropdownRef!: ElementRef<HTMLElement>;
  dropdownPopoverShow = false;
  
  isOpen: boolean = false;


  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-end",
      }
    );
  }


  
  closeBtn() {
    this.isOpen = false;
  }
  openBtn($event?: Event ) {
    $event?.preventDefault()
    this.isOpen = !this.isOpen;
  }

  
  
}


