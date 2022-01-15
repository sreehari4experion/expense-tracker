//select elements
const expenseForm = document.querySelector("#addExpenseForm") as HTMLFormElement
//buttons
const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement
const addExpenseBtn = document.querySelector(
  "#addExpenseBtn"
) as HTMLButtonElement
// const addItemBtn = document.querySelector("#addItemBtn") as HTMLButtonElement

//all expenses section
const allExpenses = document.querySelector("#allExp") as HTMLDivElement

// forms
const addExpenseSection = document.querySelector(
  ".add-expense"
) as HTMLDivElement
const cancelExpenseBtn = document.querySelector(
  "#cancelSubmit"
) as HTMLButtonElement
const addItemSection = document.querySelector("#addItemBtn") as HTMLDivElement
const addIndividualSection = document.querySelector(
  "#individualItemsSection"
) as HTMLDivElement

interface validationConfig {
  //   [property: string]: {
  //     [validationProperty: string]: string[]
  //   }
  Expense: {
    name: ["Required"]
    amount: ["Required", "Positive"]
    date: ["Required"]
    expenseType: ["Required"]
  }
}

// const validatorObj : validationConfig={}

// function Required(target: any, propertyName: string) {
//   console.log(target, propertyName)

// function Positive(target: any, propertyName: number) {
//   console.log(target, propertyName)
// }

class Expense {
  name: string
  date: string
  amount: number
  expenseType: string
  expenseDetails: string
  //   expenseImage: string
  //   indiviudalItems: items[]=[]
  constructor(
    name: string,
    date: string,
    amount: number,
    expenseType: string,
    expenseDetails: string
    // expenseImage: string
    // indiviudalItems: items[]
  ) {
    this.name = name
    this.date = date
    this.amount = amount
    this.expenseType = expenseType
    this.expenseDetails = expenseDetails
    // this.expenseImage = expenseImage
    // this.indiviudalItems = indiviudalItems
  }
}

//functionalities

addExpenseBtn.addEventListener("click", () => {
  addExpenseSection.classList.remove("hide")
  addExpenseBtn.classList.add("hide")
})
cancelExpenseBtn.addEventListener("click", () => {
  addExpenseSection.classList.add("hide")
  addExpenseBtn.classList.remove("hide")
})

//add inidviadaul items
const addItemBtn = document.querySelector("#addItem") as HTMLButtonElement
const itemsTable = document.querySelector("#itemsTable") as HTMLTableElement
const itemName = document.querySelector("#itemName") as HTMLInputElement
const itemPrice = document.querySelector("#itemPrice") as HTMLInputElement

//add individual items functionality

class items {
  name: string
  price: number
  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
}

addItemBtn.addEventListener("click", () => {
  let expenseCount = 0
  const itemNameValue = itemName.value
  const itemPriceValue = parseInt(itemPrice.value)
  if (itemNameValue === "" || itemPriceValue === 0) {
    alert("Please enter a valid item name and price")
  } else {
    const newItem = new items(itemNameValue, itemPriceValue)
    console.log(newItem)
    itemsTable.innerHTML += `<tr><td>${itemName.value}</td><td>${itemPriceValue}</td><td>
    <button class="btn btn-danger" id="deleteItem${expenseCount}">
      Delete
    </button>
  </td></tr>`
  }
  itemName.value = ""
  itemPrice.value = ""
})

//submitbtn

submitBtn.addEventListener("click", () => {
  //select input fields
  const inputName = document.querySelector(
    "#exampleInputExpenseName"
  ) as HTMLInputElement
  const inputDate = document.querySelector(
    "#exampleFormControlSelect1"
  ) as HTMLInputElement
  const inputAmount = document.querySelector(
    "#exampleInputExpenseAmount"
  ) as HTMLInputElement
  const inputExpenseType = document.querySelector(
    "#exampleFormControlSelectCategory"
  ) as HTMLInputElement
  const inputExpenseDetails = document.querySelector(
    "#exampleFormControlDescription"
  ) as HTMLInputElement
  const inputExpenseImage = document.querySelector(
    "#exampleFormControlFileImage"
  ) as HTMLInputElement

  const warningSection = document.querySelector("#warning") as HTMLDivElement

  //   validator functions
  const expenseName = () => {
    if (inputName.value === "" || inputName.value.length < 3) {
      inputName.placeholder = "Please enter an expense name"
      inputName.classList.add("error")
      return false
      warningSection.innerHTML = "Please Fill all the required fields"
    } else {
      return true
    }
  }

  const expenseAmount = () => {
    if (inputAmount.value === "" || inputAmount.value.length < 0) {
      inputAmount.placeholder = "Please enter an amount"
      inputAmount.classList.add("error")
      return false
      warningSection.innerHTML = "Please Fill all the required fields"
    } else {
      return true
    }
  }
  const expenseType = () => {
    if (inputExpenseType.value === "") {
      inputExpenseType.placeholder = "Please choose an expense type"
      inputExpenseType.classList.add("error")
      return false
    } else {
      return true
    }
  }
  const expenseDetails = () => {
    if (inputExpenseDetails.value === "") {
      inputExpenseDetails.placeholder = "Please enter an expense details"
      inputExpenseDetails.classList.add("error")
      return false
    } else {
      return true
    }
  }

  if (expenseName() && expenseAmount() && expenseType() && expenseDetails()) {
    const expenseObj = new Expense(
      inputName.value,
      inputDate.value,
      +inputAmount.value,
      inputExpenseType.value,
      inputExpenseDetails.value
    )
    console.log(expenseObj)
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
  </div>`
    addExpenseSection.classList.add("hide")
    addExpenseBtn.classList.remove("hide")
  } else {
    warningSection.innerHTML = "Please Fill all the required fields"
  }
  console.log(items)
  const subText = document.querySelector("#subText") as HTMLParagraphElement
  subText.innerHTML = ""
})
