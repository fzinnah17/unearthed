const giftData = [
    {
        _id: 1,
        name: "Sample Gift 1",
        pricePoint: "20",
        audience: "Adults",
        image: "path_to_image_1.jpg",
        description: "This is a sample gift description for the first gift.",
        submittedBy: "John Doe",
        submittedOn: "2023-09-22"
      },
      {
        _id: 2,
        name: "Sample Gift 2",
        pricePoint: "10",
        audience: "Kids",
        image: "path_to_image_2.jpg",
        description: "This is a sample gift description for the second gift.",
        submittedBy: "Jane Smith",
        submittedOn: "2023-09-21"
      },
      {
        _id: 3,
        name: "Sample Gift 2",
        pricePoint: "10",
        audience: "Kids",
        image: "path_to_image_2.jpg",
        description: "This is a sample gift description for the second gift.",
        submittedBy: "Jane Smith",
        submittedOn: "2023-09-21"
      },
];
export default giftData;

//Think of your project as a library:

// gifts.js in data directory is like a bookshelf holding books (gift data).
// gifts.js in routes directory is like a librarian (router) who knows where each book (gift) is and can retrieve it for you.
// Main server.js is the library's main counter where you ask for a specific librarian or bookshelf.
// When you visit the /gifts section of your library (web app), the main counter (server.js) directs you to the gifts librarian (gifts.js in routes), who then fetches books (data) for you.