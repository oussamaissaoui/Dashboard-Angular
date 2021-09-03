import { Options } from "highcharts";







var donne:any={
    type:'pie',
    data:[
        {name:'data 1',y:1,color:'#eeeeee'},
        {name:'data 2',y:2,color:'#393e46'},
        {name:'data 3',y:3,color:'#00adb5'},
        {name:'data 4',y:4,color:'#eeeeee'},
        {name:'data 5',y:5,color:'#506ef8'}
    ]
}

/*
class chartdata implements OnInit{
   
   
    constructor(private dash:DashItemsService){

   }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}*/

var easeOutBounce = function (pos) {
  if ((pos) < (1 / 2.75)) {
      return (7.5625 * pos * pos);
  }
  if (pos < (2 / 2.75)) {
      return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
  }
  if (pos < (2.5 / 2.75)) {
      return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
  }
  return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};
export const BarChartOptions:Options={
   
   
   chart: {
        type: 'column',

        /////////////
        backgroundColor: '#FFFFFF',
        className: 'string',
        displayErrors: true,
        height:(20)+'%',
        width:null,
        zoomType: 'x',
       //panning:true, 
        panKey: 'shift'
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
