import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SimpleSlider=()=>{
    const data=[
        {
          img:"https://resources.finalsite.net/images/v1558368219/catlingabel/nbigqta0qbxqdjqqtihy/clip-board-pencil-checklist.svg",
          data:"30% HIGHER SAT SCORES",
          review:"Compared with National Language"
        },
        {
            img:"https://resources.finalsite.net/images/v1558368219/catlingabel/nbigqta0qbxqdjqqtihy/clip-board-pencil-checklist.svg",
            data:"30% HIGHER SAT SCORES",
            review:"Compared with National Language"
          },
          {
            img:"https://resources.finalsite.net/images/v1558368219/catlingabel/nbigqta0qbxqdjqqtihy/clip-board-pencil-checklist.svg",
            data:"30% HIGHER SAT SCORES",
            review:"Compared with National Language"
          },
          {
            img:"https://resources.finalsite.net/images/v1558368219/catlingabel/nbigqta0qbxqdjqqtihy/clip-board-pencil-checklist.svg",
            data:"30% HIGHER SAT SCORES",
            review:"Compared with National Language"
          },
          {
            img:"https://resources.finalsite.net/images/v1558368219/catlingabel/nbigqta0qbxqdjqqtihy/clip-board-pencil-checklist.svg",
            data:"30% HIGHER SAT SCORES",
            review:"Compared with National Language"
          }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return (
     <div className="w-3/4 m-auto">
       <div className="mt-20">
       <Slider  {...settings}>
      {data.map((d)=>(

        <div className="bg-white h-[300px] text-black rounded-xl shadow-md">
         <div className=" flex justify-center">
            <img src={d.img} alt=""/>
         </div>
         <div className="flex flex-col justify-center items-center gap-4 p-4">
            <p className="text-xl font-semibold">{d.data}</p>
     
            <p className="text-center">{d.review}</p>
         </div>
        </div>
      )
      )}
      </Slider>
       </div>
     </div>
    )
}

export default SimpleSlider