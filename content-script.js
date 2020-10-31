const TAGS = [
    "*[id^=vote-arrows-] > div",
    "#vote-arrows-t3_jl28yy > div",
    ".Comment > div:nth-of-type(2) > div:nth-of-type(1) > span:nth-of-type(1)",
    ".Comment > div:nth-of-type(3) > div:nth-of-type(1) > span:nth-of-type(1)",
]



let sponsored = document.querySelectorAll(TAGS.toString())
sponsored.forEach(function (articleItem) {
articleItem.remove()
})

window.addEventListener("scroll", (_event) => {
    var sponsored = document.querySelectorAll(TAGS.toString())

    sponsored.forEach(function(articleItem){
        articleItem.remove()
    })
})

window.addEventListener("readystatechange", (_event) => {
    var sponsored = document.querySelectorAll(TAGS.toString())

    sponsored.forEach(function(articleItem){
        articleItem.remove()
    })
})