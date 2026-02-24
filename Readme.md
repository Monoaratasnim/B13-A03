1. What is the difference between getElementById, getElementsByClassName, and querySelector querySelectorAll?

Ans: getElementById is used to select an element using its unique ID. As an ID should only used once on a page and it returns only one element. It is fast and easy to use when you know the exact ID.

getElementsByClassName finds elements using their class name. It returns a live HTMLCollection, which means if the page changes the collection updates automatically. It can return one or many elements.

querySelector finds the first element that matches a CSS selector like ID, class, tag, etc. It returns only one element and  more flexible because we can use different types of selectors.

querySelectorAll finds all elements that match a CSS selector. It returns a static NodeList, which means it does not update automatically if the page changes.

So we can say that, getElementById and getElementsByClassName are basic and specific methods, while querySelector and querySelectorAll are more modern and flexible because they use CSS selector rules.

2. How do you create and insert a new element into the DOM?
Ans: <!-- Create element -->
const newElement=document.createElement("div");
<!-- Adding content and class -->
newElement.textContent="Welcome to the programming hero!";
newElement.classList.add("box");
<!-- Insert into Dom -->
document.body.appendChild(newElement);

3. What is Event Bubbling? And how does it work?
Ans: Event bubbling means the event moves from the child element to its parent elements. If we click a button inside a div, the click event first happens on the button, then on the div, then on the body, and so on. The event bubbles up through the HTML structure.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique in JavaScript where we can add an event listener to a parent element instead of adding event listeners to many child elements. For example, instead of adding a click event to every <li> inside a <ul>, we can add one event listener to the <ul> and handle all <li> clicks from there.It is useful because it makes our code cleaner and shorter.It works for all element that are added later.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() and stopPropagation() are both event methods in JavaScript.preventDefault() stops the browser’s default action. For example, when we click a link, the browser normally opens a new page. If we use preventDefault(), the link will not open. stopPropagation() stops the event from going up to parent elements. Example: If we click a button inside a div, the click won’t trigger events on the div or other parent elements.