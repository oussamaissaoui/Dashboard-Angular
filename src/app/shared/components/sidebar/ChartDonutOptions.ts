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
        margin: [0, 800, 0, 0],
        spacingTop: 220,
        spacingBottom: 0,
        spacingLeft: 800,
        spacingRight: 0,
        style:{
        color:'#33333300'
        }
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
        text:'test du pie widget',
        style:{

            backgroundColor:'#33333300'
            
        }
    },
    legend:{
        enabled:false,
        backgroundColor: '#F5F5F5',
    layout: 'horizontal',
    floating: true,
    align: 'center',
    verticalAlign: 'top'    
        
    },
    series:[
        donne
    ]
}
