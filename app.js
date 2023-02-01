// const btn= document.querySelector('#btnn')
// const err= document.querySelector('.err')

// function getFormValue() {
//     const nameInput= document.querySelector("#fullname")
//     const nameValue = nameInput.value;
//     if(nameValue){
//         console.log(nameValue);
//         // err.innerHTML = "";
//         nameInput.Value = "";
//     }
//     else{
//         err.innerHTML = '<p class="text-danger">please write your name</p>'
//     }
// }
// btn.addEventListener('click', getFormValue)


 const nameInput= document.querySelector("#fullname")   
 const emailInput= document.querySelector("#email")   
 const addressInput= document.querySelector("#address")   
const err= document.querySelector('.err')
const btnn= document.querySelector('#btnn')
  const form_data= document.querySelector('#form-data')

btnn.addEventListener('click' , () => {
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const addressValue = addressInput.value;
  


    if(nameValue && emailValue && addressValue){
       form_data.innerHTML = `
       <p>Name: ${nameValue}</p>
       <p>Email: ${emailValue}</p>
       <p>Address: ${addressValue}</p>
       `
       err.innerHTML = ""
       nameInput.value =""
       emailInput.value =""
       addressInput.value =""
    }else{
        err.innerHTML = '<p class="text-danger">fill all input fill</p>'
        form_data.innerHTML= ""
    }
    
});
