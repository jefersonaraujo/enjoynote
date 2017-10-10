import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'

import { CadastroPage } from '../cadastro/cadastro'
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private  url:string = 'https://jsonplaceholder.typicode.com'; //Url de teste json api
  public gurus: Array<{}>;

  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
     //realizando requisição
    this.http.get(this.url + '/photos')
             .map(res => res.json())
             .subscribe(data => {
               console.log(data)

             })

  }
  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }


}
