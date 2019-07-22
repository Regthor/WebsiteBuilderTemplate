var previewArea = document.querySelector('#preview');

function RecalculateGrid() {
  // Get the amount of whitespace
  let whiteSpace = parseInt(document.querySelector('#whitespaceVal').value);
  // Get the whitespace type % or px
  let inputIndex = document.querySelector('#whitespaceOpt').options.selectedIndex;
  let whiteSpaceOpt = document.querySelector('#whitespaceOpt').options[inputIndex].value;
  // Get grid columns
  let gridColumns = parseInt(document.querySelector('#gridColumns').value);
  // Get grid rows
  let gridRows = parseInt(document.querySelector('#gridRows').value);

  // Clear Preview
  clearPreview();

  generateNewPreview(gridColumns, gridRows);

  // Style preview correctly
  preview.style.gridTemplateColumns = `${whiteSpace}${whiteSpaceOpt} repeat(${gridColumns}, auto) ${whiteSpace}${whiteSpaceOpt}`;
}

function clearPreview() {
  var firstNode =  previewArea.firstElementChild; 
  while (firstNode) { 
    firstNode.remove(); 
    firstNode = previewArea.firstElementChild; 
  };
}

function generateNewPreview(gridColumns, gridRows) {
  // Add preview
  for (let i = 0; i < gridRows; i++) {
    previewArea.appendChild(genereateDiv("whitespace", i+1, 1));
    for (let j = 0; j < gridColumns; j++) {
      previewArea.appendChild(genereateDiv("content", i+1, j+1));
    }
    previewArea.appendChild(genereateDiv("whitespace", i+1, gridColumns));
  }
}

function genereateDiv(divType, rowNum, colNum) {
  if (divType == "content") {
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute("class", "contentDiv");
    contentDiv.innerHTML = `Row ${rowNum}, Col ${colNum}`;
    return contentDiv;
  } else {
    let whiteSpaceDiv = document.createElement('div');
    whiteSpaceDiv.setAttribute("class", `whiteSpaceDiv R${rowNum} C${colNum}`);
    whiteSpaceDiv.innerHTML = "White space div";
    return whiteSpaceDiv;
  }
}