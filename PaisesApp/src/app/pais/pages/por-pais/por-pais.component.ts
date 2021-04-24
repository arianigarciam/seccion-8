import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino : string = "Hola Mundo";
  hayError: boolean= false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  sugerencias( termino: string){
    this.hayError = false;
  }

  buscar( termino: string ){
    this.termino = termino;
    this.hayError = false;
    

    this.paisService.buscarPais( termino )
    .subscribe( (paises) => {
      console.log(paises)
      this.paises = paises;
    },
    (err) => {
      this.hayError = true;
      console.log('Error');
      console.info(err);
    });
  }

}
