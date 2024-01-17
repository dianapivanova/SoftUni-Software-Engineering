function cityRecord(name, population, treasury) {
    let obj = {}
    obj[name] = name
    obj['population'] = population
    obj['treasury'] = treasury


    console.log(name)
    return obj;


}
cityRecord('Santo Domingo',
    12000,
    23500)