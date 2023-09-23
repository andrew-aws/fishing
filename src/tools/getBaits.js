const _ = require('lodash')

const getBaits = (fish) => {

    const desiredFish = fish.filter(thisFish => thisFish.desired)
    if (desiredFish.length === 0) {
        return 'Choose some desired fish'
    }
    const nuisanceFish = fish.filter(thisFish => thisFish.nuisance)

    const intersection = _.intersection(...desiredFish.map(fish => fish.baits))
    const reducedIntersection = _.difference(intersection, nuisanceFish.map(fish => fish.baits).flat())

    return reducedIntersection.join(', ')
}

export default getBaits;