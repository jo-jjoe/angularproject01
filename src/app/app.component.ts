import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'develop';




passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];


  ngOnInit(){
   

    const p1=new Promise((resolve,rej)=>{
      setTimeout(()=>{
        resolve ("success")

      },4000)
    })
    const getdata=async () => {
      try{
        console.log("hiiiiii")
        const data=await p1
        console.log(data)


      }
      catch{

      }
      
    }
    getdata()
    


  }
}
  
  
