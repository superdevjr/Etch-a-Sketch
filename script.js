/* 

1. using javascript,  create a 16x16 grid of square divs
 -create an html container to house all the divs
 -append the divs using DOM
 -make them appear as a box using flexbox
 -make the maximum length 960px

2. apply event listeners to each square for entering and
exiting the div

3. on entering exiting "hovering" change the color of the square

4. make a new grid using user input for x and y sides 
with 100 being the maximum for each side

5. remove old grid

6. make each square change to a random color that increases its
saturation by 10 with each pass


*/

let userLength;
let userHeight;
userLength;

drawLength = () => {

}

drawHeight = () => {

}


drawGrid = () => {
    const numRows = 10;
    const numColumns = 30;
    const container = document.querySelector("#container");

    for (let i = 0; i <= numRows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.textContent = "row";
        container.appendChild(rowDiv);

        for (let j = 0; j <= numColumns; j++) {
            const columnDiv = document.createElement("div");
            columnDiv.textContent = "column";
            rowDiv.appendChild(columnDiv);
        }
    }

}

heightButton = document.querySelector('#heightSubmit');
heightButton.addEventListener('click', drawHeight)

lengthButton = document.querySelector('#lengthSubmit');
lengthButton.addEventListener('click', drawLength)


// getUserInput()


