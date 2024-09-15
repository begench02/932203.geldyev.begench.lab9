const operations = new Set(['-', '+', '*', '/', '='])

function insert(number) {
	const is_last_operation = operations.has(document.form.result.value.at(-1))
	const is_curr_operation = operations.has(number)

	if (document.form.result.value.at(-1) === '.' && is_curr_operation) {
		alert('Введите число или уберите точку')
		return
	}

	if (document.form.result.value.at(-1) === undefined && is_curr_operation) {
		alert('Операция не может быть первой')
		return
	}

	if (is_last_operation && is_curr_operation) {
		document.form.result.value = document.form.result.value.slice(0, -1) + number
	} else {
		document.form.result.value = document.form.result.value + number
	}
}

function clean() {
	document.form.result.value = ''
}

function back() {
	let temp = document.form.result.value
	document.form.result.value = temp.substring(0, temp.length - 1)
}

function equal() {
	let res = document.form.result.value
	if (res) document.form.result.value = eval(res)
}
