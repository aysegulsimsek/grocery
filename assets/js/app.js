document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        toggleAboutPopup();
        aboutItemDetails(e.target);
    }
})

function toggleAboutPopup() {
    document.querySelector(".about__popup").classList.toggle("open");
}
document.querySelector(".about__popup-close").addEventListener("click", toggleAboutPopup);

function aboutItemDetails(aboutItem) {
    document.querySelector(".about__popup .popup_inner1").innerHTML = aboutItem.querySelector(".about_inner1").innerHTML;
    document.querySelector(".about__popup .popup_inner2").innerHTML = aboutItem.querySelector(".about_inner2").innerHTML;
    document.querySelector(".about__popup .popup_inner3").innerHTML = aboutItem.querySelector(".about_inner3").innerHTML;
    document.querySelector(".about__popup .popup_inner4").innerHTML = aboutItem.querySelector(".about_inner4").innerHTML;
}

window.onload = function() {
    // Sayfa yüklendiğinde çalışacak kod
    var addCardDivs = document.querySelectorAll('.add_card'); // '.add_card' sınıfına sahip tüm divleri seç
    addCardDivs.forEach(function(div) {
        div.setAttribute('onclick', 'redirectToStore()'); // Her bir div'e onclick özelliği ekle
    });
};

function redirectToStore() {
    window.location.href = 'store.html'; // Store.html sayfasına yönlendir
}