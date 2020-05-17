window.addEventListener('DOMContentLoaded', ()=> {
	document.querySelectorAll('ol li p:first-child').forEach(el=>{
		let start = el.innerText.match(/\[(.*?)\]/)

		if(start){
			el.parentNode.parentNode.setAttribute('start', start[1])
			el.innerText = el.innerText.replace(/\[(.*?)\]./, '')
		}
	})
})
