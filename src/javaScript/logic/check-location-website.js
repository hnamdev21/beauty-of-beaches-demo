// window.addEventListener("hashchange", function() {
//     console.log(`2222`)
//     // let count = 0
//     // count++
//     // console.log(count)
//     // if(location.pathname == "/") {
//     //     initEventOnHomePage()
//     //     return
//     // }

//     // if(location.pathname == "/gallery") {
//     //     initEventOnGalleryPage()
//     //     return
//     // }
// })
// function initEventOnHomePage() {
//     const cards = [...document.querySelectorAll(".card")]

//     cards.forEach(item => {
//         const heartIcon = item.querySelector(".heart-icon")

//         heartIcon.addEventListener("click", changeIcon)

//         function changeIcon(event) {
//             if (event.target.classList == "heart-icon fa-regular fa-heart") {
//                 event.target.classList = `heart-icon fa-solid fa-heart`

//                 addFavorite()
//                 checkItem()
//             } else {
//                 event.target.classList = `heart-icon fa-regular fa-heart`
//             }           
//         }

//         function addFavorite(event) {
//             const srcItem = item.querySelector("img").src
//             const nameItem = item.querySelector(".beach__name").innerText

//             const favoriteList = document.querySelector(".favorite-beaches")
//             const favoriteItem = document.createElement("div")
//             favoriteItem.className = "favorite-beach flex-center"
//             favoriteItem.innerHTML = `
//             <div class="favorite-beach__img">
//                 <a href="">
//                     <img src="${srcItem}" alt="">
//                 </a>
//             </div>
//             <h5 class="favorite-beach__name">${nameItem}</h5>
//             <button class="remove-beach">Remove</button>`
//             favoriteList.appendChild(favoriteItem)

//             getBtn()
//         }

//         function checkItem() {
//             const favoriteItems = [...document.querySelectorAll(".favorite-beach")]
//             const numItem = favoriteItems.length

//             document.querySelector(".num-favorite").innerText = numItem
//         }

//         function getBtn() {
//             const removeBtn = [...document.querySelectorAll(".remove-beach")]

//             removeBtn.forEach(item => {
//                 item.addEventListener("click", removeBeach)
                
//                 function removeBeach() {
//                     const btn = item
//                     const favoriteBeach = btn.parentElement
//                     favoriteBeach.remove()

//                     checkItem()
//                 }
//             })
//         }
//     })
// }

// function initEventOnGalleryPage() {
//     const beachCards = [...document.querySelectorAll(".beach-card")]

//     beachCards.forEach(item => {
//         const heartIcon = item.querySelector(".heart-icon")

//         heartIcon.addEventListener("click", changeIcon)

//         function changeIcon(event) {
//             if (event.target.classList == "heart-icon fa-regular fa-heart") {
//                 event.target.classList = `heart-icon fa-solid fa-heart`

//                 addFavorite()
//                 checkItem()
//             } else {
//                 event.target.classList = `heart-icon fa-regular fa-heart`
//             }
//         }
        
//         function addFavorite(event) {
//             const srcItem = item.querySelector("img").src
//             const nameItem = item.querySelector(".beach__name").innerText

//             const favoriteList = document.querySelector(".favorite-beaches")
//             const favoriteItem = document.createElement("div")
//             favoriteItem.className = "favorite-beach flex-center"
//             favoriteItem.innerHTML = `
//             <div class="favorite-beach__img">
//                 <a href="">
//                     <img src="${srcItem}" alt="">
//                 </a>
//             </div>
//             <h5 class="favorite-beach__name">${nameItem}</h5>
//             <button class="remove-beach">Remove</button>`
//             favoriteList.appendChild(favoriteItem)

//             getBtn()
//         }

//         function checkItem() {
//             const favoriteItems = [...document.querySelectorAll(".favorite-beach")]
//             const numItem = favoriteItems.length

//             document.querySelector(".num-favorite").innerText = numItem
//         }

//         function getBtn() {
//             const removeBtn = [...document.querySelectorAll(".remove-beach")]

//             removeBtn.forEach(item => {
//                 item.addEventListener("click", removeBeach)
                
//                 function removeBeach() {
//                     const btn = item
//                     const favoriteBeach = btn.parentElement
//                     favoriteBeach.remove()
//                 }
//             })
//         }
//     })
// }

// window.onhashchange = getLocation()

// function getLocation() {
//     console.log(location)
//     let count = 0
//     count++
//     console.log(count)
//     if(location.pathname == "/") {
//         initEventOnHomePage()
//         return
//     }
//     count++
//     console.log(count)
//     if(location.pathname == "/gallery") {
//         initEventOnGalleryPage()
//         return
//     }
// }

