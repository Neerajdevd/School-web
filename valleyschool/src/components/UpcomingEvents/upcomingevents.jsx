

const Upcomingeventscards=()=>{
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
        <div>
   {data.map((d)=>(
    <div>
    <a href class="flex flex-col max-md:flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row mt-5">
    <img class="object-cover w-full md:w-48 rounded-t-lg md:rounded-l-lg md:rounded-none md:h-auto h-96" src={d.src} alt=""/>
    <div class="flex flex-col  p-4 leading-normal ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#0074cc] ">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>

    </div>
   
   ))}

        </div>
        

    )
}

export default Upcomingeventscards