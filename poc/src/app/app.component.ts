import { Component } from '@angular/core';
import { ConfigService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  plantType = ["CMO","DLL","ALL","SHY"];
  unitNames= {};
  downtimeReasons= {};
  graphType = ["UnitName","DownTimeCategoryName","DownTimeReasonName","ShiftId","SKUId","WorkOrderId","DowntimeType","DownTimeStatus"];
  dImage;
  imageUrl = "";
  baseUrl = 'http://10.241.120.87:5000/'; //http://10.241.120.87:5000/plotOverallDowntime/DowntimeType?plantType=CMO
  fpath = "plotOverallDowntime/";
  spath = "?plantType="
  ptype="CMO";
  gtype="UnitName";
  gtype2="DownTimeCategoryName";
  untype=null;
  downtype = null;
  
  constructor(public configService: ConfigService) {}
  //http://10.241.120.87:5000/plotOverIndivUnit/Brushless%20Impactor%201/Line%20Not%20Scheduled?type=0&plantType=CMO 
  //http://10.241.120.87:5000/plotOverIndivDowntime/UnitName/DownTimeReasonName?type=1&plantType=ALL 


  //http://10.241.120.87:5000/plotOverallDowntime/{{gtype}}?plantType={{ptype}}
  setPtype(pT){
    this.ptype=pT;
    //this.imageUrl = this.baseUrl+this.fpath+pT+this.spath+this.gtype;
    if(pT == "CMO"){
      this.configService.getUnitNamesCMO()
      .subscribe(
        data => {
          this.unitNames = data;
          console.log(data);
        }
      )
      this.configService.getDowntimeReasonNamesCMO()
      .subscribe(
        data => {
          this.downtimeReasons = data;
          console.log(data);
        }
      )
      
    }
    else if(pT == "ALL"){
      this.configService.getUnitNamesALL()
      .subscribe(
        data => {
          this.unitNames = data;
          console.log(data);
        }
      )
    }
    else if(pT == "SHY"){
      this.configService.getUnitNamesSHY()
      .subscribe(
        data => {
          this.unitNames = data;
          console.log(data);
        }
      )
    }
  }
  setGtype(gT){
    this.gtype=gT;
  }
  setGtype2(gT){
    this.gtype2=gT;
  }
  setUName(uN){
    this.untype=uN;
  }
  setDRName(dR){
    this.downtype=dR;
  }

/*
  ngOnInit(){

      this.configService.getConfig()
        .subscribe(
          data => {
            this.dImage = data;
            console.log(data)
          
          }, // success path
          error => console.log(error) // error path
        );

  }
*/
}
