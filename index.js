const skills = [
    {"skill": "Next", "img":"next.png"},
    {"skill": "React", "img":"react.png"},
    {"skill": "Nuxt", "img":"nuxt.png"},
    {"skill": "Node", "img":"node.png"},
    {"skill": "Vue", "img":"vue.png"},
    {"skill": "Laravel", "img":"laravel.png"},
    {"skill": "Tailwind", "img":"tailwind.png"},
    {"skill": "Bootstrap", "img":"bootstrap.png"},
    {"skill": "Docker", "img":"docker.png"},
    {"skill": "Javascript", "img":"javascript.png"},
    {"skill": "Typescript", "img":"typescript.png"},
    {"skill": "Go", "img":"go.png"},
    {"skill": "MySQL", "img":"mysql.png"},
    {"skill": "MongoDB", "img":"mongodb.png"},
    {"skill": "PostgreSQL", "img":"postgresql.png"},
]

document.addEventListener('DOMContentLoaded', function() {
    const skillHtml = document.getElementById('skill');
    skills.forEach((skill) => {
        const skillElement = `
            <div class="skill">
                <span>${skill.skill}</span>
                <img src="img/skill-logo/${skill.img}" alt="">
            </div>
        `
        skillHtml.insertAdjacentHTML('beforeend', skillElement);
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (localStorage.getItem('dark-mode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('.card').forEach(card => card.classList.add('dark-mode'));
        document.querySelectorAll('.btn').forEach(btn => btn.classList.add('dark-mode'));
        document.querySelectorAll('.form-control').forEach(input => input.classList.add('dark-mode'));
        document.querySelectorAll('.carousel-item').forEach(item => item.classList.add('dark-mode'));
        document.querySelector('footer').classList.add('dark-mode');
        // document.querySelector('skill').style.color = 'black';
        localStorage.setItem('dark-mode', 'enabled');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        document.querySelector('.navbar').classList.remove('dark-mode');
        document.querySelector('.navbar').classList.add('navbar-light');
        document.querySelector('.navbar').classList.add('bg-light');
        document.querySelector('.navbar').classList.remove('navbar-dark');
        document.querySelectorAll('.card').forEach(card => card.classList.remove('dark-mode'));
        document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('dark-mode'));
        document.querySelectorAll('.form-control').forEach(input => input.classList.remove('dark-mode'));
        document.querySelectorAll('.carousel-item').forEach(item => item.classList.remove('dark-mode'));
        document.querySelector('footer').classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});
