import express from 'express';
import questionRoutes from './routes/questionRoutes';
import userRoutes from './routes/userRoutes';
import answerRoutes from './routes/answersRoutes';
import votesRoutes from './routes/votesRoutes';
import bodyParser from 'body-parser';

require('dotenv').config();
//set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1',questionRoutes);
app.use('/api/v1',answerRoutes);
app.use('/api/v1',userRoutes);
app.use('/api/v1',votesRoutes);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});

