'use client'

import { CarCard, Customfilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import { CarState } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([])
  const [loading, setLoading] = useState(false)

  // search state
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

    // filter state
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)

    // pagination state
    const [limit, setLimit] = useState(10)

    const getCars = async () => {
      setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer:  manufacturer.toLowerCase() || "",
        model: model || "",
        fuel: fuel || "",
        limit: limit || 10,
        year: year || 2022,
      });
      setAllCars(result)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
    }

    useEffect(() =>{
      getCars()
    }, [fuel, year, limit, model, manufacturer])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer}
          setModel={setModel} />
          <div className="home__filter-container">
            <Customfilter  options={fuels}
            setFilter={setFuel}/>
            <Customfilter options={yearsOfProduction}
            setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => <CarCard key={uuidv4()} car={car} />)}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <span className="loader"></span>
              </div>
            )}
            <ShowMore
            pageNumber={limit / 10}
            isNext={limit > allCars.length}
            setLimit={setLimit} />
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
