// Array of options to populate the dropdown menu
const options = [
    { value: 'option1', text: 'General Feedback' },  // Option for general feedback
    { value: 'option2', text: 'App Enhancement' },   // Option for app enhancement feedback
    { value: 'option3', text: 'General comment' },   // Option for a general comment
    { value: 'option4', text: 'Feature Request' }    // Option for requesting a feature
];

// Populate the dropdown menu with the options array
const dropdown = document.getElementById('myDropdown');  // Get the dropdown element by its ID

// Loop through each option in the options array
options.forEach(option => {
    // Create a new <option> element for each item in the options array
    const newOption = document.createElement('option');
    
    // Set the value for the new <option> element
    newOption.value = option.value;  // Set the value of the option
    
    // Set the text that will be displayed in the dropdown menu
    newOption.textContent = option.text;  // Set the visible text for the option
    
    // Append the new option to the dropdown menu in the HTML
    dropdown.appendChild(newOption);
});

// Add an event listener to handle the selection change in the dropdown menu
dropdown.addEventListener('change', function() {
    const selectedValue = this.value;  // Get the value of the selected option from the dropdown
    const selectedText = this.options[this.selectedIndex].text;  // Get the text of the selected option
    
    // Display the selected option (both text and value) in the <p> element with id 'selectedOption'
    document.getElementById('selectedOption').textContent = `You selected: ${selectedText} (${selectedValue})`;
});

// Function to handle the like and dislike button logic
function setupButton(buttonId, countSpanId, count) {
    // Attach an event listener to the button with the given buttonId
    document.getElementById(buttonId).addEventListener('click', () => {
        count++;  // Increment the count each time the button is clicked
        document.getElementById(countSpanId).textContent = count;  // Update the display with the new count
    });
}

// Initialize counters for the first set of like/dislike buttons
let likes1 = 0, dislikes1 = 0, likes2 = 0, dislikes2 = 0;

// Call the setupButton function for each like and dislike button
setupButton('likeBtn1', 'likeCount1', likes1);  // Setup like button 1
setupButton('dislikeBtn1', 'dislikeCount1', dislikes1);  // Setup dislike button 1
setupButton('likeBtn2', 'likeCount2', likes2);  // Setup like button 2
setupButton('dislikeBtn2', 'dislikeCount2', dislikes2);  // Setup dislike button 2

// Add event listener to the first spin button
document.getElementById('spinButton1').addEventListener('click', function() {
    const element = document.getElementById('spinElement1');  // Get the element to apply the spin effect
    element.classList.add('spin');  // Add the 'spin' class to trigger the CSS spin animation

    // Remove the 'spin' class after the animation ends to allow re-triggering of the animation
    setTimeout(() => {
        element.classList.remove('spin');  // Remove the 'spin' class after 1 second
    }, 1000);  // Match the duration of the CSS spin animation (1 second)
});

// Add event listener to the second spin button
document.getElementById('spinButton2').addEventListener('click', function() {
    const element = document.getElementById('spinElement2');  // Get the element to apply the spin effect
    element.classList.add('spin');  // Add the 'spin' class to trigger the CSS spin animation

    // Remove the 'spin' class after the animation ends to allow re-triggering of the animation
    setTimeout(() => {
        element.classList.remove('spin');  // Remove the 'spin' class after 1 second
    }, 1000);  // Match the duration of the CSS spin animation (1 second)
});

