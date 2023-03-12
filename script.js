
drawGrid = () => {
    const numRows = prompt("choose the number of rows", "");
    const numColumns = prompt('choose the number of columns', "")
    const container = document.querySelector("#container");

    for (let i = 1; i <= numRows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = 'squareRow';
        // rowDiv.textContent = "ROW";
        container.appendChild(rowDiv);

        for (let j = 1; j <= numColumns; j++) {
            const columnDiv = document.createElement("div");

            columnDiv.className = "squareColumn";
            // columnDiv.textContent = "column"
            rowDiv.appendChild(columnDiv);
            columnDiv.addEventListener('mouseover', function () {
                columnDiv.className = "squareColumnHover"
            })
        }
    }

}



drawGrid()


heightButton = document.querySelector('#heightSubmit');
heightButton.addEventListener('click', drawHeight)

lengthButton = document.querySelector('#lengthSubmit');
lengthButton.addEventListener('click', function () {
    const squareList = (document.querySelectorAll(".squareColumnHover"));
    for (let i = 0; i < squareList.length; i++) {
        squareList[i].className = "squareColumn"
    }
}
)


// getUserInput()


