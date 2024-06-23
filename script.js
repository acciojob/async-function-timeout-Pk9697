//your JS code here. If required.
const textInput=document.getElementById('text')
const delayInput=document.getElementById('delay')
const submitButton=document.getElementById('btn')
const outputDiv=document.getElementById('output')
 
const solve = ()=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			outputDiv.textContent=textInput.value
			res()
		},delayInput.value)
	})
}


// const timeout=(delay)=>{
// 	return new Promise((res,rej)=>{
// 		setTimeout(()=>res(),delay)
// 	})
// }

// const solve = async ()=>{
// 	await timeout(delayInput.value)
// 	outputDiv.textContent=textInput.value
// }

submitButton.addEventListener('click',solve)
