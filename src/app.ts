showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//==========================================
enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

function getAllBooks(): Book[] {
    const books = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            category: Category.JavaScript,
            available: false,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            category: Category.JavaScript,
            available: true,
        },
    ];

    return books;
}

function logFirstAvailable(books: Book[]): void {
    console.log(`Number of books: ${books.length}`);

    const availableTitle: string | undefined = books.find(book => book.available === true)?.title;
    console.log(`First Available Book: ${availableTitle}`);
}

function getBookTitleByCategory(category: Category): Array<string> {
    const books = getAllBooks();
    const titles = books.filter(book => book.category === category).map(book => book.title);
    return titles;
}

function logBookTitles(booksTitles: string[]): void {
    booksTitles.forEach(title => console.log(title));
}

// Task 02.01
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitleByCategory(Category.JavaScript));
