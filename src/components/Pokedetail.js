import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearPoke } from "../actions/index";
import { useEffect } from "react";
import img from "../img/back.jpg";

import s from "../components/Pokedetails.module.css";

function PokeDetail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => {
      dispatch(clearPoke());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  var myPoke = useSelector((state) => state.filteredPokemons);

  return (
    <div className={s.back} style={{ backgroundImage: `url(${img})` }}>
      <div className={s.center}>
        <div className={s.card}>
          {myPoke?.length && myPoke ? (
            <div className={s.text}>
              <h1>Pokemon {myPoke[0]?.name}</h1>
              <img id={s.image} src={myPoke[0]?.img} alt="" />

              <p>Id: {myPoke[0]?.id}</p>
              <p>Height: {myPoke[0]?.height}</p>
              <p>Weight: {myPoke[0]?.weight} </p>
              <p>Hp: {myPoke[0]?.hp}</p>
              <p>Attack: {myPoke[0]?.attack} </p>
              <p>Defense:{myPoke[0]?.defense}</p>

              <p> Speed: {myPoke[0]?.speed}</p>
              <p>
                {myPoke[0]?.types?.map((t, i) => (
                  <span key={i}>{t.name + " "}</span>
                ))}
              </p>
            </div>
          ) : (
            <div className={s.text}>
              <h1>Pokemon {myPoke?.name}</h1>
              <img id={s.image} src={myPoke?.img} alt="" />
              <p>Id: {myPoke?.id}</p>
              <br></br>
              <p>
                Type: {myPoke?.tipos?.[1]?.name} {myPoke?.tipos?.[0]?.name}
              </p>
              <p>Height: {myPoke?.height}</p>
              <p>Weight: {myPoke?.weight}</p>
              <p>HP: {myPoke?.hp}</p>
              <p>Attack: {myPoke?.attack}</p>
              <p>Defense: {myPoke?.defense}</p>
              <p>Speed: {myPoke?.speed}</p>
            </div>
          )}
          <div>
            <NavLink to="/pokemons">
              <button className={s.box}>Back</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeDetail;
