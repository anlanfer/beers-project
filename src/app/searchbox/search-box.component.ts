import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PunkService} from "../punk.service";
import {FormBuilder} from "@angular/forms";
import { fadeIn, fadeOut } from '../animation/custom-animations';

@Component({
  selector: 'app-searchbox',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  animations: [fadeIn, fadeOut],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit {

  @Output() query = new EventEmitter<any>();
  showInput = false;

  constructor(public punkService: PunkService, protected fb: FormBuilder,) {
  }

  ngOnInit() {
  }

  changeVisibilityInput(): void {
    this.showInput = !this.showInput;
  }

  searchBeers(event: any) {
    this.query.emit(event.target.value ? this.punkService.search(event.target.value) : '');
  }
}
