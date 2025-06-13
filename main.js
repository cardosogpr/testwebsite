
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');


    function showSectionFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const pageId = urlParams.get('page') || 'home';

        sections.forEach(section => {
            if (section.id === pageId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        if (pageId) {
            const targetSection = document.getElementById(pageId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }


    showSectionFromUrl();


    window.addEventListener('popstate', showSectionFromUrl);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();


            const pageName = this.href.split('?page=')[1];


            history.pushState({ page: pageName }, '', `?page=${pageName}`);


            showSectionFromUrl();
        });
    });
});