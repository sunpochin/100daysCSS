// const n = 15
// console.log(n % 2 === 0 ? 'even' : 'odd')


const library = [
    { title: 'The great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
]

function getBooksByAuthor(library, author) {
    return library.filter(book => book.author === author)
}

// const books = getBooksByAuthor(library, 'F. Scott Fitzgerald')
const books = getBooksByAuthor(library, 'F. Scottsss')
// console.log(books) // ['The great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice', 'The Catcher in the Rye']


// let array = [3, 5, 7, 9]
// console.log(array.length) // 4
// array.push(11)
// console.log(array.length) // 5
// // 
const array = [10, 20, 30, 40, 50]
function removeItem(array, index) {
    if (index < 0 || index >= array.length) {
        return array
    }
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            newArray.push(array[i])
        }
    }
    return newArray
}
const result = removeItem(array, 0)
console.log(result) // [10, 20, 40, 50]
