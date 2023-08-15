import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
 @Input('delay1') delay:string='';
 @Input('titulo') titulo:string='';
 @Input('texto') texto:string='';
 @Input('icono') icono:string='';

 constructor() { }

  ngOnInit (): void {
    //console.log(this.titulo,this.texto);
  }
 
}
