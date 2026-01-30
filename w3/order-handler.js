// Select your elements: Get references to the Quantity input, the Gift Wrap checkbox, and the Size radio buttons
const quantityInput = document.getElementById("qty");
const giftWrapCheckbox = document.getElementById("gift-wrap");
const sizeRadioButtons = document.querySelectorAll('input[name="size"]');
// Create a helper function: Write a function (similar to getSelectedRadioValue in the lecture) to figure out which Size radio button is checked
const getSelectedSize = function(sizeRadioButtons) {
    for (const radio of sizeRadioButtons) {
        if (radio.checked) {
            console.log(`${radio.value} has the attribute of ${radio.checked} `);
            return radio.value;
        }
    };

 
}
// Export the Main Function: Create and export a function named getOrderInputs
export const getOrderInputs = function() {
    console.log('Get Form Inputs');
  return {
    qty: parseInt(quantityInput.value),
    size: getSelectedSize(sizeRadioButtons),
    giftWrap: giftWrapCheckbox.checked
  };
};
