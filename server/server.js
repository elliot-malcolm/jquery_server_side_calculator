const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

mathSubmissions = [];

mathyObj = null;

// This express.post function applies the logic for the calculation
// and packages and pushes the object to an object array (mathSubmissions)

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

// This is the logic to execute The Math based on the type of 
// operator passed through from the DOM 

function findSum( submission )
{
    if ( submission.input1 == '' || submission.input1 == '' )
    {
        return false;
    }
    else if ( submission.operator === '+' )
    {
        return Number(submission.input1) + Number(submission.input2);
    }
    else if ( submission.operator === '-' )
    {
        return Number(submission.input1) - Number(submission.input2);
    }
    else if ( submission.operator === '*' )
    {
        return Number(submission.input1) * Number(submission.input2);
    }
    else if ( submission.operator === '/' )
    {
        return Number(submission.input1) / Number(submission.input2);
    }
    console.log( mathSubmissions );
}


app.listen(PORT, () => 
{
    console.log ('Server is running on port', PORT);
});