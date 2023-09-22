const _ = require('lodash')

// const removeBait = (nuisanceFish, intersection) => {
//     const reducedFish = nuisanceFish.reduce(
//         (accumulator, currentValue) =>
//             _.difference(accumulator, currentValue.baits), intersection
//     )

//     return reducedFish
// }

const getBaits = (fish) => {

    const desiredFish = fish.filter(thisFish => thisFish.desired)
    const nuisanceFish = fish.filter(thisFish => thisFish.nuisanceFish)
    console.log(desiredFish.map(fish=> fish.name))
    console.log(nuisanceFish.map(fish=> fish.name))


    const intersection = _.intersection(...desiredFish.map(fish => fish.baits))
    const reducedIntersection = _.difference(intersection, nuisanceFish.map(fish => fish.baits).flat())

    return reducedIntersection
}

export default getBaits;