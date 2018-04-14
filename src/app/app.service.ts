import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {

    private urlVehicle = "http://localhost:8080/vehicle";
    private urlVehicleType = "http://localhost:8080/vehicleType";

    constructor(private http: Http) { }

    // Methods to Vehicle

    getAllVehicle(): Observable<any> {
        return this.http.get(this.urlVehicle);
    }

    getOneVehicle(id): Observable<any> {
        return this.http.get(this.urlVehicle + '/' + id);
    }

    // Methods to VehicleType

    getAllVehicleType(): Observable<any> {
        return this.http.get(this.urlVehicleType);
    }

    getOneVehicleType(id): Observable<any> {
        return this.http.get(this.urlVehicleType + '/' + id);
    }

    saveVehicleType(vehicleType): Observable<any> {
        return this.http.post(this.urlVehicleType, vehicleType);
    }

    deleteOneVehicleType(id): Observable<any> {
        return this.http.delete(this.urlVehicleType + '/' + id);
    }
}