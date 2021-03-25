input.onButtonPressed(Button.A, function () {
    _case += 1
    if (_case == 1) {
        basic.showNumber(1)
    } else if (_case == 2) {
        basic.showNumber(2)
    } else if (_case == 3) {
        basic.showNumber(3)
    } else {
        basic.showNumber(4)
        _case = 0
    }
})
let _case = 0
_case = 0
basic.forever(function () {
	
})
