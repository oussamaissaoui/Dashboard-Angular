import { Component, Input, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts'
import { ChartOptions } from './ChartOptions';

@Component({
  selector: 'app-pie-wid',
  templateUrl: './pie-wid.component.html',
  styleUrls: ['./pie-wid.component.css']
})
export class PieWidComponent implements OnInit {

  
  
  @Input() datapassed;
  //@Input() bbpassed;

  donutchart

  bb:any={
    chart: {
      type: 'pie',
  
      /////////////
      //backgroundColor: '#FFFFFF',
      //className: 'string',
      //displayErrors: true,
      height:600,
      width:600,
      //zoomType: 'x',
     //panning:true, 
      //panKey: 'shift'
    },
  
    
    title: {
      text: 'null hhhhhh',
      widthAdjust: -60,
      margin:40,
  
      align:'left',
      x:450
    
    },
    xAxis: {
      categories: ['data 1', 'data 2', 'data 3', 'data 4', 'data 5'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'data',
        align: 'high'
      },
    },
    credits:{
      enabled:true,
      text: 'Example.com',
      href: 'http://www.example.com',
      position: {
        align: 'left',
        x: 15
    }
  },
  
    tooltip: {
      valueSuffix: null
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false
        }
      }
    },
  
    
    series: [{
      type: undefined,
      name: 'Year 1800',
      data: [107, 31, 635, 203, 2],
    
    }, {
      type: undefined,
      name: 'Year 1900',
      data: [133, 156, 947, 408, 6]
    }, {
      type: undefined,
      name: 'Year 2000',
      data: [814, 841, 714, 727, 31]
    }, {
      type: undefined,
      name: 'Year 2016',
      data: [1216, 1001, 436, 738, 40]
    }],
   }

  constructor() { }

  

  

  

  ngOnInit(): void {

    //this.donutchart = new Chart(this.datapassed[0]);
    this.donutchart = new Chart(this.datapassed[1]);

    //let donutchart2 = new Chart(ChartOptions);

   // console.log(ChartOptions);
  }

}
