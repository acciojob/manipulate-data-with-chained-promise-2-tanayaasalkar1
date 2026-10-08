let arr = [1,2,3,4];
let output = document.getElementById('output');

Promise.resolve(arr)
.then((arr)=>{
	let evenArr = arr.filter(num => num % 2 === 0);
	return new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent = evenArr;
			resolve(evenArr);
		}, 1000)
	});
	.then((evenArr)=>{
	let mulArr = evenArr.map(num=>num*2);
	return new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent = mulArr;
			resolve(mulArr);
		}, 3000);
	})
	})
})