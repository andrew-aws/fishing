const _ = require('lodash')

const getBaits = (fish) => {

    const desiredFish = fish.filter(thisFish => thisFish.desired)
    const nuisanceFish = fish.filter(thisFish => thisFish.nuisance)

    const intersection = _.intersection(...desiredFish.map(fish => fish.baits))
    const reducedIntersection = _.difference(intersection, nuisanceFish.map(fish => fish.baits).flat())

    return reducedIntersection
}

export default getBaits;