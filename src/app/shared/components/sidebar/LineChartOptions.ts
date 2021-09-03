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
export const LineChartOptions:Options={
    chart: {
        type: 'line'
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      series: [
        {
            type:undefined,
          name: 'Line 1',
          data: [1, 2, 3]
        }
      ]
   
    
}
