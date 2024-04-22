import { MoviesApp } from '../components/MoviesApp';
import { useSearch } from "../hooks/useSearch";

export const PeliculasMejoresCalificadasPage = () => {
  const { data } = useSearch('top_rated');
  
  return (
    <>
      <div className="row" >
        <div className="col-sm-12 text-center" >
          <h2 style={{ fontFamily: 'monospace',color:'teal' }}>MEJORES CALIFICADAS</h2>
        </div>
     </div>
       <div className="container" style={{ backgroundColor: 'teal' }}>
        {data && data.results ? (
          <>
            <MoviesApp movies={data.results} />
          </>
        ) : (
          <div>No data</div>
        )}
      </div>
      
    </>
  );
};