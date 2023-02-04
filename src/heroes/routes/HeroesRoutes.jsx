import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPage, DcPage } from "../pages";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div class="container">
            <Routes>
                <Route path="marvel" element={ <MarvelPage /> }/>
                <Route path="dc" element={ <DcPage /> } />

                <Route path="search" element={ <SearchPage /> }/>
                <Route path="hero" element={ <HeroPage /> } />

                <Route path="/" element={ <Navigate to="/marvel" /> } />
            </Routes>
        </div>
    </>
  )
}
