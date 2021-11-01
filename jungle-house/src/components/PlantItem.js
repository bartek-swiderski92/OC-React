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
