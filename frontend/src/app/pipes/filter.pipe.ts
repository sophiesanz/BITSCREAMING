import { Pipe, PipeTransform } from '@angular/core';
import { CompartidoService } from 'src/app/servicios/compartido.service';
import { Cancion } from 'src/app/modelos/cancion';
import { CancionService } from 
'src/app/servicios/cancion.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  private _servicioCompartido: CompartidoService
  private _cancionService:CancionService

  transform(value: any, ...arg: any): any {
    if (arg=="" || arg.length<3 ) {
      return value;
    }

    
    
  }

}
