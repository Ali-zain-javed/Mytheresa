
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useRouter } from 'next/router'
//common commpont of Carousel 

export default function Carousel({
    carousel = [],
    ...props
}) {

    const router = useRouter()
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };

    ///image click router change
    const handleClick = (item) => {
        router.push(`/categoryDetail?id=${item.id}`);
    };

    return (
        <div className="slides">
            {carousel && carousel.length > 0 && carousel.map((item, index) => {
                return (<div key={`slide-${index + 1}`} id={`slide-${index + 1}`} onClick={() => handleClick(item)}>
                    <Image
                        src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
                        alt={item.path}
                        layout="fill"
                        loader={myLoader}
                    />
                    <div className="textOverImage">{item.title}</div>
                </div>)
            })}
        </div>
    );
}

Carousel.propTypes = {
    carousel: PropTypes.array,
};

Carousel.defaultProps = {
    carousel: [],
};
