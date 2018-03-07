import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {CubeLedPage} from "../cube-led/cube-led";
import {ConnectBtPage} from "../connect-bt/connect-bt";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  CubeLED = CubeLedPage;
  ConnectBT  = ConnectBtPage;
}
