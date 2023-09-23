// asynchronous function renderGifts().
const renderGifts = async () => {
    // fetch() to retrieve the gift data at the /gifts endpoint, then parse the response as a JSON.
    const response = await fetch('/gifts')
    const data = await response.json()
    // mainContent that points to the element with the ID main-content.
    const mainContent = document.getElementById('main-content')
    // if-else statement to use conditional rendering based on whether or not data is null.
    if (data) {
        // map() to add an HTML card to the DOM for each gift in the data.

        data.map(gift => {
            // For each gift, a div with the class name card.
            const card = document.createElement('div')
            card.classList.add('card')
            // div with the class name top-container
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            // background image of the top-container element to the gift's image
            topContainer.style.backgroundImage = `url(${gift.image})`
            // div with the class name bottom-container.
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            // h3 element, and set its text content to the gift's name. Then, append it to the bottom-container element.
            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)
            // p element, and set its text content to the gift's price. Then, append it to the bottom-container element.
            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)
            // p element, and set its text content to the gift's audience. Then, append it to the bottom-container element.
            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            bottomContainer.appendChild(audience)
            // a element, and set its text content to Read More >. Set the href of the link to /gifts/gift.id. Set the role to button. Then, append it to the bottom-container element.
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.href = `/gifts/${gift.id}`
            link.setAttribute('role', 'button')
            bottomContainer.appendChild(link)

            // Append the top-container and bottom-container elements to the card.
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            // Append the card element to the mainContent.
            mainContent.appendChild(card)


        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}
renderGifts();