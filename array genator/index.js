function generateArray() {
    const startNumber = parseInt(document.getElementById("startNumber").value);
    const endNumber = parseInt(document.getElementById("endNumber").value);

    const array = [];
    for (let i = startNumber; i <= endNumber; i++) {
        array.push(i);
    }
    

    document.getElementById("result").textContent = JSON.stringify(array);
}