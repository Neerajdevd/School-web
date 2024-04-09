


const ImagePg=()=>{
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
       
    ]


    return (
       <div className="flex gap-2 max-md:flex-wrap max-lg:flex-row max-sm:justify-center max-lg:flex-wrap">
       <div>
        <p className="text-gray-500 text-xl font-serif font-semibold">CHOOSE ANOTHER STORY</p>
       </div>
       <div>
  <div className="flex flex-wrap gap-3 sm:flex-row md:flex-col  max-sm:justify-center lg:flex-row">
    {data.map((d)=>(
      <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
        <img
          src={d.src}
          class="max-w-xs flex max-sm:flex-wrap cursor-pointer transform h-auto transition duration-300 ease-in-out hover:scale-110 hover:shadow-black/30"
          alt="Louvre" />
      </div>
    ))}
  </div>
</div>
       </div>
    )
}

export default ImagePg



