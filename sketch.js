const input = document.getElementById("input")
const submitButton = document.querySelector("#submit")
const output = document.querySelector("#output")


submitButton.addEventListener("click",()=>{
  const array = JSON.parse(`[${input.value}]`)
  output.innerHTML = `Array you entered is: ${array}<br>`
  SelectionSort(array)
  output.innerHTML += `<br>Sorted array is: ${array}`
  input.value = ""
})

input.addEventListener("keypress",(event)=>{
  if (event.key === "Enter")
  {
    event.preventDefault()
    submitButton.click()
  }
})


let SelectionSort = (array) =>
{
   for (let i = 0 ;i < array.length; i++)
   {
       let minIndex = i;
       for (let k = i + 1; k < array.length; k++)
       {
           if (array[k] < array[minIndex])
           {
               minIndex = k;
           }
       }
       let temp = array[i]
       array[i] = array[minIndex]
       array[minIndex] = temp;
   }
}
