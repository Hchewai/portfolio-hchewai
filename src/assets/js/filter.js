let projectCards = [];

export function init(initialCategory) {
    projectCards = document.querySelectorAll(".project-card");

    setCategory(initialCategory);
}

export function setCategory(category) {
    projectCards.forEach((card) => {
        const matchesCategory =
            category === "*" || card.dataset.category === category;

        card.hidden = !matchesCategory;
    });
}