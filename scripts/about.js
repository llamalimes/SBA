//Array of about me items
const items = ['My name is Jon Lima', 'I am 35 years old', 'I\'m from Miami, FL', 'I have a degree in Information Technology', 'I think I\'m pretty cool'];
let currentItemIndex = 0;

// Display initial item
document.getElementById('itemContent').innerHTML = items[currentItemIndex];

// Event listener for Next Item button
document.getElementById('next-btn').addEventListener('click', function() {
  currentItemIndex = (currentItemIndex + 1) % items.length;
  document.getElementById('itemContent').innerText = items[currentItemIndex];
});
// Event listener for form submission
document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let newItem = document.getElementById('new-item').value;
    if (newItem.trim() !== '') {
        items.push(newItem);
        document.getElementById('new-item').value = '';
        console.log('Item added:', newItem);
        }
    });
