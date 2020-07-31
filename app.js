function Generate() {

    remove();

    var noOfBoxes = document.getElementById('boxes').value;
    var colors = document.getElementById('color').value;
    var count = 0;

    for (let i = 0; i < noOfBoxes; i++) {
        count++;
        var newBox = document.createElement('button');
        newBox.innerText = 'New Button' + count;
        newBox.className = 'new-button';
        newBox.id = "bttn" + count;
        newBox.style = "background-color :" + colors + ";";

        // document.body.appendChild(newBox);

        var e = document.getElementById('boxes-section');
        e.appendChild(newBox);

    }

}

function remove() {

    var e = document.getElementById('boxes-section');
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}