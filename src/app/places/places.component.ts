import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  allPlaces;
  constructor() { }

  ngOnInit(): void {
    this.getAllPlaces();
  }
  getAllPlaces(){
    this.allPlaces = [
      {
        name:'KARIBA REDD+- ZIMBABWE',
        image:'../../assets/place.jpg',
        desc1:'Reduced Emissions from deforestation',
        desc2:'957,842 lbs offset',
        desc3:'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor. ',
        buyAvailable:1,
        price:'7.50'
      },
      {
        name:'ARCATA SUNNYBRAE TRACT - USA',
        image:'../../assets/place.jpg',
        desc1:'Improved Forest Management',
        desc2:'710,093 lbs offset',
        desc3:'Preservation of large tract of coastal Redwood and Dauglas fir that were slated for harvesting by the timber company.',
        buyAvailable:0,
        price:''
      },
      {
        name:'WOLF CREEK LANDFILL - USA',
        image:'../../assets/place.jpg',
        desc1:'Landfill Methane Gas Capture',
        desc2:'2,005,214 lbs offset',
        desc3:'Landfill methane gas-to-energy facility that provides significant environmental benefits to the surrounding area.',
        buyAvailable:0,
        price:''
      },
      {
        name:'TERRAPASS MIXED PORTFOLIO - MIXED',
        image:'../../assets/place.jpg',
        desc1:'Mixed',
        desc2:'241,967 lbs offset',
        desc3:'Greenhouse gas reductions made at a variety of projects, including: reforestation, methane capture, and renewable energy.',
        buyAvailable:0,
        price:''
      },
      {
        name:'GASTON COUNTY LANDFILL - USA',
        image:'../../assets/place.jpg',
        desc1:'Landfill Methane Gas Capture',
        desc2:'721,663 lbs offset',
        desc3:'Voluntary collection and destruction of landfill methane in two open flares and three internal combustion engine generators.',
        buyAvailable:0,
        price:''
      },
      {
        name:'MYAMYN CONSERVATION - AUSTRALIA',
        image:'../../assets/place.jpg',
        desc1:'Reforestation & Hyrdopower',
        desc2:'995,908 lbs offset',
        desc3:'Supporting biodiversity and reforestration in Victoria, Australia; along with carbon reduction from a hyrdopower plant in Vietnam.',
        buyAvailable:1,
        price:'7.50'
      },
      {
        name:'NATURAL PACT LAND ART - COSTA RICA',
        image:'../../assets/place.jpg',
        desc1:'Reforestation through Land Art',
        desc2:'327 lbs offset',
        desc3:"Unique 'land art' reforestation and conservation of forests that extend an important biological corridor for many endangered species.",
        buyAvailable:0,
        price:''
      },
      {
        name:'NATURE LAB URBAN FORESTRY - CANADA',
        image:'../../assets/place.jpg',
        desc1:'Urban Reforestationt',
        desc2:'13,033 lbs offset',
        desc3:"Rehabilitating degraded urban and sub-urban areas through reforestation, adding significant greenery and restoring biodiversity.",
        buyAvailable:1,
        price:'22.50'
      }
    ]
  }

}
