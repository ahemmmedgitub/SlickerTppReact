// Write your code here

import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <h3 className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-logo" />
      <h1 className="sub-heading">{name}</h1>
      <p className="description">{description}</p>
    </h3>
  )
}

export default PlanetItem
