window.addEventListener("load", () => {
    const line = document.createElement("div")
    line.className = `line-nav`
    document.body.appendChild(line)

    const navLinks = [...document.querySelectorAll(".nav-link")]
    navLinks.forEach(item => item.addEventListener("mouseenter", handleLine))

    function handleLine(event) {
        const {top: topEle, width: widthEle, height: heightEle, left: leftEle} = event.target.getBoundingClientRect()
        
        line.style.width = `${widthEle}px`
        line.style.left = `${leftEle}px`
        line.style.top = `${topEle + heightEle}px`
    }
})