fetch('http://localhost:5000/api/work-completion/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    customer_id: 8,
    basic_details: { consumerName: 'Test Api' }
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
