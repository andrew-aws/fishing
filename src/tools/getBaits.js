const _ = require('lodash')

const removeBait = (fishToExclude, intersection) => {
    const reducedFish = fishToExclude.reduce(
        (accumulator, currentValue) =>
            _.difference(accumulator, currentValue.baits), intersection
    )

    return reducedFish
}

const getBaits = (fishToCatch, fishToExclude) => {
    const intersection = _.intersection(...fishToCatch.map(fish => fish.baits))
    const reducedIntersection = removeBait(fishToExclude, intersection)

    return reducedIntersection
}

export default getBaits;