import './App.css';
import getBaits from './tools/getBaits';
import fish from './fish.json'
import { useState } from 'react';

// const onDragEnd = (result) => {
//   console.log(result);
// };

const getReserves = (fishes) => {
  const reserves = fishes.map(
    fish => fish.reserves
  )
    .flat()

  return [...new Set(reserves)]
}

const handleDesiredClick = (fish, fishWithProps, updateFishWithProps) => {
  updateFishWithProps(fishWithProps.map(thisFish => {
    if (thisFish === fish) {
      return { ...thisFish, desired: !thisFish.desired }
    }
    return thisFish
  }))
}

const handleNuisanceClick = (fish, fishWithProps, updateFishWithProps) => {
  updateFishWithProps(fishWithProps.map(thisFish => {
    if (thisFish === fish) {
      return { ...thisFish, nuisance: !thisFish.nuisance }
    }
    return thisFish
  }))
}

const App = () => {
  const [fishWithProps, updateFishWithProps] = useState(
    fish
      .map(fish => { return { ...fish, desired: false, nuisance: false } })
      .sort((a, b) => a.name > b.name)
  )
  const reserves = getReserves(fishWithProps)

  const [reserve, updateReserve] = useState(reserves[0])

  const reserveFish = fishWithProps.filter(fish => fish.reserves.includes(reserve))

  return (
    <div className="App">
      <div>
        <div>
          <p>
            Reserves
          </p>
          <div className='ButtonContainer'>
            {
              reserves
                .map(
                  thisReserve =>
                    <button
                      className={`${thisReserve === reserve ? 'on' : 'off'}`}
                      onClick={() => updateReserve(thisReserve)}
                    >{thisReserve}</button>
                )
            }
          </div>
        </div>
        <div className="DesiredFish">
          <p>
            Desired Fish
          </p>
          <div className='ButtonContainer'>
            {
              reserveFish
                .map(
                  fish =>
                    <button
                      className={`${fish.desired ? 'on' : 'off'}`}
                      key={`${fish.name} desired`}
                      onClick={() => handleDesiredClick(fish, fishWithProps, updateFishWithProps)}>{fish.name}
                    </button>
                )
            }
          </div>
        </div>
        <div className="NuisanceFish">
          <p>
            Nuisance Fish
          </p>
          <div className='ButtonContainer'>
            {
              reserveFish
                .map(
                  fish =>
                    <button
                      className={`${fish.nuisance ? 'on' : 'off'}`}
                      key={`${fish.name} nuisance`}
                      onClick={() => handleNuisanceClick(fish, fishWithProps, updateFishWithProps)}>{fish.name}</button>
                )
            }
          </div>
        </div>
      </div>
      <div>
        <p>
          Baits:
        </p>
        {
          getBaits(fishWithProps)
        }
      </div>
      <footer>
        Baits are returned in the order listed in the in game handbook
      </footer>
    </div>
  );
}

export default App;
