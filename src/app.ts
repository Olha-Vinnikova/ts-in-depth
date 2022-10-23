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

function getAllBooks(): readonly Book[] {
    const books = <const>[
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

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const availableTitle: string | undefined = books.find(book => book.available === true)?.title;
    console.log(`First Available Book: ${availableTitle}`);
}

function getBookTitleByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    const titles = books.filter(book => book.category === category).map(book => book.title);
    return titles;
}

function logBookTitles(booksTitles: string[]): void {
    booksTitles.forEach(title => console.log(title));
}

function getBooksAuthorByIndex(index: number): [title: string, author: string] {
    const { title, author } = getAllBooks()[index];
    return [title, author];
}

function calcTotalPages() {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce((acc, obj) => acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook), BigInt(0));
}

function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Cusomer city: ${city}`);
    }
}

function getBookByID(id: number): Book {
    return getAllBooks().find(book => book.id === id);
}

function checkoutBooks(customer: string, ...bookIDs: number[]): void {
    console.log(`Customer name: ${customer}`);

    bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available === true)
        .forEach(({ title }) => console.log(title));
}

function getTitle(author: string): string[];
function getTitle(available: boolean): string[];
function getTitle(id: number, available: boolean): string[];
function getTitle(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(({ author }) => author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({ available }) => available === arg).map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books
                .filter(({ id: bookId, available: bookAvailable }) => bookAvailable === available && bookId === id)
                .map(({ title }) => title);
        }
    }
    return [];
}

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

function booksTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitleByCategory(Category.JavaScript));

// console.log(getBooksAuthorByIndex(0));
// console.log('calcTotalPages', calcTotalPages());

//Task 03.01
// const myID = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: string) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (firstName: string, id: number) => `${id}/${firstName}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Eamonn', 50));

//Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kharkiv');

// console.log(getBookTitleByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));
// checkoutBooks('Ann', 1, 2, 3);

//Task 03.03
// console.log(getTitle(1, true));
// console.log(getTitle('Evan Burchard'));
// console.log(getTitle(false));

//Task 03.04
console.log(booksTitleTransform('Learn TypeScript'));
console.log(booksTitleTransform(100));
