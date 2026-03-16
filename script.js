let activeIndex = 0;
let password = "Done"

let groups = document.getElementsByClassName("about-photo");

const handleRight = () => {
    if (password != "Done") {
        return;
    }
    password = "Not Done";


    const nextIndex = (activeIndex + 1) % groups.length;
    const afterIndex = (activeIndex + 2) % groups.length;
    const beforeIndex = activeIndex;

    const currentPhoto = document.querySelector(`[data-index="${nextIndex}"]`);
    const afterPhoto = document.querySelector(`[data-index="${afterIndex}"]`);
    const beforePhoto = document.querySelector(`[data-index="${beforeIndex}"]`);

    currentPhoto.classList.remove("hidden-photo");
    afterPhoto.classList.add("hidden-photo");
    beforePhoto.classList.remove("hidden-photo");

    currentPhoto.dataset.status = "active";
    afterPhoto.dataset.status = "after";
    beforePhoto.dataset.status = "before";

    activeIndex = nextIndex;

    setTimeout(() => {
        password = "Done";
    }, 500);
}

const handleLeft = () => {
    if (password != "Done") {
        return;
    }
    password = "Not Done";


    const nextIndex = (activeIndex + groups.length - 1) % groups.length;
    const afterIndex = activeIndex;
    const beforeIndex = (activeIndex + groups.length - 2) % groups.length;

    const currentPhoto = document.querySelector(`[data-index="${nextIndex}"]`);
    const afterPhoto = document.querySelector(`[data-index="${afterIndex}"]`);
    const beforePhoto = document.querySelector(`[data-index="${beforeIndex}"]`);

    currentPhoto.dataset.status = "active";
    afterPhoto.dataset.status = "after";
    beforePhoto.dataset.status = "before";

    currentPhoto.classList.remove("hidden-photo");
    afterPhoto.classList.remove("hidden-photo");
    beforePhoto.classList.add("hidden-photo");

    activeIndex = nextIndex;

    setTimeout(() => {
        password = "Done";
    }, 500);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const faqDocument = document.getElementById("faq");

const handleDropdown = (e) => {
    const arrowDropdown = faqDocument.querySelector(`[data-index="question-${e}"]`);
    const answerDropdown = faqDocument.querySelector(`[data-index="answer-${e}"]`);

    arrowDropdown.classList.toggle("active");
    answerDropdown.classList.toggle("active");
}