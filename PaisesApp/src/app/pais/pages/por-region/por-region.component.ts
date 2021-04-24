import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  hayError = false;
  paises: Country[] = [];
  regiones: string[] = ["africa","americas","asia","europe","oceania"];
  regionActiva: string = "";
  constructor(private paisService: PaisService) { }

  activarRegion( region: string ){
    if(region === this.regionActiva) return;
    this.regionActiva = region;
    
    this.paises = [];
    
    this.paisService.getPaisesPorRegion( region )
    .subscribe( (paises) => {
      this.paises = paises;
      console.log(this.paises);
    },
    (err) => {
      this.hayError = true;
      console.log('Error');
      console.info(err);
    });
  }


}
