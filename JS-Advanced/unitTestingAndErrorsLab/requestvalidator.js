function requestValidator(object) {
    let methods = ["GET", "POST", "DELETE", "CONNECT"];
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let uRiPattern = /^[A-Za-z0-9\.]+$/
    let msgPattern = /^[^<>\\'"&]+$/

    if (!object.method) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!object.uri) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!object.version) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!object.message && object.message !== '') {
        throw new Error(`Invalid request header: Invalid Message`);
    }


    if (!methods.includes(object.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    let match = object.uri.match(uRiPattern)
    if (!match && object.uri !== '*') {
        throw new Error(`Invalid request header: Invalid URI`)
    }

    if (!versions.includes(object.version)) {
        throw new Error(`Invalid request header: Invalid Version`)
    }

    let matchMessage = object.message.match(msgPattern)
    if (!matchMessage && object.message !== '') {
        throw new Error(`Invalid request header: Invalid Message`)
    }

    console.log(object)

}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
)