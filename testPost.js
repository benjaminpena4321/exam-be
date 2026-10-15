fetch('http://localhost:3000/api/tasks/6ad035ed9866e9c9783f82a0', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        title: 'Ricky', 
        description: 'ricky@example.com',
        status: 'completed'
    })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));