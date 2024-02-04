function carFactory(order) {

    let result = {}
    result.model = order.model

    if (order.power <= 90) {
        result.engine = { power: 90, volume: 1800 };
    } else if (order.power <= 120) {
        result.engine = { power: 120, volume: 2400 }
    } else {
        result.engine = { power: 200, volume: 3500 }
    }

    if (order.carriage == 'hatchback') {
        result.carriage = { type: 'hatchback', color: order.color }
    } else {
        result.carriage = { type: 'coupe', color: order.color }
    }

    if (order.wheelsize % 2 == 0) {
        order.wheelsize -= 1
    }

    result.wheels = Array(4).fill(order.wheelsize)

    return result;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)