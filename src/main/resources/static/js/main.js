function validateBookForm() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

    if (title.trim() === "") {
        alert("Validation Error: Book Title cannot be empty!");
        return false;
    }

    if (author.trim() === "") {
        alert("Validation Error: Author Name is required!");
        return false;
    }

    if (isbn.length < 3) {
        alert("Validation Error: ISBN must be at least 3 characters long.");
        return false;
    }

    return true;
}