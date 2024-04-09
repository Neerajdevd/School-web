import Navbar from "../Navbar/navbar"
import Crousell from "../crousel/crousell"
import Intregitypage from "../IntegrityComponent/integrity"
import SimpleSlider from "../CardSlider/cardslider"
import Footerhome from "../Footer/footer"
import ImagePg from "../ChooseAnotherStory/imagepages"
import Upcomingeventscards  from "../UpcomingEvents/upcomingevents"
import LatestPost from "../UpcomingEvents/latestpost"
import NewsValley from "../NewValleyNews/News"

const Home =()=>{
    

    return(
        <div>
       


        <div className=" ">

        <Navbar/>
        
       <Crousell/>
        </div>
        
      
       <div className="mt-20">
       <h2 className="text-[#0074cc] text-2xl font-serif flex justify-center items-center italic"> NewValleyNews</h2>
       <NewsValley/>
       </div>
       <div className="text-2xl text-blue-400 flex justify-center italic items-center mt-20 font-serif">
        Key facts
       </div>
      
       <SimpleSlider/>
       <div className="mt-20">

       <Intregitypage/>
       </div>

       <div className="mt-14">
        <ImagePg/>
       </div>
       <div className="flex gap-5 mt-20 max-md:flex-wrap max-lg:flex-wrap">
           <div>
           <p className="text-[#0074cc] font-serif text-xl justify-center 	font-style: italic; italic">Upcoming Events</p>
            <Upcomingeventscards/>
           </div>
           <div>
           <div className="flex justify-between">
           <div>

           <p className="text-[#0074cc] italic">LatestPost</p>
           </div>

           <div>
            <p>Connect With us</p>
           </div>

           </div>
            <LatestPost/>
           </div>
       </div>
       <div className="mt-20">
        <h3 className="text-xl font-semibold text-blue-800 flex justify-center items-center">Nature Valley School</h3>
        <p className="text-lg font-thin font-serif text-gray-500 flex justify-center items-center">An independent preschool through 5th grade day school in Jeolikot,Nainital</p>
       </div>
       <Footerhome/>
       

        </div>
       
    )
}

export default Home