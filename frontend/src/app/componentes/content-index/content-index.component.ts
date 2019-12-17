import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
// import { $ } from 'protractor';

declare var $:any;

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html',
  styleUrls: ['./content-index.component.css'],
  providers:[]
})
export class ContentIndexComponent implements OnInit {
  flag:Boolean;
  usuario: Usuario;
  lista: Object[]= [{value:"",label:"Seleccione el sexo"},{value:"mujer",label:"mujer"}, {value:"hombre",label:"hombre"}]
  registroCorrecto;
  constructor(
    private _usuarioService : UsuarioService,
    private _router : Router
  ) {
    if(localStorage.getItem("sesion") != null){
      this._router.navigate(['/menu']);
    }
    this.usuario = new Usuario('', '', null, '', '', '', '', '');
  }
  ngOnInit() {
    this.flag=false;
    
    setTimeout(() => {
      this.flag=true;},
       2000);

    $( function() {
      $( ".glitch-img" ).mgGlitch({
        destroy : false, // set 'true' to stop the plugin
                          glitch: true, // set 'false' to stop glitching
                          scale: true, // set 'false' to stop scaling
                          blend : true, // set 'false' to stop glitch blending
                          blendModeType : 'hue', // select blend mode type
                          glitch1TimeMin : 600, // set min time for glitch 1 elem
                          glitch1TimeMax : 900, // set max time for glitch 1 elem
                          glitch2TimeMin : 10, // set min time for glitch 2 elem
                          glitch2TimeMax : 115, // set max time for glitch 2 elem
                          zIndexStart : 8, // because of absolute position, set z-index base value
      });
    });
  
  }
    registrar(tipocliente) {
      this.usuario.role=tipocliente
      this._usuarioService.registrar(this.usuario).subscribe(
        (response: any) => {
          if (response.usuario) {
            this.registroCorrecto = 
            "Registro correcto. Su email para iniciar sesión es: "+this.usuario.correo;
          } else {
            this.registroCorrecto = 
            "Registro de usuario falló";
          }
        }, error => {
          if (error != null) {
            console.log(error)
          }
        }
      )
    }
} 
