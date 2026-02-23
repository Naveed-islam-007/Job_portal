1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans. getElementById is used to select any element by using its id which is unique. 
    getElementsByClassName is used to select elements which has the same class name. Their can be multiple elements with the same class name.
    querySelector is used to select an element that matches the first CSS selector and querySelectorAll is used to select all the elements that matches the CSS selector.


2. How do you create and insert a new element into the DOM?
Ans. For creating: document.createElement();
  Then add some properties and append them to the created element.
  for e.g. const li = document.createElement("li");
                 li.textContent = "New item";
                 document.getElementById("list").appendChild(li);


3.What is Event Bubbling? And how does it work?
ans.When an event like click occurs on an element it moves up to the outermost element until it reaches the document or window. This is known as event bubbling.There are 3 phases:
Capturing phase–Event moves top-down from document to the target.
Target phase–Event reaches the target element.
Bubbling phase–Event moves bottom-up from target to document. 

4.. What is Event Delegation in JavaScript? Why is it useful?
Ans. For e.g.
 <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

Instead of adding click event on each of the li we can just add an event on the ul
Like this-
const list=document.getElementById("list");
list.addEventListener("click",(event)=>{
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});

Its is useful because it requires fewer event listeners, cleaner code and also works dynamically.




5.What is the difference between preventDefault() and stopPropagation() methods?
Ans.PreventDefault() stops any default actions in the browser for e.g.
<form id="myForm">
  <input type="text" required>
  <button type="submit">Submit</button>
</form>


document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stops form from submitting
  alert("Form submission prevented!");
});


stopPropagation() stops the event from bubling up or capturing down along the DOM tree.For e.g.

<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  console.log("Child clicked");
  e.stopPropagation(); // prevents bubbling to parent
});
