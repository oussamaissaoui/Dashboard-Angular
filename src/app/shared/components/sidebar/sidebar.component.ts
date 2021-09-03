import { Component, EventEmitter, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommunicationService } from 'src/app/serives/communication.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


import {Chart} from 'angular-highcharts'

import {ChartOptions} from './ChartDonutOptions'
//import { ChartOptions } from '../../../modules/Graphs/pie-wid/Chartoptions';
import { BarChartOptions } from './BarCharOptions';

import {LineChartOptions} from './LineChartOptions'
import { DataServiceService } from 'src/app/serives/data-service.service';
import { DashItemsServiceService } from 'src/app/serives/dash-items-service.service';
import { cpuUsage } from 'process';

//import { ChartOptions } from '../modules/Graphs/pie-wid/Chartoptions';

import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {


  @ViewChild('content') contentt: any;

  firstFormGroup: FormGroup;
 secondFormGroup: FormGroup;
 thirdFormGroup: FormGroup;
 loginFormGroup:FormGroup;

 FinalFormGroup:FormGroup;
 uncheckedFormGroup:FormGroup;

  @Output()addwidgetEmit:EventEmitter<any>= new EventEmitter()


  donutchart = new Chart(ChartOptions);
  barchart = new Chart(BarChartOptions);
  linechart=  new Chart(LineChartOptions); 

  checked = false;
  color: string;

  data:any;



  valueURL:any

  ChartType:any;

  ddsh:any={
    
    cols:2,
    rows: 2,
    y: 18,
    x: 0,
    
}

src:any={
    
  src:"",
  password:"",
  username:""
  
}

srcWithoutpass:any={
    
  src:"",
  password:"",
  username:""
  
}

 barop:any={
  
  height:10,
  width:10,
  titleText:'',
  margin:0,
  align:'',
  position:0,
  xAxiscategories:[],
  yAxisTitleText:'',
  yAxisMin:'',
  credTxt:'',
  credhrf:'',
  displayErrors:true,
  backgroundColor:''


}

FinData:any={
  mainBranch:'',
  leafName:'',
  ValueName:''
}
 Opt:any={
  align:"",
  backgroundColor:"",
  chartType: "column",
  credTxt: "teste",
  credhrf: "tast",
  //dashItems: 168,
  displayErrors: true,
  height: 200,
  width:400,
  xAxiscategories:[],
  yAxisTitleText:"",
  yAxisMin:"",
  

  
  leafName: "",
  mainBranch: "",
  valueName: "",


  margin: 60,
  position: 60,
  titleText: "test"
  



}


  constructor(private communi:CommunicationService,private modalService:NgbModal,private formBuilder: FormBuilder,private renderer: Renderer2,
    private dataserv:DataServiceService, private dashserv:DashItemsServiceService, private primengConfig: PrimeNGConfig,private router: Router 
    ) { }

  addJsToElement(): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src='https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js';
    
    script.text= ``;
    this.renderer.appendChild(document.body, script);
    
    return script;
  }

  changeToggle(){
    if (!this.checked){this.checked=true}
    else (this.checked=false)

    this.valueURL=this.secondFormGroup.value.URLCtrl;
    console.log(this.valueURL)

    this.loginFormGroup= new FormGroup({

      'email':new FormControl(),
      'password':new FormControl(),
      'URL':new FormControl(this.secondFormGroup.value.URLCtrl),
    }

    

    

    )
    
  }

  open(content) {

    this.modalService.open(content, {
      centered: true,
      size: 'xl',
      backdrop: 'static'
      //  windowClass: 'custom-class' IMPORTANT !!!! encapsulation: ViewEncapsulation.None or NGdeep + css custom
      // https://stackoverflow.com/questions/53178873/ngbmodal-custom-class-styling 
    });
    

  }

  ngOnInit(): void {

   
    this.primengConfig.ripple = true;

    this.communi.recievedWidgetFromdash$.subscribe(
      Message=>{

        
        this.ddsh.cols=Message.cols;
    this.ddsh.rows=Message.rows;
    this.ddsh.x=Message.x;
    this.ddsh.y=Message.y;

    console.log( '////////////');
    console.log( this.ddsh);

        this.open(this.contentt);
        
      }
    )

   


    
    //this.secondFormGroup = this.formBuilder.group({
     /* ColsCtrl: ['', Validators.required],
      RowsCtrl: ['', Validators.required],
      YCtrl: ['', Validators.required],
      XCtrl: ['', Validators.required]*/

                        //URLCtrl: '',
      //RowsCtrl: '',
      //YCtrl: '',
      //XdCtrl: ''


      //'URLCtrl': new FormControl()
       // });

       this.firstFormGroup = new FormGroup({
       

        'rows':  new FormControl(),
      'y':  new FormControl(),
      'x':  new FormControl(),
      'cols': new FormControl()
      })

      this.secondFormGroup = new FormGroup({
        'URLCtrl': new FormControl()
      })

      


      
      this.FinalFormGroup = new FormGroup({
       

        'txt':  new FormControl(),
      'lien':  new FormControl(),
      
      'haut': new FormControl(),
      'larg': new FormControl(),
      'titre': new FormControl(),
      
      'marge': new FormControl(),
      'align': new FormControl(),
      'pos': new FormControl(),
      'label': new FormControl(),
      'color': new FormControl(),



      'MainBranch': new FormControl(),
      'LeafName': new FormControl(),
      'ValueName': new FormControl(),
      })

     
      this.addJsToElement().onload = () => {
      console.log('le script marche ');}
    }

    

    
 


  

  

  AddwidgetFormCtrl(){
    
    console.log(this.firstFormGroup.value);
    //alert(this.secondFormGroup.value)
    this.ddsh.cols=this.firstFormGroup.value.cols;
    this.ddsh.rows=this.firstFormGroup.value.rows;
    this.ddsh.x=this.firstFormGroup.value.x;
    this.ddsh.y=this.firstFormGroup.value.y;
  
    //this.communi.addWid(this.firstFormGroup.value)
    console.log(this.ddsh)
  }


  AddFirstCtrl(){
    
    

    this.srcWithoutpass.url=this.secondFormGroup.value.URLCtrl;

    this.src.src=this.secondFormGroup.value.URLCtrl
    console.log(this.src);
   
  }


  addloginformControl(){
    //console.log(this.loginFormGroup.value);

    let password=this.loginFormGroup.value.password;
    let username=this.loginFormGroup.value.email;
    let url=this.loginFormGroup.value.URL;

    


    let user={
      password,
      username
      
    };

    console.log(user)
    console.log(url)

    
    

    
  //https://mockapi.io/projects/6114f489aec65d0017e9dc0d
  //https://6114f489aec65d0017e9dc0c.mockapi.io/users1

  this.dataserv.loginuert(url,user).subscribe(

    res=>{
      console.log(res)
      //localStorage.setItem('token',res.access_token)
      //console.log(res.access_token)

      //this.src.src=url;
    //this.src.password=password;
    //this.src.username=username;

    this.src.password=this.loginFormGroup.value.password;
    this.src.username=this.loginFormGroup.value.email;
    this.src.src=this.loginFormGroup.value.URL;

    
    //console.log(user)
   console.log(this.src);
  // console.log(this.ddsh)

      //console.log(res)


    },

    err=>{
      console.log('ereeeeeeeeeeeeeeeeeeur')
      console.log(err)
      console.log(this.ddsh)
      console.log(this.src);

// à enlever après le test
      //this.src.url=url;
      //this.src.password=password;
      //this.src.username=username;




      this.src.password=this.loginFormGroup.value.password;
    this.src.username=this.loginFormGroup.value.email;
    this.src.src=this.loginFormGroup.value.URL;
  ////////////////////


      alert("Veuillez verifier vos identifiants")
    }

   )

  //   http://localhost:8000/auth/login

  
   
 /* 
   this.dataserv.readData(url).subscribe(
    res=> {
       console.log(res)
     }
   )*/

    
  }

  submitfin(){
/*
    console.log(this.FinalFormGroup.value)

    this.barop.height=this.FinalFormGroup.value.haut,
    this.barop.width=this.FinalFormGroup.value.larg,
    this.barop.titleText=this.FinalFormGroup.value.titre,
    this.barop.margin=this.FinalFormGroup.value.marge,
    this.barop.align=this.FinalFormGroup.value.align,
    this.barop.position=this.FinalFormGroup.value.pos,
    this.barop.xAxiscategories=[],
    this.barop.yAxisTitleText='data',
    this.barop.yAxisMin=0,
    this.barop.credTxt=this.FinalFormGroup.value.txt,
    this.barop.credhrf=this.FinalFormGroup.value.lien,
    this.barop.displayErrors=true,
    this.barop.backgroundColor=this.FinalFormGroup.value.color

    console.log(this.barop)
    */

    //this.FinData.type=this.FinalFormGroup.value.Type;
    //this.FinData.name=this.FinalFormGroup.value.Name;
    let mainBranch:string=this.FinalFormGroup.value.MainBranch;
    let leafName:string=this.FinalFormGroup.value.LeafName;
    let valueName:string=this.FinalFormGroup.value.ValueName;



    

    
    
    this.dashserv.AddItem(this.ddsh).subscribe(
      data=>{
        console.log(data)
        this.data=data;
        console.log(this.data.id)
        
        this.dashserv.AddGraphItem(this.src,this.data.id).subscribe(dataa=>{
          console.log(dataa)
        })

       
        this.Opt.chartType =this.ChartType;
        this.Opt.leafName=this.FinalFormGroup.value.LeafName;
        this.Opt.mainBranch=this.FinalFormGroup.value.MainBranch;;
        this.Opt.valueName=this.FinalFormGroup.value.ValueName;

        console.log(this.Opt)
        
        


        
        this.dashserv.AddBarChartOpt(this.Opt,this.data.id).subscribe(dita=>{
          console.log(dita)
        })



        //////////hné add options///////////


        console.log(this.FinData)
    console.log(this.src)
    console.log(this.ddsh)
        this.modalService.dismissAll();
        //window.location.reload();
      }
    )
    


    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });

    /*
    setTimeout(()=>{

      this.ngOnInit();

    },300)
    */
    

  }




  addwidgetEm(){
    //this.addwidgetEmit.emit();

    //this.communi.addWid()
    let itemBack={
    
      cols: 3,
      rows: 3, 
      y: 2, 
      x: 2 
  
        }

    

    

        console.log(itemBack)
  }


  

  ClickDiv(){
    console.log("CLCIKEEED")
  }

  SelectDonutChart(){
    this.ChartType="pie"
    console.log(this.ChartType)
  }

  SelectBarChart(){
    this.ChartType="column"
    console.log(this.ChartType)
  }

  SelectLineChart(){
    this.ChartType="line"
    console.log(this.ChartType)
  }

}
