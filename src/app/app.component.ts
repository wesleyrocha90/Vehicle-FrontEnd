import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  vehicle = {};
  vehicles = [];
  vehicleType = {};
  vehicleTypes = [];

  constructor(private appService: AppService) { }

  private updateData() {
    this.appService.getAllVehicle().subscribe(response => {
      if (response.ok) this.vehicles = response.json();
    });
    this.appService.getAllVehicleType().subscribe(response => {
      if (response.ok) this.vehicleTypes = response.json();
    });
  }

  ngOnInit() {
    this.updateData();
  }

  editVehicleType(vehicleType) {
    this.appService.getOneVehicleType(vehicleType.id).subscribe(response => {
      if (response.ok) this.vehicleType = response.json();
    })
  }

  saveVehicleType(vehicleType) {
    this.appService.saveVehicleType(vehicleType).subscribe(response => {
      if (response.ok) console.log(response.json());
      this.updateData();
    })
  }

  deleteVehicleType(vehicleType) {
    this.appService.deleteOneVehicleType(vehicleType.id).subscribe(response => {
      if (response.ok) console.log(response.json());
      this.updateData();
    })
  }

  cancelVehicleType() {
    this.vehicleType = {};
  }
}
