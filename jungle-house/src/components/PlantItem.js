import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem({ name, cover, id, light, water }) {
    return (

        <li key={id} className='jh-plant-item'>
            {/* <img src={cover} alt={`${name} cover`} className="jh-plant-item-cover" /> */}

            {name}

            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>

    )
}

export default PlantItem

// {plantList.map((plant) => (
//   <li key={plant.id} className='jh-plant-item'>
//     {plant.isBestSale && <span>🔥</span>}
//     {plant.name}
//     <CareScale careType='water' scaleValue={plant.water} />
//     <CareScale careType='light' scaleValue={plant.light} />
//   </li>
// ))}