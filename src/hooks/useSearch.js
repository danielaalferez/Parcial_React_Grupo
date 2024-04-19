import { useEffect, useState } from "react";
export const useSearch=(url)=>{
    const [data, setData]=useState(null);


useEffect(()=>{
    const fetchData=async()=>{
        
            const fullUrl= `https://api.themoviedb.org/3/movie/${url}?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`;
            const response=await fetch(fullUrl);
            const jsonData=await response.json();
            setData(jsonData);  

        
    };

    fetchData();//recupera los datos

}, [url]);
    return{ data};


};

export const NewDate=(old_date)=>{
    const months=[
        {id:1, name:'enero'},
        {id:2, name:'febrero'},
        {id:3, name:'marzo'},
        {id:4, name:'abril'},
        {id:5, name:'mayo'},
        {id:6, name:'junio'},
        {id:7, name:'julio'},
        {id:8, name:'agosto'},
        {id:9, name:'septiembre'},
        {id:10, name:'octubre'},
        {id:11, name:'noviembre'},
        {id:12, name:'diciembre'}


    ];
    const array_date=old_date.split("-");
    const year=array_date[0];
    const month_id=parseInt(array_date[1], 10);
    const month=months.find(element=> element.id===month_id);
    const day=array_date[2];
    return `${day} de ${month.name} de ${year}`;


    
}

