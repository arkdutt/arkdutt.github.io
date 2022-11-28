document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarReact');
    if(document.querySelector('.sidebar').classList.contains('sidebarReact')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    } else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 130)
        
    }
})