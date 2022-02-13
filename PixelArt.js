const submitButton = document.getElementById('Submit Button');

const grid = document.getElementById('pixelCanvas');

document.addEventListener('submit', function(event){
    event.preventDefault();
    grid.innerHTML ='';
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value;
    makeGrid(height, width);
}
)

function makeGrid(height, width){
    const table = document.createElement("TABLE");
    const color = document.querySelector("colorPicker");
    for(let i = 0; i < height; i++){
        let row = document.createElement('tr');
        grid.appendChild(row);
        for(let j = 0; j < width; j++){
            let cell = document.createElement('td');
        row.appendChild(cell);
        cell.addEventListener('click', function(event){
            const color = document.getElementById("colorPicker").value;
            event.target.style.backgroundColor = color})
        }
    }
}