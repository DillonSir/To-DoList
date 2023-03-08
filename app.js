const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const myList = document.getElementById("myList");

myButton.addEventListener("click", function () {
  const inputValue = myInput.value;
  const newListItem = document.createElement("li");
  const textNode = document.createTextNode(inputValue);
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove"; // set the text content of the button
  newListItem.appendChild(textNode);
  newListItem.appendChild(removeButton); // append the remove button to the list item
  myList.appendChild(newListItem);
  myInput.value = "";

  removeButton.addEventListener("click", function () {
    // add event listener to remove button
    newListItem.remove(); // remove the parent list item when the button is clicked
  });
});
