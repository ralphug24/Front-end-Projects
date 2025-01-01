document.getElementById('feature-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const featureName = document.getElementById('feature-name').value;
    const impact = parseInt(document.getElementById('impact').value);
    const cost = parseInt(document.getElementById('cost').value);
    const effort = parseInt(document.getElementById('effort').value);

    // Calculate priority score
    const priorityScore = (impact - cost - effort).toFixed(2);

    // Create table row
    const table = document.getElementById('features-table');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${featureName}</td>
        <td>${impact}</td>
        <td>${cost}</td>
        <td>${effort}</td>
        <td>${priorityScore}</td>
        <td><button onclick="deleteFeature(this)">Delete</button></td>
    `;

    // Reset the form
    event.target.reset();
});

function deleteFeature(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
