import { MoviesApp } from '../components/MoviesApp';
import { useSearch } from "../hooks/useSearch";
import { useState } from 'react';

export const PeliculasMejoresCalificadasPage = () => {
  const [Page, setPage] = useState(1);
  const { data } = useSearch({ url: 'top_rated', page: Page });
  const pages = [1, 2, 3, 4, 5]
  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <>
      <div className="row" >
        <div className="col-sm-12 text-center" >
          <h2 style={{ fontFamily: 'monospace', color: 'teal' }}>MEJORES CALIFICADAS</h2>
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

        <hr />
        <div className="containe d-flex justify-content-center">
          <div className="nav-paginayion">
            <nav aria-label="..." >
              <ul className="pagination" >
                {pages.map((number) => (
                  <li key={number} className={`page-item ${Page === number ? 'active' : ''}`} style={{ backgroundColor: 'teal' }}>
                    <a style={{ backgroundColor: 'black' }} className="page-link" onClick={() => paginate(number)}>{number}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </>
  );
};
