console.log( 'welcome to js ');

$(document).ready( makeReady );

function makeReady()
{
    $("#sumSubmitBtn").on( 'click', getSumSubmit );
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
    cconsole.log( input1, operator, input2 );
}

function clearInputs(){
    $("#input1").val( '' ),
    $("#input2").val( '' ),
    input1 = 0,
    input2 = 0,
    operator = null;
    console.log( input1, operator, input2);
}

function getSumSubmit()
{ 
    console.log( 'hello from getSumSubmit! ');
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
          console.log('response was', response);
        }).catch(function(error){
            alert(error);
    })
}  

// function determineOperator()
// {
//     if ($("#addBtn").click())
//     {
//         operator = '+';
//         console.log( 'operator = +');
//     } 
//     if ($("#subtractBtn").click())
//     {
//         operator = '-';
//         console.log( 'operator = -');
//     }
//     if ($("#multBtn").click())
//     {
//         operator = '*';
//         console.log( 'operator = -');
//     }
//     if ($("#divBtn").click())
//     {
//         operator = '/';
//         console.log( 'operator = -');
//     }

// takes in button values and assigns operator
// function determineOperator()
// {
//     $(".operator").empty();
//     if ($(".operator").attr() == '+'
//     ($("subtractBtn").on( 'click', determine );

// }

// function assignAddition();
// {
//     operator = '+';
// }

// function assignSubtraction();
// {
//     operator = '-'
// }

// function assignDivision();
// {
//     operator = '/'
// }

// function assignMultiplication();
// {
//     operator = '*'
// }































    //       // append to the table in the DOM
    //       $("#guessTable").append(`
    //       <tr>
    //         <td>${counter}</td>
    //         <td>${peterGuess}</td>
    //         <td>${elliotGuess}</td>
    //         <td>${nickGuess}</td>
    //         <td>${mattGuess}</td>
    //     </tr>
    //       `);
    //       $('.guessInput').val('');
          
    //   }).catch(function(error){
    //       //notifying the user of an error in post request
    //       alert(error);

    // <label for="input1">First number:</label>
    // <input class="inputField" type="number" id="firstInput" placeholder="First number">
    // <button id="addBtn"> + </button>
    // <button id="subtractBtn"> - </button>
    // <button id="multBtn"> * </button>
    // <button id="divBtn"> / </button>
    // <label for="male">Second number:</label>
    // <input class="inputField" type="number" id="secondInput" placeholder="Second number">
    // <!-- submit guess button  -->
    // <button id="sumBtn"> = </button>
    // <!-- clear inputs button  -->
    // <button id="clearBtn"> C </button>