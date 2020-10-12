const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

mathSubmissions = [];

mathyObj = null;

app.post('/calculations', (req, res) => 
{
    console.log('hello from post', req.body);
    submissionSum = findSum(req.body);
    mathSubmissions.push( 
    { 
        input1 : req.body.input1,
        input2 : req.body.input2,
        operator : req.body.operator,
        sum : submissionSum
    }
    );
    res.send({submissionSum});
});

app.get('/calculations', (req, res) => 
    {
    console.log('sending', mathyObj );
    res.send(mathSubmissions);
    });


function findSum( submission )
{
    console.log( 'in findsum ');
    if ( submission.operator === '+' )
    {
        return Number(submission.input1) + Number(submission.input1);
    }
    else if ( submission.operator === '-' )
    {
        return Number(submission.input1) - Number(submission.input1);
    }
    else if ( submission.operator === '*' )
    {
        return Number(submission.input1) * Number(submission.input1);
    }
    else if ( submission.operator === '/' )
    {
        return Number(submission.input1) / Number(submission.input1);
    }
    console.log( mathSubmissions );
}


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT);
  });