const header = document.querySelector('header') //points to the header tag
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'
// div element with a class name header-left
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'
// an img element and assign its source to logo.png
const headerLogo = document.createElement('img')
headerLogo.src = 'logo.png'

// h1 element and set its text content to UnEarthed.
const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

// Append the logo and the title to the div with the class name header-left.
headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)


// div element with a class name header-right.
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

// button element and set its text content to Home
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
// a click event listener to the button that redirects the window to the root page.
headerButton.addEventListener('click', function handleClick(event) {
    window.location.href = '/'
})

// Append the button to the div with the class name header-right.
headerRight.appendChild(headerButton)

// Append the left and right header div elements to the div with the class name header-container.
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

// Append the header-container element to the header element.
header.appendChild(headerContainer)
