window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY)
})

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const handleChangeTabs  = (e) => {
    const tabs = document.querySelectorAll('.tabs');
    tabs.forEach(item => item.classList.remove('selected'))
    e.classList.add('selected')
}