// Array of options to populate the dropdown menu
const options = [
    { value: 'option1', text: 'General Feedback' },  // Option for general feedback
    { value: 'option2', text: 'App Enhancement' },   // Option for app enhancement feedback
    { value: 'option3', text: 'General comment' }     // Option for a general comment
];

// Populate the dropdown menu with the options array
const dropdown = document.getElementById('myDropdown');  // Get the dropdown element by its ID
options.forEach(option => {
    // Create a new <option> element for each item in the options array
    const newOption = document.createElement('option');
    
    // Set the value and text for the <option> element
    newOption.value = option.value;  // Set the value of the option
    newOption.textContent = option.text;  // Set the text that will be displayed in the dropdown
    
    // Append the new option to the dropdown menu
    dropdown.appendChild(newOption);
});

// Add an event listener to handle the selection change in the dropdown menu
dropdown.addEventListener('change', function() {
    const selectedValue = this.value;  // Get the value of the selected option
    const selectedText = this.options[this.selectedIndex].text;  // Get the text of the selected option
    
    // Display the selected option in the <p> element with id 'selectedOption'
    document.getElementById('selectedOption').textContent = `You selected: ${selectedText} (${selectedValue})`;
});

// Get references to the like and dislike buttons and their count spans for the first image
const likeBtn1 = document.getElementById('likeBtn1');  // Get the like button for the first image
const dislikeBtn1 = document.getElementById('dislikeBtn1');  // Get the dislike button for the first image
const likeCount1 = document.getElementById('likeCount1');  // Get the like count display for the first image
const dislikeCount1 = document.getElementById('dislikeCount1');  // Get the dislike count display for the first image

// Initialize counters for likes and dislikes for the first image
let likes1 = 0;
let dislikes1 = 0;

// Add event listener to the like button for the first image
likeBtn1.addEventListener('click', () => {
    likes1++;  // Increment the like counter
    likeCount1.textContent = likes1;  // Update the displayed like count
});

// Add event listener to the dislike button for the first image
dislikeBtn1.addEventListener('click', () => {
    dislikes1++;  // Increment the dislike counter
    dislikeCount1.textContent = dislikes1;  // Update the displayed dislike count
});

// Get references to the like and dislike buttons and their count spans for the second image
const likeBtn2 = document.getElementById('likeBtn2');  // Get the like button for the second image
const dislikeBtn2 = document.getElementById('dislikeBtn2');  // Get the dislike button for the second image
const likeCount2 = document.getElementById('likeCount2');  // Get the like count display for the second image
const dislikeCount2 = document.getElementById('dislikeCount2');  // Get the dislike count display for the second image

// Initialize counters for likes and dislikes for the second image
let likes2 = 0;
let dislikes2 = 0;

// Add event listener to the like button for the second image
likeBtn2.addEventListener('click', () => {
    likes2++;  // Increment the like counter
    likeCount2.textContent = likes2;  // Update the displayed like count
});

// Add event listener to the dislike button for the second image
dislikeBtn2.addEventListener('click', () => {
    dislikes2++;  // Increment the dislike counter
    dislikeCount2.textContent = dislikes2;  // Update the displayed dislike count
});

// Add event listener to the first spin button
document.getElementById('spinButton1').addEventListener('click', function() {
    const element = document.getElementById('spinElement1');  // Get the element to apply the spin effect
    element.classList.add('spin');  // Add the 'spin' class to trigger the spin animation

    // Remove the 'spin' class after the animation ends to allow re-triggering of the animation
    setTimeout(() => {
        element.classList.remove('spin');  // Remove the 'spin' class
    }, 1000);  // This matches the duration of the CSS transition (1 second)
});

// Add event listener to the second spin button
document.getElementById('spinButton2').addEventListener('click', function() {
    const element = document.getElementById('spinElement2');  // Get the element to apply the spin effect
    element.classList.add('spin');  // Add the 'spin' class to trigger the spin animation

    // Remove the 'spin' class after the animation ends to allow re-triggering of the animation
    setTimeout(() => {
        element.classList.remove('spin');  // Remove the 'spin' class
    }, 1000);  // This matches the duration of the CSS transition (1 second)
});

