const express = require('express');
const cors = require('cors');
require('dotenv').config();


const itemRoutes = require('./routes/itemRoutes');
const workerRoutes = require('./routes/workerRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const quotationRoutes = require('./routes/quotationRoutes');
const progressRoutes = require('./routes/progressRoutes');
const materialRoutes = require('./routes/materialRoutes');
const workCompletionRoutes = require('./routes/workCompletionRoutes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/items', itemRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/quotation', quotationRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/material', materialRoutes);
app.use('/api/work-completion', workCompletionRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
