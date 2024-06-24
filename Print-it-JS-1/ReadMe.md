# Print-It WebSite v.1



arrowRight.addEventListener("click", rightClick)






// 0 1 2 3
let i = 0
function rightClick() {
	i = i + 1
	if (i > 3) {
		i = 0
	}
	const slide1 = slides[i].imageUrl
	console.log(slide1)
	document.getElementById("img").src = slide1
}

const dot = document.createElement("div")