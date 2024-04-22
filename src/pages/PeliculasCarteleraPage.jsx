import {MoviesApp} from '../components/MoviesApp'
import { useSearch } from "../hooks/useSearch";


export const PeliculasCarteleraPage = () => {
    const { data} = useSearch('now_playing');
    
    
  return (
      <>
       <div className="row">
        <div className="col-sm-12 text-center">
          <h2 style={{ fontFamily: 'monospace',color:'teal' }}>PELICULAS CARTELERA</h2>
        </div>
       </div>
        <div className="container" style={{ backgroundColor: 'teal' }}>
        {data && data.results?(
      
          <>
          <MoviesApp movies={data.results}/>

          </>
        
         ):(
          <div> No data</div>
         )}

       </div>
    </>
  )
}