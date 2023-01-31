window.addEventListener("load", () => {
    const slider = document.querySelector(".slider")
    let currentIndex = 0

    const subImg = [
        {
            url: "assets/img/sliders/banguerra-island-2.jpg",
            alt: "Banguerra Island"
        },
        {
            url: "assets/img/sliders/anse-source-d-argent-2.jpg",
            alt: "Anse Source D'Argent Beach"
        },
        {
            url: "assets/img/sliders/cancun-1.jpg",
            alt: "Cancun Beach"
        },
        {
            url: "assets/img/sliders/chesterman-beach-2.jpg",
            alt: "Chesterman Beach"
        },
        {
            url: "assets/img/sliders/whitehaven-beach.jpg",
            alt: "Whitehaven Beach"
        },
    ]

    setInterval(function() {
        currentIndex++

        if(currentIndex == 0) {
            currentIndex = subImg.length - 1
        } else {
            currentIndex--
        }

        if(currentIndex == subImg.length - 1) {
            currentIndex = 0
        } else {
            currentIndex++
        }

        updateImg(currentIndex)
    }, 5000)

    function updateImg(index) {
        slider.style.background = "radial-gradient(#ffffff00, #00000066, #00000080)" + "," + "url(" + subImg[index].url + ")" + "center" + " no-repeat"

        slider.style.backgroundSize = "cover"
    }

    updateImg(currentIndex)
})