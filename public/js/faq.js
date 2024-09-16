const faq = document.querySelectorAll('.faq-title');
console.log(faq);
faq.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('active');
        let content = item.nextElementSibling;
        if(content.style.height){
            content.style.height = null
        }else{
            const test = content.scrollHeight;
            content.style.height = test + 'px';
        }
    })
})