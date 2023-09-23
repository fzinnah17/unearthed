// asynchronous function called renderGift().

const renderGift = async () => {
    // parse the ID as an int from the URL.
    const requestedID = parseInt(window.location.href.split('/').pop())
    // fetch the gift data using the /gifts endpoint and parse the response as a JSON.
    const response = await fetch('/gifts')
    const data = await response.json()
    // points to the element with the ID gift-content.
    const giftContent = document.getElementById('gift-content')
    //  variable gift
    let gift
    // if statement to check if data is not null. If so, find the gift in the gift data that has the same ID as the requested ID.
    gift = data.find(gift => gift.id === requestedID)
    // if-else statement to conditionally render the gift data based on whether or not gift is null.
    if (gift) {
    // Set the src of the image element to the matching gift's image.
    document.getElementById('image').src = gift.image;
    // Set the text content of the element with the ID name to matching gift's name.
    document.getElementById('name').textContent = gift.name;
    // Set the text content of the element with the ID submittedBy to the matching gift's submitted by date.
    document.getElementById('submittedBy').textContent = gift.submittedBy;
    // Set the text content of the element with the ID pricePoint to the matching gift's price point.
    document.getElementById('pricePoint').textContent = gift.pricePoint;
    // Set the text content of the element with the ID audience to the matching gift's audience.
    document.getElementById('audience').textContent = gift.audience;
    // Set the text content of the element with the ID description to the matching gift's description.
    document.getElementById('description').textContent = gift.description;
    // Set the title of the page the gift's name.
    document.title = gift.name;
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}
renderGift();
