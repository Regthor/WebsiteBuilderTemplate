function RecalculateGrid() {
    let whitespaceValue = document.getElementById('whitespaceVal').value;
    let selector = document.getElementById('whitespaceOpt');
    let whitespaceOpt = selector.options[selector.selectedIndex].value;
    
    console.log('whitespaceValue', whitespaceValue);
    console.log('whitespaceOpt', whitespaceOpt);
    var whitespace = whitespaceValue + whitespaceOpt;
    let contentColumns = document.getElementById('gridColumns').value;
    let contentRows = document.getElementById('gridRows').value;
    let columnMultiplier = '';
    let rowMultiplier = '';
    for (var x = 0; x < parseInt(contentColumns); x++) {
        columnMultiplier += ' auto ';
    }

    for (var x = 0; x < parseInt(contentRows); x++) {
        rowMultiplier += ' auto ';
    }

    if(parseInt(whitespaceValue) !== 0) {
       var columnValue = whitespace + columnMultiplier + whitespace;
    } else {
        var columnValue = columnMultiplier;
    }
    console.log('columnValue', columnValue);
    console.log('rowMultiplier', rowMultiplier);
    let preview = document.getElementById('preview');
    preview.style.display = 'grid';
    preview.style.gridTemplateColumns = columnValue;
    preview.style.gridTemplateRows = rowMultiplier;
    console.log('preview style', preview.style);
    IdentifyGrid();
}

function IdentifyGrid() {
    let preview = document.getElementById('preview');
    while(preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }
    let columnTemplate = preview.style.gridTemplateColumns;
    let rowTemplate = preview.style.gridTemplateRows;

    let colCount = columnTemplate.split(" ");
    let rowCount = rowTemplate.split(" ");
    let style = document.createElement('style');

    for (var x = 1; x < colCount.length + 1; x++) {
        for (var y = 1; y < rowCount.length + 1; y++) {
            let elem = document.createElement("div");
            elem.innerHTML = "<h1>Col:" + x + " , Row: " + y + "</h1>";
            elem.classList = 'C' + x + 'R' + y + ' gridBorder gridTextCenter';
            preview.appendChild(elem);
            style.innerHTML = style.innerHTML + 
                '.C' + x + 'R' + y + 
                '{ grid-column: ' + x.toString() + '; grid-row: ' + y.toString() + '; } ';
        }
    }

    // Get the first script tag
    var ref = document.querySelector('script');

    // Insert our new styles before the first script tag
    ref.parentNode.insertBefore(style, ref);
}