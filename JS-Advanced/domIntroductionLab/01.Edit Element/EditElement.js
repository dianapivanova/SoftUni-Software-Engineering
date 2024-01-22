function editElement(reference, match, replacer) {
    let el = reference.textContent
    reference.textContent = el.split(match).join(replacer)

}