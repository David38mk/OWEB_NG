import { Component, Input } from '@angular/core';
import { driver } from '../../driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input()
  vozac:driver | undefined;
  @Input()
  indks:number | undefined;
  onDrvView() {

    let link: string | undefined;

    if (this.vozac?.iconUrl){
      link = this.vozac?.iconUrl
    }else{
      link = "https://www.google.com"
    }

    window.open(link,"_blank")

    console.log("Klikna me");
  }

  klasi(){
    return {'begin':this.vozac?.category=='ASD',
      'adv':this.vozac?.category=='EXPERT',
      'lun':this.vozac?.category=='LUNATIC'
    }
  }

  klasi2(){
    if (this.vozac?.category=='ASD'){return 'begin'}
    else{return 'adv'}
  }

  stilovi(){
    return {'undr':this.vozac?.category=='EXPERT'}
  }
}
