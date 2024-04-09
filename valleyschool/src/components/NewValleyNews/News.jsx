const NewsValley=()=>{
    const data=[
        {
         src:"https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_5/v1712334992/catlingabel/jydjlu8mhju5wnjqphx6/1440x585new-Kama-Bruce-Greetings-May2023--23-fotor-2024040591339.jpg"
        },
        {
            src:"https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1712259942/catlingabel/z6kifna1u2dl72rreqb1/JO-1440x585-Becky_and_Sara-Employees-May22-10-fotor-20240221142120.jpg"
           },
           {
            src:"https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1712259953/catlingabel/xbzyyxaufpjngd7l4kjf/1440x585EndofYearAssembly_20223-141-fotor-20240221143445.jpg"
           },
           {
            src:"https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1712259953/catlingabel/xbzyyxaufpjngd7l4kjf/1440x585EndofYearAssembly_20223-141-fotor-20240221143445.jpg"
           },
       
    ]
    return (
        <div className="bg-gray-200 relative z-10">

     <div className="flex justify-center items-center">
         <div className="grid grid-cols-2 gap-12 ">
            {data.map((d)=>(
                <div class="flex items-center justify-center max-h-32 max-w-96 mt-20">
                <a
                    class="relative block w-full max-md:w-56 max-md:h-56 max-sm:w-40 max-sm:h-40 bg-violet-900 group"
                    href="##"
                >
                    <img alt=""
                        class="absolute inset-0 object-cover 
                           w-full h-full max-md:w-56 max-md:h-56 max-sm:w-40 max-sm:h-40  group-hover:opacity-50"
                        src={d.src} 
                    />
                    <div class="relative p-5">
                        <div class="">
                            {/* Hidden content */}
                            <div
                                class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                            >
                                <div class="p-2">
                                    <p class="text-lg text-white text-center">
                                    This week on campus: Track Meet

Our Upper School Eagles Track and Field athletes hosted schools from throughout the city - in their only home meet of the season - and excelled in their events. Go Eagles!
                                    </p>
                                    {/* <button
                                        class="px-4 py-2 text-sm 
                                            text-white bg-green-600"
                                    >
                                        Visit site
                                    </button> */}
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </a>
            </div>
            ))}
         </div>
     </div>
        </div>
    )
}

export default NewsValley