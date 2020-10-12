console.log( 'welcome to js ');

$(document).ready( makeReady );

function makeReady()
{
    $("#sumSubmitBtn").on( 'click', sumSubmit );
    $("#clearBtn").on( 'click', clearInputs );

    ($("#addBtn").on( 'click', assignAdd));
    ($("#subtractBtn").on( 'click', assignSub));
    ($("#multBtn").on( 'click', assignMult));
    ($("#divBtn").on( 'click', assignDiv));
    getMathSubmissions();
}

input1 = 0;
input2 = 0;
operator = null;

// The functions below indicate the operator for the equation, 
// to be assigned as the "operator" value of the object.

function assignAdd(){
    operator = '+';
    console.log( input1, operator, input2 );
}

function assignSub(){
    operator = '-';
    console.log( input1, operator, input2 );
}

function assignMult(){
    operator = '*';
    console.log( input1, operator, input2 );
}

function assignDiv(){
    operator = '/';
    console.log( input1, operator, input2 );
}

// This function clears all equation inputs

function clearInputs(){
    $("#input1").val( '' ),
    $("#input2").val( '' ),
    input1 = 0,
    input2 = 0,
    operator = null;
    console.log( input1, operator, input2);
}

// Post route to server-side calculation logic

function sumSubmit()
{ 
    let submission = 
    {
        input1 : $("#input1").val(),
        input2 : $("#input2").val(),
        operator : operator
    }

    $.ajax
        ({
            method: 'POST',
            url: '/calculations',
            data: submission
        }).then(function(response)
        {
        let sumOut = response.submissionSum;
        getMathSubmissions();
        console.log(sumOut);
        $('#sumOut').empty();
        $('#sumOut').append(
            `<h3>
            Sum: ${sumOut}
            </h3>`
            );
        
        }).catch(function(error)
        {
            alert(error);
        });
        $("#input1").val( '' );
        $("#input2").val( '' );
}  

// This function retrieves the historical output of the function
// and appends it to the DOM 

function getMathSubmissions() 
{
    $.ajax
        ({
            type: 'GET',
            url: '/calculations'
        }).then(function (response) 
        {
        appendHistory(response);
        }).catch(function(error)
        {
                alert(error);
        })
};

// This function takes in the array from the server-side 
// and appends it to the DOM

function appendHistory( mathyObjArray )
{
    $('#historyTable').empty();
    for (let i = 0; i < mathyObjArray.length; i++)
    {
        $('#historyTable').append(`
        <tr> 
           <td> ${mathyObjArray[i].input1} </td>
           <td> ${mathyObjArray[i].operator} </td>
           <td> ${mathyObjArray[i].input2} </td>
           <td> = </td>
           <td> ${mathyObjArray[i].sum}</td>
        </tr>
        `);
    }

};

