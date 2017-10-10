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

  private  url:string = 'http://date.jsontest.com'; //Url de teste json api
  public beers: Array<{}>;;

  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
     //realizando requisição
    this.http.get(this.url)
             .map(res => res.json())
             .subscribe(data => {
               //console.log(data.time),
               this.beers = data;
             });
  }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }
}
