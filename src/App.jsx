
import {Routes, Route} from 'react-router-dom'
import {PeliculasMejoresCalificadasPage} from './pages/PeliculasMejoresCalificadasPage'
import { PeliculasCarteleraPage } from './pages/PeliculasCarteleraPage'
import { ProximosEstrenosPage} from './pages/ProximosEstrenosPage'
import { NavBarApp } from './components/NavBarApp'
import { DetailsPage } from './pages/DetailsPage'
// import {DetailsPage} from './pages/DetailsPage'



export const App = () => {
  return (
   <>
   <NavBarApp></NavBarApp>
   <Routes>
    <Route path='/' element={<ProximosEstrenosPage></ProximosEstrenosPage>}> </Route>
    <Route path='cartelera' element={<PeliculasCarteleraPage></PeliculasCarteleraPage>}> </Route>
    <Route path='mejoresCalificadas' element={<PeliculasMejoresCalificadasPage></PeliculasMejoresCalificadasPage>}> </Route>
    {/* <Route path='/Details/:id' element={<DetailsPage> </DetailsPage>}></Route> */}
    <Route path='/Details/:id' element={<DetailsPage></DetailsPage>} ></Route>

   </Routes>
   </>
  )
}
