import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  usuario: Usuario;
  lista: Object[] = [{ value: "", label: "Seleccione el sexo" }, { value: "mujer", label: "mujer" }, { value: "hombre", label: "hombre" }]
  filesToUpload: File;
  actualizacionCorrecta;
  url = "http://localhost:3977/api/";

  constructor(private _usuarioService: UsuarioService


  ) {

  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("sesion"));
    var randomafy = Math.floor(Math.random() * 3);
    console.log(randomafy)
    if (!this.usuario.imagen) {
      if (this.usuario.sexo == "mujer") {

        switch (randomafy) {
          case 0:
            this.usuario.imagen = "HksiUI0w9xGDa5dqYezg8wVC.jpg"
            break;

          case 1:
            this.usuario.imagen = "yMzRB-LKXq9ghz1vkOm6zaXE.jpg"
            break;

          case 2:
            this.usuario.imagen = "nJ2YCv8i00ExLZW0KgajHe6h.jpg"

            break;

          default:
            break;
        }
      } else{

        switch (randomafy) {
          case 0:
            this.usuario.imagen = "7PyZhAaAeh5mX9rnYHTNNqhK.jpg"
            break;

          case 1:
            this.usuario.imagen = "0hbCfZMli_pf7VqEuzmsMLf2.jpg"
            break;

          case 2:
            this.usuario.imagen = "ZbgqfKbV7yZwUx3YYO9jatCs.png"

            break;

          default:
            break;
        }
      }


    }
  }

  subirimagen() {
    document.getElementById('uploadafi').click();
  }

  actualizarDatos() {
    this._usuarioService.actualizarUsuario(this.usuario._id, this.usuario).subscribe(
      (response: any) => {
        /* debugger */
        if (response.usuario) {
          if (this.filesToUpload != undefined) {
            this._usuarioService.cargarImagenUsuario(this.filesToUpload, this.usuario._id)
              .subscribe(
                (response: any) => {
                  if (response.usuario) {
                    this.actualizacionCorrecta = "Datos actualizados correctamente";
                    this.usuario = response.usuario;
                    localStorage.setItem("sesion", JSON.stringify(this.usuario));
                  } else {
                    this.actualizacionCorrecta = "los datos no se actualizaron por completo contacta al administrador de la aplicacion";
                  }

                }, error => {
                  if (error != null) {
                    console.log(error)
                  }
                }
              )


          };
          localStorage.setItem("sesion", JSON.stringify(this.usuario));
        } else {
          this.actualizacionCorrecta = "No se ha podido actualizar sus datos, comuniquese con el administrador de la aplicacion"
        }

      }, error => {
        if (error != null) {
          console.log(error)
        }
      }

    )
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <File>fileInput.target.files[0]; // recoger archivos seleccionado en el input
  }
}





