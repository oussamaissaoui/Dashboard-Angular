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
export const ChartOptions:Options={
   
   
   
    chart:{
        type:'pie',
        plotShadow:false,
    },
    credits:{
        enabled:false
    },
    plotOptions:{
        pie:{
            innerSize:'99%',
            borderWidth:40,
            borderColor:null,
            slicedOffset:20,
            dataLabels:{
                connectorWidth:0
            }
        

        }
        
    },
    title:{
        verticalAlign:'middle',
        floating:true,
        text:'test du pie widget'
    },
    legend:{
        enabled:false
    },
    series:[
        donne
    ]
}
