const gridContainer = document.getElementById('grid');
const gridX = document.getElementById('gridX');
const gridY = document.getElementById('gridY');
const createGridBtn = document.getElementById('createGrid');
const colorPicker = document.getElementById('colorPicker');
const eraseBtn = document.getElementById('erase');
const lineColor = document.getElementById('lineColor');
const blockSize = document.getElementById('blockSize');

let isDrawing = false;

function createGrid() {
    const cols = parseInt(gridX.value);
    const rows = parseInt(gridY.value);
    const size = parseInt(blockSize.value);
    const borderColor = lineColor.value;

    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, ${size}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, ${size}px)`;

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${size}px`;
        cell.style.height = `${size}px`;
        cell.style.border = `1px solid ${borderColor}`;

        cell.addEventListener('mousedown', () => {
          isDrawing = true;
          cell.style.backgroundColor = colorPicker.value;
        });
        cell.addEventListener('mouseenter', () => {
          if (isDrawing) {
            cell.style.backgroundColor = colorPicker.value;
          }
        });

        gridContainer.appendChild(cell);
      }
    }

    document.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    lineColor.addEventListener('change', () => {
      document.querySelectorAll('.cell').forEach(cell => {
        cell.style.border = `1px solid ${lineColor.value}`;
      });
    });

    eraseBtn.addEventListener('click', () => {
      document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'transparent';
      });
    });

    createGridBtn.addEventListener('click', createGrid);

    createGrid();