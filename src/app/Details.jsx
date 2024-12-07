import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
import { tipos } from "../utils/helpers"

function Details() {
    const params = useParams()
    const [pokemon, setPokemon] = useFetch()

    useEffect(() => {
      if (params.name) getPokemon()
    }, [params.name])

  const getPokemon = () => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  }  

  const types = pokemon?.types.map(type => type.type.name)

  return (
    <div className="poke__details-content">
      <Link className="poke__details-link" to="/pokedex">{'⟵'} Volver</Link>

      <div>
        <div className="poke__details-img">
          <img 
            src={pokemon?.sprites?.other?.dream_world?.front_default} alt=
            {pokemon?.name} 
          /> 
        </div>
        <div>
          <span># {pokemon?.id?.toString().padStart(3, '0')}</span>
          <h2 className="poke__details-name">{pokemon?.name}</h2>

          <div>
            <span>
              <span className="poke__details-peso">Peso</span>
              {pokemon?.weight}
            </span>

            <span>
              <span className="poke__details-altura">Altura</span>
              {pokemon?.height}
            </span>
          </div>
          <div>
            <div>
              <h3>Tipo</h3>
              <div className="poke__details-tipo">
                {types?.map(type => (
                  <span key={type}>{tipos[type]}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Habilidades</h3>
              <div className="poke__details-habilidades">
                {pokemon?.abilities?.map(data => (
                  <span key={data.ability.name}>{data.ability.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  )
}

export { Details }