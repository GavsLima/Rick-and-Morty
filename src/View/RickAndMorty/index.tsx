import api from "../../service/api";
import React, { useState, useEffect, } from "react";
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react';

import Morty from '../../assets/animation/morty-dance-loader.json'


interface IResults {
    id: number;
    image: 'string';
    name: 'string';
    url: 'string';
}

interface ICount {
    count: number;
    pages: number;
}

interface IResponseData {
    info: ICount;
    results: IResults[];
}

const RickAndMorty: React.FC = () => {
    const [data, setData] = useState<IResults[]>([]);
    const [page, setPage] = useState<number>(1);
    const [info, setInfo] = useState<ICount>({} as ICount);
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        setIsLoad(true);
        api.get<IResponseData>(`?page=${page}`).then(
            response => {
                console.log(response.data),
                    setInfo(response.data.info),
                    setData(response.data.results)
                console.log('return ', response.data.results)
            }
        ).catch(e => console.log(e))
            .finally(() => {
                setTimeout(() => {
                    setIsLoad(false)
                }, 1000)
            });
    }, [page]);

    const defaultOptions = {
        loop: true
    }

    if (isLoad) {
        return (
            <div className="wait"
            >
                <div>
                    <p>WAIT...</p>
                </div>
                <div className="morty">
                    <Lottie
                        animationData={Morty}
                    />
                    <Lottie
                        animationData={Morty}
                    />
                    <Lottie
                        animationData={Morty}
                    />
                </div>
            </div>
        )
    }

    return (

        <div className="conteiner">
            <h1>Personagens</h1>
            <div className="personagens">
                {data.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <a href={item.url}>Clique aqui para ver mais</a>
                    </div>)
                )}
            </div>
            <div className="buttons">
                <button className="button" onClick={() => setPage(page - 1)} disabled={page <= 1}> Anterior </button>
                <button className="button" onClick={() => setPage(page + 1)} disabled={page >= info.pages}> Próximo </button>
            </div>
        </div>
    )
}
export default RickAndMorty;