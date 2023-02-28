//Problem 2
function perimeter (length, width) {
	result = 2 * (length+width)
	return result
}
let Length = 5
let Width = 4
let Perimeter = perimeter (Length, Width)
console.log(Perimeter)

//Problem 3
function area (R) {
	result = R * R * 3.14
	return result 
}
let radius = 5
let Area = area(radius)
console.log(Area)

//Problem 13
function greatest (n1, n2) {
	if (n1 > n2) {
		return n1
	}

	else 
		return n2
}
let N1 = 5
let N2 = 4
let Max = greatest(N1,N2)
console.log(Max)