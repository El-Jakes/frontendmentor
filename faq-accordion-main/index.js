const faqs = document.querySelectorAll('.card__faq')

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active')
    })
})
