import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Carousel } from '../../components'
import { top, popularUrl, upComingUrl } from '../../utils/Constant'

// this is main component in which Carousels of different category displaying 

export default function Home() {
    // Initialize Main state
    const [popular, setPopular] = useState([]);
    const [topRated, settopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);
    const [loading, setLoading] = useState(false)

    ///on component loading fetch api call for getting movies data
    useEffect(() => {
        setLoading(true)
        fetchPopular();
        fetchTopRated();
        fetchUpComing();
    }, []);

    //Method to fetch most popular movies
    const fetchPopular = async () => {
        try {
            const data = await fetch(popularUrl);
            const movies = await data.json();
            setPopular(movies.results);
            console.log(movies);
        }
        catch (ex) {

        }
    };

    //Method to fetch most Top Rated movies
    const fetchTopRated = async () => {
        try {
            const data = await fetch(top);
            const movies = await data.json();
            settopRated(movies.results);
            console.log("top", movies);
        }
        catch (ex) {

        }
    };

    //Method to fetch Upcoming movies
    const fetchUpComing = async () => {
        try {
            const data = await fetch(upComingUrl);
            const movies = await data.json();
            setUpComing(movies.results);
            console.log("upcoming", movies);
            setLoading(false)
        }
        catch (ex) {
            setLoading(false)
        }
    };

    ///when server fetch call happening then loader will run
    if (loading) {
        return <div className="vertical-center loader"></div>
    }

    return (
        <div className="container">
            <div className="vertical-center">
                <h4>Popular</h4>
                <div className="slider">
                    <Carousel carousel={popular} />
                </div>
                <h4>Top Rated</h4>
                <div className="slider">
                    <Carousel carousel={topRated} />
                </div>
                <h4>Upcoming</h4>
                <div className="slider">
                    <Carousel carousel={upComing} />
                </div>
            </div>
        </div>
    );
}
