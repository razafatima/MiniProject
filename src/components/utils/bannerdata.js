import tesla1 from '../images/tesla1.avif';
import tesla2 from '../images/tesla2.avif';
import tesla3 from '../images/tesla3.avif';
import tesla4 from '../images/tesla4.avif';
import tesla5 from '../images/tesla5.avif';
import tesla6 from '../images/tesla6.avif';
import solarPanel from '../images/house1.avif';
import solarRoof from '../images/solarroof.avif';
import powerWall from '../images/powerwall.avif';
import accessories from '../images/accessories.avif';
// import cybertruck from '../images/cybertruck.png';


const Bannerdata = [
    { 
        "id": 1,
        "img": tesla1,
        "title": "Model Y",
        "links": {
             "href": "#leasing",
             "text": "$299/mo Leasing",
        },
        "subText":{
            "text": "From $31,490",
            "supText": "1",
            "afterText": "After Est. Savings"

        }
},
{ 
    "id": 2,
    "img": tesla2,
    "title": "New Model Y",
    "text": "Deliveries Begin in March",
},
{ 
    "id": 3,
    "img": tesla3,
    "title": "Model 3",
    "links":{
        "main":{
        "href": "#lease",
        "text": "$249/mo Lease Ending March 3"
    },
    },
    "subText":{
        "secondary": {
            "text": "From $29,9902",
            "supText": "2",
            "afterText": "After Est. Savings"
        }

        }
},
{ 
    "id": 4,
    "img": tesla4,
    "text":"$7,500 Federal Tax Credit Available",
    "links": {
        "primary":{
        "href": "#leasing",
         "text": "$749/mo Leasing",
        },        
    },
},
{     
    "id": 5,
    "img": tesla5,
    "title": "Model X",
    "text": "Free Supercharging Included",
    "links":{
        "link":{
            "href": "#leasing",
            "text": "$1,149/mo Leasing"
        }
    }
},
{
   "id": 5,
   "img": tesla6,
   "title": "Model S",
   "text": "Free Supercharging Included",
   "links":{
        "primarylink":{
              "href": "#leasing",
              "text":"$998/mo Leasing",
        }
   }
},
{
   "id": 6,
   "img": solarPanel,
   "title": "Solar Panels",
   "links":{
         "solarlink":{
            "href": "#leasing",
            "text": "Schedule a Virtual Consultation",
         }
   }
},
{
   "id": 7,
   "img": solarRoof,
   "title": "Solar Roof",
   "text": "Produce Clean Energy From Your Roof",
},
{
    "id": 8,
    "img": powerWall,
    "title": "Power Wall",
 },

 {
    "id": 9,
    "img": accessories,
    "title": "Accessories",
 },


];
export default Bannerdata;