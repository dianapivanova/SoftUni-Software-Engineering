function demo2() {

    function createRect(width, height) {
        const rect = { width, height }
        rect.getArea = () => {
            return rect.width * rect.height
        }

        const { getArea } = rect
        console.log(getArea())
    }




    createRect(2, 3)
}
demo2()