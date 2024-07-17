function handleSubmitAllClick() {
	
	/*form 데이터 객체를 일반 객체로 변환하는 코드이다. */
	const forms = document.querySelectorAll("form");
	const formData1 = new FormData(forms[0]);
	const formData2 = new FormData(forms[1]);
	
	let reqData = {}
	
	/**
		formData1 = {
			username: "admin",
			password: "1234"
		}
		entries = [ 
			["username", "admin"], 
			["password", "1234"] ]
		]
		
	*/
	
	for(let entry of formData1.entries()) {
		const [ key, value ] = entry; 
		reqData = {
			...reqData,
			[key]: value
		} 
		/* -> formData1을 reqData 객체안에 반복을 통해 넣어주었다. */
	}
	
	/**
	formData2 = {
			chk: "chk1",
			chk: "chk2",
			rdo: "rdo1"
		}
		entries = [ 
			["chk", "chk1"], 
			["chk", "chk2"], 
			["rdo", "rdo1"]
		]
	/* key값이 같기 때문에 chk1이 덮어씌어진다. 따라서 chk라는 키값에 chk1, chk2를 넣어야 한다. */
	
	
	let duplicatedKeys = []; /* 하나의 키값에 여러 value들을 넣기 위해 배열에 넣는다 */
	let keyCount = {}
	
	for(let key of formData2.keys()) {
		if(Object.keys(keyCount).includes(key)) {
			keyCount = {
				...keyCount,
				[key]: keyCount[key] + 1
			}
			continue;
		}
		keyCount = {
			...keyCount,
			[key]: 1
		}
	}
	
	for(let key of Object.keys(keyCount)) {
		if(keyCount[key] > 1) {
			duplicatedKeys = [ ...duplicatedKeys, key ];
		}
	}
	
	console.log(keyCount);
	console.log(duplicatedKeys);
	
	for(let entry of formData2.entries()) {
		const [ key, value ] = entry;
		if(duplicatedKeys.includes(key)) { /* 키값이 중복인 entry 들을 value를 배열로 넣어준다 */
			reqData = {
				...reqData,
				[key]: [ ...(!reqData[key] ? [] : reqData[key]), value ]
				/* !reqData[key] -> undefined면(chk) 빈 배열에 chk1을 넣어라 */ 
				/* key값이 undefined가 아니면 기존 배열에 chk2를 추가 */
			}
			continue;
		}
		reqData = {
			...reqData,
			[key]: value
		}
		
	}
	
	console.log(reqData);
	
	const queryString = new URLSearchParams(reqData).toString();
	
	fetch(`http://localhost:8080/dvd/form?${queryString}`)
	.then(response => {
		response.json()
		.then(data => {
			const body = document.querySelector("body");
			body.innerHTML += `<h1>${data.code}</h1>`;
			body.innerHTML += `<h1>${data.msg}</h1>`;
			console.log(data);
		})
	})
	
}





