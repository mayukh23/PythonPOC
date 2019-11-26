import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('http://10.241.120.87:5000/plotOverallDowntime/DowntimeType?plantType=CMO');
  }

  getUnitNamesCMO() {
    return this.http.get('http://10.241.120.87:5000/getUnitNames?plantType=CMO');
  }

  getUnitNamesALL() {
    return this.http.get('http://10.241.120.87:5000/getUnitNames?plantType=ALL');
  }
  getUnitNamesSHY() {
    return this.http.get('http://10.241.120.87:5000/getUnitNames?plantType=SHY');
  }
  getDowntimeReasonNamesCMO() {
    return this.http.get('http://10.241.120.87:5000/getDowntimeReasonNames?plantType=CMO');
  }
   
}