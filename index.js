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
