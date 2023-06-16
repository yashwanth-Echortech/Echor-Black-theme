function setTransformEffect(id) {
    $(`#${id}`).mouseenter(function () {
        $(this).addClass('shadow')
    }).mousemove(function (e) {
        const x = e.pageX - e.currentTarget.offsetLeft//width
        const y = e.pageY - e.currentTarget.offsetTop//height
        const { height, width } = e.currentTarget.getBoundingClientRect()

        const pencentageOffsetX = (x / width) * 100
        const pencentageOffsetY = (y / height) * 100
        const rotateY = 8 - (pencentageOffsetX * 16 / 100)
        const rotateX = (pencentageOffsetY * 16 / 100) - 8
        $(this).css({
            "will-change": "transform",
            "transform": `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            "scale3d": "1,1,1",
            "transition-timing-function": "ease-out",
            "transition": "0.1s"

        }).addClass("shadow")
    }).mouseleave(function () {
        $(this).css({
            "transition-timing-function": "ease-out",
            "transition": "0.5s",
            "transform": `perspective(500px) rotateX(0deg) rotateY(0deg)`
        }).removeClass('shadow')
    })
}


$(document).ready(function () {
    $('.hoverShadow').mouseenter(function () {
        $(this).addClass('shadow')
    }).mouseleave(function (e) {
        $(this).removeClass('shadow')
    })

    // $("#navbarDropdown-3").hide()
})