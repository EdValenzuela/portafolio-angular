import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //obtener url
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto:ProductoDescripcion;
  id:string;

  constructor(private route:ActivatedRoute, 
              public _productoService : ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( param =>{
      console.log(param['id']);
      this._productoService.getProducto(param['id'])
        .subscribe( (item:ProductoDescripcion) =>{
          this.id = param['id'];
          console.log(item);
          this.producto = item;
        })
    })
  }

}
