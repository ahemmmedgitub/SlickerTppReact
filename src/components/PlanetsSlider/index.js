// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="slider-container">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem eachPlanet={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
