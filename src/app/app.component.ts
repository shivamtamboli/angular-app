import { Component, OnInit } from '@angular/core';
import { Weatherinterface } from './model/weatherinterface';
import { WeatherapiService } from './services/weatherapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wea2';

    // displayweatherdata:Weatherinterface[]=[]

    constructor(private data:WeatherapiService){}

     displayweatherdata: Weatherinterface[];

    //  displayweatherdata:any = [];
  // humidity:any;
  // desc:any;
  // temp:any;
  // day1:any;
  // day2:any;
  // day3:any;
  // day4:any;
  // day5:any;
  // day6:any;
  // day7:any;
  // speed:any;

    ngOnInit(): void {

        this.data.weatherdata().subscribe((res:any)=>{
          this.displayweatherdata=res.daily;
          // console.log(this.displayweatherdata);
  
        })
    }


 }

//  this.temp=Math.round(this.displayweatherdata.current.temp-273);
//           this.speed=this.displayweatherdata.current.wind_speed;
//           this.humidity=this.displayweatherdata.daily[0].humidity;
//           console.log(this.speed);


// this.day1=this.displayweatherdata;
// this.day2=this.displayweatherdata;
// this.day3=this.displayweatherdata;
// this.day4=this.displayweatherdata;
// this.day5=this.displayweatherdata;
// this.day6=this.displayweatherdata;
// this.day7=this.displayweatherdata;