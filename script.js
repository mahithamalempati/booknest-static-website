// ========================================
// BOOKNEST - COMPLETE JAVASCRIPT
// ========================================

let cartCount = 0;


// ========================================
// ADD TO CART
// ========================================

function addToCart() {

    cartCount++;

    document.querySelectorAll("#cart-count").forEach(function (item) {
        item.textContent = cartCount;
    });

    alert("Book added to cart!");
}


// ========================================
// SEARCH BOOKS
// ========================================

function searchBooks() {

    const input = document.getElementById("search");

    if (!input) {
        return;
    }

    const searchValue = input.value.toLowerCase();

    document.querySelectorAll(".book-card").forEach(function (book) {

        const titleElement = book.querySelector("h3");
        const authorElement = book.querySelector("p");

        if (!titleElement || !authorElement) {
            return;
        }

        const title =
            titleElement.textContent.toLowerCase();

        const author =
            authorElement.textContent.toLowerCase();

        if (
            title.includes(searchValue) ||
            author.includes(searchValue)
        ) {

            book.style.display = "block";

        } else {

            book.style.display = "none";

        }

    });
}


// ========================================
// CONTACT FORM
// ========================================

function submitForm(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
}


// ========================================
// BOOK COVER URLs
// ========================================

const bookCovers = {

    "The Alchemist":
        "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",

    "Atomic Habits":
        "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",

    "Wings of Fire":
        "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",

    "Ikigai":
        "https://covers.openlibrary.org/b/isbn/9780143440054-L.jpg",

    "Rich Dad Poor Dad":
        "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg",

    "Harry Potter":
        "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",

    "The Jungle Book":
        "https://covers.openlibrary.org/b/isbn/9780141325293-L.jpg",

    "Five Point Someone":
        "https://covers.openlibrary.org/b/isbn/9788129142146-L.jpg",

    "The Guide":
        "https://covers.openlibrary.org/b/isbn/9780143039565-L.jpg",

    "The White Tiger":
        "https://covers.openlibrary.org/b/isbn/9781416562603-L.jpg",

    "Malgudi Days":
        "https://covers.openlibrary.org/b/isbn/9780143039657-L.jpg",

    "The God of Small Things":
        "https://covers.openlibrary.org/b/isbn/9780812979657-L.jpg",

    "Charlotte's Web":
        "https://covers.openlibrary.org/b/isbn/9780064400558-L.jpg",

    "Alice in Wonderland":
        "https://covers.openlibrary.org/b/isbn/9780141322737-L.jpg"

};


// ========================================
// FALLBACK COVER
// ========================================

function createFallbackCover(title) {

    return (
        "https://placehold.co/300x400/f1f1f1/6b2d2d" +
        "?text=" +
        encodeURIComponent(title)
    );

}


// ========================================
// LOAD BOOK COVERS
// ========================================

function loadBookCovers() {

    const books =
        document.querySelectorAll(".book-card");

    books.forEach(function (book) {

        const titleElement =
            book.querySelector("h3");

        const imageElement =
            book.querySelector("img");

        if (!titleElement || !imageElement) {
            return;
        }

        const title =
            titleElement.textContent.trim();


        // Use our cover URL
        if (bookCovers[title]) {

            imageElement.src =
                bookCovers[title];

        } else {

            imageElement.src =
                createFallbackCover(title);

        }


        // If image doesn't load
        imageElement.onerror = function () {

            // Prevent infinite loop
            if (
                this.dataset.fallback === "true"
            ) {
                return;
            }

            this.dataset.fallback = "true";

            this.src =
                createFallbackCover(title);

        };

    });

}


// ========================================
// PAGE LOADED
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadBookCovers();

    }
);