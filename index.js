const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.setAttribute('target', "_blank")
    link.setAttribute('noopener', "")
    link.setAttribute('noreferrer', "")
})