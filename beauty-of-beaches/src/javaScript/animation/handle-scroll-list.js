window.addEventListener("load", () => {
    const card = document.querySelector(".card")
    const wrapperLists = [...document.querySelectorAll(".list-section")]
    wrapperLists.forEach(item => {
        const leftBtn = item.querySelector(".left-btn")
        const rightBtn = item.querySelector(".right-btn")

        leftBtn.addEventListener("click", scrollLeft)
        rightBtn.addEventListener("click", scrollRight)

        function scrollLeft(event) {
            item.querySelector(".wrapper-list").scrollLeft -= card.offsetWidth + 40
        }
        function scrollRight(event) {
            item.querySelector(".wrapper-list").scrollLeft += card.offsetWidth + 40
        }
    })
})