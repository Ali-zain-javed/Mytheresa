import React, { useState } from "react";
import Link from 'next/link';
import { Context } from '../store/AppContext';

export default function Nav() {
  const [modal, setModal] = useState(false)
  const { globalDispatch, globalState } = Context();
  const watchList = globalState.watchList;

  const changeModalState = () => {
    setModal(!modal)
  }

  return (
    <>
      <div className="header">
        <a href="#default" className="logo">Mytheresa</a>
        <div className="header-right">
          <Link href="/"><a >Home</a></Link>
          <a href="#about">About</a>
          {watchList && <a style={{ cursor: 'pointer' }} onClick={changeModalState} class="notification">
            <span>Watchlist</span>
            <span class="badge">{watchList.length}</span>
          </a>}
        </div>
      </div>
      {modal && <div className="modal" id="modal">
        <div className="modal-content">
          <span className="close" onClick={changeModalState}>&times;</span>
          <h2>WatchList</h2>
          {
            watchList && watchList.map(item => {
              return <div style={{ textDecoration: 'underline', marginBottom: '8px' }}>{item}</div>
            })
          }
        </div>
      </div>
      }
    </>
  );
}
