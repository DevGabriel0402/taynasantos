
window.onload = () => {
    setTimeout(() => {
        document.getElementById(`loading`).classList.add(`hidden`)
        document.getElementById(`container`).classList.remove(`hidden`)
        document.getElementById(`card-contrate`).classList.remove(`hidden`)
        document.getElementById(`footer`).classList.remove(`hidden`)
    }, 800)


}


setTimeout(() => {
    document.getElementById(`card-contrate`).style.animation = `enterCard .5s forwards`
}, 2000)

//Caso o tamanho da tela forma maior que 400 ele coloque 3 slide na tela
if (innerWidth >= 400) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        // spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // Senao ele coloque somente 1 slide
} else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const image = document.querySelectorAll(`.swiper-slide img`)
    const desiredHeight = '300px';

    image.forEach((img) => {
        img.style.height = desiredHeight;
    });



}

document.getElementById(`btn-contato`).addEventListener(`click`, () => {
    document.getElementById(`modal`).style.display = `flex`;
    document.getElementById(`card-contrate`).style.display = `none`;
    document.getElementById(`container`).style.filter = `blur(5px)`
})

document.getElementById(`btn-fechar`).addEventListener(`click`, () => {
    document.getElementById(`modal`).style.display = `none`;
    document.getElementById(`card-contrate`).style.display = `flex`;
    document.getElementById(`container`).style.filter = `blur(0)`


})

document.getElementById('submit').addEventListener('click', () => {
    const nome = document.getElementById('inputName').value
    const texto = document.getElementById('inputText').value
    const tipoEvento = document.getElementById(`select`).value



    const mensagem = `
Olá Tayna tudo bem? Meu nome é ${nome} e estou entrando em contato para fazer um orçamento para:

*Consultoria:* ${tipoEvento}
*Observação:* ${texto}
    
Aguardando sua resposta.`

    const uri = encodeURIComponent(mensagem)

    const contato = '31984902816'

    const url = `https://wa.me/55${contato}?text=${uri}`

    if (nome === "" || tipoEvento === "nenhum") {
        alert(`Verifique se foi informado: nome e o tipo de consultoria!`)
        return
    } else {
        window.open(url, `_blank`)

    }



})