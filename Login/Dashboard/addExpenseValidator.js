"use strict";
//select elements
const expenseForm = document.querySelector("#addExpenseForm");
//buttons
const submitBtn = document.querySelector("#submitBtn");
const addExpenseBtn = document.querySelector("#addExpenseBtn");
const addItemBtn = document.querySelector("#addItemBtn");
//all expenses section
const allExpenses = document.querySelector("#allExp");
// forms
const addExpenseSection = document.querySelector(".add-expense");
const cancelExpenseBtn = document.querySelector("#cancelSubmit");
const addItemSection = document.querySelector("#addItemBtn");
const addIndividualSection = document.querySelector("#individualItemsSection");
// const validatorObj : validationConfig={}
// function Required(target: any, propertyName: string) {
//   console.log(target, propertyName)
// function Positive(target: any, propertyName: number) {
//   console.log(target, propertyName)
// }
class Expense {
    //   expenseImage: string
    //   indiviudalItems: items[]=[]
    constructor(name, date, amount, expenseType, expenseDetails
    // expenseImage: string
    // indiviudalItems: items[]
    ) {
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.expenseType = expenseType;
        this.expenseDetails = expenseDetails;
        // this.expenseImage = expenseImage
        // this.indiviudalItems = indiviudalItems
    }
}
//functionalities
addExpenseBtn.addEventListener("click", () => {
    addExpenseSection.classList.remove("hide");
    addExpenseBtn.classList.add("hide");
});
cancelExpenseBtn.addEventListener("click", () => {
    addExpenseSection.classList.add("hide");
    addExpenseBtn.classList.remove("hide");
});
//submitbtn
submitBtn.addEventListener("click", () => {
    //select input fields
    const inputName = document.querySelector("#exampleInputExpenseName");
    const inputDate = document.querySelector("#exampleFormControlSelect1");
    const inputAmount = document.querySelector("#exampleInputExpenseAmount");
    const inputExpenseType = document.querySelector("#exampleFormControlSelectCategory");
    const inputExpenseDetails = document.querySelector("#exampleFormControlDescription");
    const inputExpenseImage = document.querySelector("#exampleFormControlFileImage");
    const warningSection = document.querySelector("#warning");
    //   validator functions
    const expenseName = () => {
        if (inputName.value === "" || inputName.value.length < 3) {
            inputName.placeholder = "Please enter an expense name";
            inputName.classList.add("error");
            return false;
            warningSection.innerHTML = "Please Fill all the required fields";
        }
        else {
            return true;
        }
    };
    const expenseAmount = () => {
        if (inputAmount.value === "" || inputAmount.value.length < 0) {
            inputAmount.placeholder = "Please enter an amount";
            inputAmount.classList.add("error");
            return false;
            warningSection.innerHTML = "Please Fill all the required fields";
        }
        else {
            return true;
        }
    };
    const expenseType = () => {
        if (inputExpenseType.value === "") {
            inputExpenseType.placeholder = "Please choose an expense type";
            inputExpenseType.classList.add("error");
            return false;
        }
        else {
            return true;
        }
    };
    const expenseDetails = () => {
        if (inputExpenseDetails.value === "") {
            inputExpenseDetails.placeholder = "Please enter an expense details";
            inputExpenseDetails.classList.add("error");
            return false;
        }
        else {
            return true;
        }
    };
    if (expenseName() && expenseAmount() && expenseType() && expenseDetails()) {
        const expenseObj = new Expense(inputName.value, inputDate.value, +inputAmount.value, inputExpenseType.value, inputExpenseDetails.value);
        console.log(expenseObj);
        allExpenses.innerHTML += `<div class="row">
    <div class="col-md-12">
      <div class="card row p-5">
        <div class="col">
          <h4 class="card-title" id="expname">Expense Name : ${inputName.value}</h4>
          <h5 class="" id="expCat">Category : ${inputExpenseType.value}</h5>
          <h5 class="" id="expDate">Date : ${inputDate.value}</h5>

          <h4 class="card-title" id="expAmnt">Amount : ${inputAmount.value}</h4>
          <h5 class="" id="expDescription">Description : ${inputExpenseDetails.value}</h5>
        </div>
      </div>
    </div>
  </div>`;
        addExpenseSection.classList.add("hide");
        addExpenseBtn.classList.remove("hide");
    }
    else {
        warningSection.innerHTML = "Please Fill all the required fields";
    }
});
