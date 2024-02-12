import { expect } from "chai";
import { rgbToHexColor } from "./rGBtOhEX.js"

describe("Suite", function () {
    it('works with all vars = 0', function () {
        let red = 0
        let green = 0
        let blue = 0
        expect(rgbToHexColor(red, green, blue)).to.equal('#000000')
    })

    it('works with all vars = 1', function () {
        let red = 1
        let green = 1
        let blue = 1
        expect(rgbToHexColor(red, green, blue)).to.equal('#010101')
    })

    it('works with all vars = 254', function () {
        let red = 254
        let green = 254
        let blue = 254
        expect(rgbToHexColor(red, green, blue)).to.equal('#FEFEFE')
    })

    it('works with all vars = 255', function () {
        let red = 255
        let green = 255
        let blue = 255
        expect(rgbToHexColor(red, green, blue)).to.equal('#FFFFFF')
    })

    it('works with red = 255, green = 0, blue = 0', function () {
        let red = 255
        let green = 0
        let blue = 0
        expect(rgbToHexColor(red, green, blue)).to.equal('#FF0000')
    })

    it('works with red = 0, green = 255, blue = 0', function () {
        let red = 0
        let green = 255
        let blue = 0
        expect(rgbToHexColor(red, green, blue)).to.equal('#00FF00')
    })

    it('works with red = 0, green = 0, blue = 255', function () {
        let red = 0
        let green = 0
        let blue = 255
        expect(rgbToHexColor(red, green, blue)).to.equal('#0000FF')
    })

    it('works with 1 var = 255 and 1 var 0', function () {
        let red = 255
        let green = 1
        let blue = 2
        expect(rgbToHexColor(red, green, blue)).to.equal('#FF0102')
    })

    it('returns undefined with negative values', function () {
        let red = -1
        let green = 0
        let blue = -8
        expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
    })

    it('returns undefined with all arguments has negative values', function () {
        let red = -1
        let green = -50
        let blue = -8
        expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
    })

    it('returns undefined with 2 arguments has negative values', function () {
        let red = -1
        let green = 0
        let blue = -8
        expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
    })

    it('returns undefined with bigger valuest than 255', function () {
        let red = 256
        let green = 256
        let blue = 0
        expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
    })

    it('returns undefined with arguments that are a string', function () {
        let red = "0"
        let green = "1"
        let blue = 0
        expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
    })

    it('returns undefined with arguments that are an array', function () {
        let red = []
        let green = 2
        let blue = 0
        expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
    })

    it('returns undefined with arguments that are not integers ', function () {
        let red = 256.5
        let green = 250
        let blue = 0
        expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
    })

    describe("Suite", function () {
        it('works with all vars = 0', function () {
            let red = 0
            let green = 0
            let blue = 0
            expect(rgbToHexColor(red, green, blue)).to.equal('#000000')
        })

        it('works with all vars = 255', function () {
            let red = 255
            let green = 255
            let blue = 255
            expect(rgbToHexColor(red, green, blue)).to.equal('#FFFFFF')
        })

        it('works with 1 var = 255', function () {
            let red = 255
            let green = 0
            let blue = 2
            expect(rgbToHexColor(red, green, blue)).to.equal('#FF0002')
        })

        it('works with 1 var = 255 and 1 var 0', function () {
            let red = 255
            let green = 1
            let blue = 2
            expect(rgbToHexColor(red, green, blue)).to.equal('#FF0102')
        })

        it('returns undefined with negative values', function () {
            let red = -1
            let green = 0
            let blue = -8
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with bigger valuest than 255', function () {
            let red = 256
            let green = 256
            let blue = 0
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with arguments that are a string', function () {
            let red = "0"
            let green = "1"
            let blue = 0
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with arguments that are an array', function () {
            let red = []
            let green = 2
            let blue = 0
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with arguments that are not integers ', function () {
            let red = 256.5
            let green = 250
            let blue = 0
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with all arguments not being integers ', function () {
            let red = 256.5
            let green = -7.5
            let blue = 2.3
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with all arguments being boolean ', function () {
            let red = false
            let green = false
            let blue = false
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with an argument being object ', function () {
            let red = { name: 'Ivan' }
            let green = false
            let blue = false
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with all arguments being floating-point nums ', function () {
            let red = 2.3
            let green = 200.5
            let blue = 100.3
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        it('returns undefined with all arguments being strings ', function () {
            let red = '2.3'
            let green = '200.5'
            let blue = '1.1'
            expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
        })

        describe("Suite", function () {
            it('works with all vars = 0', function () {
                let red = 0
                let green = 0
                let blue = 0
                expect(rgbToHexColor(red, green, blue)).to.equal('#000000')
            })

            it('works with all vars = 255', function () {
                let red = 255
                let green = 255
                let blue = 255
                expect(rgbToHexColor(red, green, blue)).to.equal('#FFFFFF')
            })

            it('works with 1 var = 255 and 1 var 0', function () {
                let red = 255
                let green = 1
                let blue = 2
                expect(rgbToHexColor(red, green, blue)).to.equal('#FF0102')
            })

            it('returns undefined with negative values', function () {
                let red = -1
                let green = 0
                let blue = -8
                expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
            })

            it('returns undefined with all arguments has negative values', function () {
                let red = -1
                let green = -50
                let blue = -8
                expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
            })

            it('returns undefined with 2 arguments has negative values', function () {
                let red = -1
                let green = 0
                let blue = -8
                expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
            })

            it('returns undefined with bigger valuest than 255', function () {
                let red = 256
                let green = 256
                let blue = 0
                expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
            })

            it('returns undefined with arguments that are a string', function () {
                let red = "0"
                let green = "1"
                let blue = 0
                expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
            })

            it('returns undefined with arguments that are an array', function () {
                let red = []
                let green = 2
                let blue = 0
                expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
            })

            it('returns undefined with arguments that are not integers ', function () {
                let red = 256.5
                let green = 250
                let blue = 0
                expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
            })

            describe("Suite", function () {
                it('works with all vars = 0', function () {
                    let red = 0
                    let green = 0
                    let blue = 0
                    expect(rgbToHexColor(red, green, blue)).to.equal('#000000')
                })

                it('works with all vars = 255', function () {
                    let red = 255
                    let green = 255
                    let blue = 255
                    expect(rgbToHexColor(red, green, blue)).to.equal('#FFFFFF')
                })

                it('works with 1 var = 255', function () {
                    let red = 255
                    let green = 0
                    let blue = 2
                    expect(rgbToHexColor(red, green, blue)).to.equal('#FF0002')
                })

                it('works with 1 var = 255 and 1 var 0', function () {
                    let red = 255
                    let green = 1
                    let blue = 2
                    expect(rgbToHexColor(red, green, blue)).to.equal('#FF0102')
                })

                it('returns undefined with negative values', function () {
                    let red = -1
                    let green = 0
                    let blue = -8
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with bigger valuest than 255', function () {
                    let red = 256
                    let green = 256
                    let blue = 0
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with arguments that are a string', function () {
                    let red = "0"
                    let green = "1"
                    let blue = 0
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with arguments that are an array', function () {
                    let red = []
                    let green = 2
                    let blue = 0
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with arguments that are not integers ', function () {
                    let red = 256.5
                    let green = 250
                    let blue = 0
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with all arguments not being integers ', function () {
                    let red = 256.5
                    let green = -7.5
                    let blue = 2.3
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with all arguments passed as strings ', function () {
                    let red = "sgh"
                    let green = "test"
                    let blue = "test"
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with ref argument passed as NaN ', function () {
                    let red = NaN
                    let green = "test"
                    let blue = "test"
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns undefined with ref argument passed as NaN ', function () {
                    let red = NaN
                    let green = "test"
                    let blue = "test"
                    expect(rgbToHexColor(red, green, blue)).to.equal(undefined)
                })

                it('returns a result with # included', function () {
                    let red = 0
                    let green = 0
                    let blue = 0
                    expect(rgbToHexColor(red, green, blue)).to.include('#')
                })

                it('returns a 7-digit result', function () {
                    let red = 0
                    let green = 0
                    let blue = 0
                    expect(rgbToHexColor(red, green, blue)).to.have.length(7)
                })

                it('throws an error with only 2 arguments', function () {
                    let green = 0
                    let blue = 0
                    expect(rgbToHexColor(green, blue)).to.throw
                })

                it('throws an error with only 1 argument', function () {
                    let blue = 0
                    expect(rgbToHexColor(blue)).to.throw
                })

            })

        })

    })

})