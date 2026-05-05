async function test() {
  try {
    const payload = {
      customer_id: 1,
      full_name: "Test Name",
      total_amount: 1000,
      advance_amount: 500
    };
    console.log("Sending payload...");
    const res = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Error Response:", data);
    } else {
      console.log("Success:", data);
    }
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
}

test();
