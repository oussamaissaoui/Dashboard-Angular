import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { DashItemsServiceService } from 'src/app/serives/dash-items-service.service';

import { MatDialog } from '@angular/material/dialog';
import { CommunicationService } from 'src/app/serives/communication.service';



import { Chart } from 'angular-highcharts'
import { Options } from "highcharts";
import { DataServiceService } from 'src/app/serives/data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ///////////////////////// widget liste /////////////////////////

  donutchart: any[];




  listbarNew: any[]=[];
  listbarTemplate: any =
    {
      chart: {
        type: '',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
        type:undefined,
        data:[/*
            {name:'data 1',y:1,color:'#eeeeee'},
            {name:'data 2',y:2,color:'#393e46'},
            {name:'data 3',y:3,color:'#00adb5'},
            {name:'data 4',y:4,color:'#eeeeee'},
            {name:'data 5',y:5,color:'#506ef8'}*/
        ]
    } /* {
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
      }*/],
    }

  listwidNew: any[] = [];


  donneeSources: any[] = [];






  listwid: any[] = [];

  listbar: any = [
    {
      chart: {
        type: 'pie',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
        type: 'pie',
        data: [
          { name: 'data 1', y: 1, color: '#eeeeee' },
          { name: 'data 2', y: 2, color: '#393e46' },
          { name: 'data 3', y: 3, color: '#00adb5' },
          { name: 'data 4', y: 4, color: '#eeeeee' },
          { name: 'data 5', y: 5, color: '#506ef8' }
        ]
      }],
    },
    {
      chart: {
        type: 'line',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
    },
    {
      chart: {
        type: 'column',

        /////////////
        //backgroundColor: '#FFFFFF',
        //className: 'string',
        //displayErrors: true,
        height: 600,
        width: 600,
        //zoomType: 'x',
        //panning:true, 
        //panKey: 'shift'
      },


      title: {
        text: 'Test Title',
        widthAdjust: -60,
        margin: 40,

        align: 'left',
        x: 200

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
      credits: {
        enabled: true,
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
  ]




  ////////////////////////////////////////////////////






  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  iii: any;

  src: any[];
  jarreb: any[]

  color: string;








  constructor(private serv: DashItemsServiceService, private modalService: NgbModal, private formBuilder: FormBuilder,
    public dialog: MatDialog, private communi: CommunicationService, private dataserv: DataServiceService
  ) { }












  open(content, item) {

    this.modalService.open(content, {
      centered: true,
      size: 'l',
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 


    });
    let ii = item;

    this.iii = item;
    console.log(this.iii.id)

  }

  openParam(content2, item) {

    this.modalService.open(content2, {
      centered: true,
      size: 'l',
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 


    });
    let ii = item;

    this.iii = item;
    console.log(this.iii.id)

  }

  ngOnInit(): void {





    //for(let i=0; i<this.listbarNew.length; i++){


    //console.log(this.listbar[i]);

    //let it=new Chart(this.listbar[i]);

    //this.listbarTemplate

    // this.listbarNew.push(

    //  )

    //this.listwid.push(new Chart(this.listbar[i]))

    // console.log('ffffffffffffffff');
    //console.log(this.listwid)


    //}





    for (let i = 0; i < this.listbar.length; i++) {


      //console.log(this.listbar[i]);

      //let it=new Chart(this.listbar[i]);

      this.listwid.push(new Chart(this.listbar[i]))

     // console.log('ffffffffffffffff');
      //console.log(this.listwid)


    }










    let dataaaa = this.serv.getDashItems().toPromise();


    dataaaa.then(
      data => {
        this.dashboard = data;

        console.log('+++++++++++')
        console.log(data)

        //this.src=data.graphSrc.src;

        if (data.graphSrc !== null) { console.log() }


        for (let i = 0; i < this.dashboard.length; i++) {


          

          this.dataserv.getSeriesData(this.dashboard[i].graphSrc.src).subscribe(datSer => {

            this.donneeSources.push(datSer);
            // this.listbarTemplate.series=datSer;



            //console.log('SourceDonnées')
            //console.log(this.donneeSources)

            this.listbarTemplate.chart.type = this.dashboard[i].barChartOptions.chartType;

            console.log(this.listbarTemplate.chart.type)
            
            let sourcedataPT1=this.dashboard[i].barChartOptions.mainBranch;
            let sourcedataPT2=this.dashboard[i].barChartOptions.leafName;
            let sourcedataPT3=this.dashboard[i].barChartOptions.valueName;

            let type="undefined"
            let donnesobjectfull :any[]=[];
            //console.log(sourcedataPT1+'.'+sourcedataPT2+'.'+sourcedataPT3)


            //let path:string=sourcedataPT1+'.'+sourcedataPT2+'.'+sourcedataPT3;
           // console.log(path)



            

            for (let j = 0; j < this.donneeSources.length; j++) {

              let dd = this.donneeSources;

              //let str = "OK" as keyof typeof dd;

              

            // type str= keyof typeof dd;
             //let sss:str='sourcedataPT1';

             //const str = '.sourcedataPT1' as const;

              //let insidefirstlvl=this.donneeSources[str];


              ////////////////////////////////////////////////////////////////
              //console.log('stppppppppp')
              //console.log(dd)


              function randomColor(){
                var allowed = "ABCDEF0123456789", S = "#";
             
                while(S.length < 7){
                    S += allowed.charAt(Math.floor((Math.random()*16)+1));
                }
                return S;
             }

              let objectTobePushed={

                name:dd[0][sourcedataPT1][j][sourcedataPT2],
                y:dd[0][sourcedataPT1][j][sourcedataPT3],
                color:randomColor()
              }
         
              //console.log(dd[0][sourcedataPT1][j][sourcedataPT2])
              
              ////////////////////////////////////////////////////////////////
              //console.log(objectTobePushed)
              
            
              //donnesobjectfull.push(objectTobePushed)

              
              donnesobjectfull.push(objectTobePushed)




              //console.log('ELLLLL DATTAAA')
              //console.log(donnesobjectfull)

             

            }


            //console.log('yessssssssssssssssssssss')
           // console.log(donnesobjectfull)

            //this.listbarTemplate.series.data.push(donnesobjectfull)
            this.listbarTemplate.series[0].data=donnesobjectfull;



           this.listbarNew.push(new Chart(this.listbarTemplate))

          // this.listwid.push(new Chart(this.listbar[i]))

            console.log('yessssssssssssssssssssss')
            //console.log(donnesobjectfull)
            console.log(this.listbarTemplate)

          })





          //this.listbarTemplate.
          //console.log(this.listbar[i]);

          //let it=new Chart(this.listbar[i]);

          //this.listbarTemplate

          //this.listbarNew.push()

          //console.log('kaa3ba')
          //console.log(this.dashboard[i])

        }

        console.log('Avec Back finaaaaaaaaaaaaaal');
        console.log(this.listbarNew);

        //console.log('Sans BAck');
       // console.log(this.listwid)
        //console.log(this.dashboard)

      }



    );


    ////////////////////////////////////////////////////////////////////






    const prom = this.serv.GetALLOptions().toPromise();


/*
    prom.then(
      (data) => {
        this.listbarNew = data;



        //console.log('//////////////////')
        //console.log(this.listbarNew)


        for (let i = 0; i < this.listbarNew.length; i++) {


          //this.listbarTemplate.
          //console.log(this.listbar[i]);

          //let it=new Chart(this.listbar[i]);

          //this.listbarTemplate

          //this.listbarNew.push()

        }
      }

    )
    */


    /////////////////////////////////////////////////////////////////////



    this.communi.recievedWidget$.subscribe(
      Message => {
        this.dashboard.push(Message)
      }
    )





    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,



      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 3,
      maxCols: 100,
      minRows: 3,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: true,

      emptyCellDragCallback: this.emptyCellClick.bind(this),

      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 80,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
        //stop:(item:GridsterItem)=>{
        //console.log(item)
        //this.serv.updateItem(item).subscribe(
        //data=> console.log(data)
        //data=>alert("position saved")
        //);


        //}
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: false,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      itemChangeCallback: (item: GridsterItem) => {
        // console.log("itemChange",item)
        setTimeout(() => {

          this.serv.updateItem(item).subscribe(
            data => console.log(data)
          )

        }, 300)


      },/*
      itemResizeCallback:()=>{
        console.log("RESIZEEEE",item)
        this.serv.updateItem(item).subscribe(
          data=> console.log(data)
          )
      },

      gridSizeChangedCallback:(item)=>{
        console.log(item.grid[0].$item)

        this.serv.updateItem(item.grid[0].$item).subscribe(
          data=>console.log(data)
        )

      }*/
    };
    this.dashboard;

    /*
    this.dashboard=[
      { cols: 8, rows: 5, y: 8, x: 20 },
      { cols: 5, rows: 5, y: 0, x: 2 },
      { cols: 5, rows: 5, y: 10, x: 0 },
      { cols: 5, rows: 5, y: 16, x: 2},
      { cols: 5, rows: 5, y: 0, x: 0 }
    ];*/

  }

  emptyCellClick(event: MouseEvent, item: GridsterItem): void {
    console.log(item);
    //this.dashboard.push(item);

    this.communi.addwidFromdash(item)

  }

  addElement() {

    //let itemDetails={ cols: 3, rows: 3, y: 7, x: 20 }
    let itemBack = {

      cols: 3,
      rows: 3,
      y: 2,
      x: 2

    }
    this.dashboard.push(itemBack)



    console.log('element added')
    //alert('added')
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {

    let id: number = item.id;
    this.serv.deleteItem(id).subscribe(
      data => console.log(id)

    )

    //console.log("ITEMMMM"+item)
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  refreshDash() {
    this.ngOnInit()
  }

}
function getseriesdata() {
  throw new Error('Function not implemented.');
}

