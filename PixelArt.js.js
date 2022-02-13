const submitButton = document.getElementById('Submit Button');

const grid = document.getElementById('pixelCanvas');

// This code creates a new table, or grid
document.addEventListener('submit', function(event){
    event.preventDefault();
    table.innerHTML ='';
    const widthInputElement = document.getElementById('inputWidth');
    const heightInputElement = document.getElementById('inputHeight');
    makeGrid(height, width);
}
)

function makeGrid(height, width){
    const table = document.createElement(table);
    const color = document.querySelector('#colorPicker').value;
    // This code is for adding rows and columns
    for(let i = 0; i < height; i++){
        let row = document.createElement('tr');
        grid.appendChild(row);
        for(let j = 0; j < width; j++){
            let column = document.createElement('td');
        row.appendChild(column);
        //This is the code for coloring your grid
        column.addEventListener('click', function(event){
            const color = document.getElementById('#colorPicker').value;
            event.target.style.backgroundColor = color})
        }
    }
}