console.log('hello js')
// event handler onclick add calculate
document.getElementById('calculate').addEventListener('click',function(){
    console.log('clicked')
;

    const mainBalance=updateTotal();
     
    const balance=document.getElementById('main-balance');
    const balanceNumber=parseInt(balance);
    balance.innerText=mainBalance;
    


});



//expenses total
    function getExpenseTotal(){
        const expenses=document.getElementById('expenses').value;
        const rent =document.getElementById('rent').value;
        const clothes=document.getElementById('clothes').value;

        if( expenses.value < 0 || rent < 0 || clothes < 0  ){
    
            alert('please valid information')

            // return;
        }

        const totalExpensesNumber=parseInt (expenses) + parseInt(rent) + parseInt(clothes);
 
        return totalExpensesNumber;
    }


    //main balance total
    function updateTotal(){
        const updateExpenseNumber= getExpenseTotal();

        const income=document.getElementById('income');
        const incomeNumber=income.value ;
        // income.value='';
        if( income.value <0 ||  income.value < updateExpenseNumber  ){
            alert('your income is low')
            // return;
        }
        
    
        const incomeTotal= parseInt(incomeNumber);
        console.log(incomeTotal)

        const expensesTotal=document.getElementById('total-expenses');
        const expensesTotalNumber=parseInt(expensesTotal.innerText);
        expensesTotal.innerText=updateExpenseNumber;
       
    
        const totalBalance=incomeTotal - updateExpenseNumber;
        return totalBalance;
    }

    // if (typeof IncomeText != "number"){
    //     alert ("hddhdhsb")
    //     }
    // || typeof income != 'number' 
 // save money calculation

 document.getElementById('save').addEventListener('click',function(){


    const saveAmount=document.getElementById('save-amount');
    const saveAmountNumber=parseInt(saveAmount);
    saveAmount.innerText=tax.toFixed(2);
    const tax=saveUpdate();

    const mainBalance=updateTotal();

    const remianingTotal=document.getElementById('remaining-balance').innerText=mainBalance + tax;
    
 })



    function saveUpdate(){
        const income=document.getElementById('income');
        const incomeNumber=income.value ;
    
        const incomeTotal= parseInt(incomeNumber);
        console.log(incomeTotal);
    
        const saveInput=document.getElementById('save-input');
        const saveFild=saveInput.value;
        const saveMoney=parseInt(saveFild);
        if( saveInput.value < 0 ){
            alert('please valid info')
        }
        
        console.log(saveMoney)
    
        const tax = incomeTotal / saveMoney  ;
        return;
    

    }