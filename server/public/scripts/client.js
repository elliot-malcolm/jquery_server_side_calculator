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
}

input1 = 0;
input2 = 0;
operator = null;

function assignAdd(){
    operator = '+';
    input1 = $("#input1").val(),
    input2 = $("#input2").val()
    console.log( input1, operator, input2 );
}

function assignSub(){
    operator = '-';
    input1 = $("#input1").val(),
    input2 = $("#input2").val()
    console.log( input1, operator, input2 );
}

function assignMult(){
    operator = '*';
    input1 = $("#input1").val(),
    input2 = $("#input2").val()
    console.log( input1, operator, input2 );
}

function assignDiv(){
    operator = '/';
    input1 = $("#input1").val(),
    input2 = $("#input2").val()
    console.log( input1, operator, input2 );
}

function clearInputs(){
    $("#input1").val( '' ),
    $("#input2").val( '' ),
    input1 = 0,
    input2 = 0,
    operator = null;
    console.log( input1, operator, input2);
}

function sumSubmit()
{ 
    console.log( 'hello from SumSubmit! ');
    let submission = 
    {
        input1 : Number($("#input1").val()),
        input2 : Number($("#input2").val()),
        operator : operator
    }

    $.ajax
        ({
            method: 'POST',
            url: '/calculations',
            data: submission
        }).then(function(response)
        {
        console.log('response was', response);
        $('#sumOut').append(response);
        }).catch(function(error)
        {
            alert(error);
        })
}  

// function getSubmissionAnswer() 
// {
//     $.ajax
//         ({
//             type: 'GET',
//             url: '/calculations',
//         }).then(function (response) 
//         {
//         console.log('sum is',response);
//         appendHistory(response);
//         }).catch(function(error)
//         {
//                 alert(error);
//         })
// };

    
// function appendHistory( mathyObjArray )
// {
//     console.log( 'appending obj to dom' );
//     $('#historyTable').empty();
//     for (let i = 0; i < mathyObjArray.length; i++)
//     {
//         $('#historyTable').append(`
//         <tr>
//             round${[i + 1]}: 
//             ${mathyObjArray[i].input1} 
//             ${mathyObjArray[i].operator} 
//             ${mathyObjArray[i].input1}
//         </tr>
//         `);
//     }

// };

