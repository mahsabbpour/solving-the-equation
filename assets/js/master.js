let var1 = document.querySelector('.var1')

let var2 = document.querySelector('.var2')

let var3 = document.querySelector('.var3')
let x = 'X'

let _answer = document.querySelector('.answer')
let _Eq = document.querySelector('.Eq')
let _btn = document.querySelector('.btn')


_btn.addEventListener('click', function () {
    _var1 = var1.value
    _var2 = var2.value
    _var3 = var3.value
    let x = 'X'

    if (_var1 == '' || _var2 == '' || _var3 == '') {
        alert('لطفا تمامی متغیر ها را پر کنید')
    } else if (_btn.innerHTML == 'عملیات دیگر') {
        var1.value = ''
        var2.value = ''
        var3.value = ''
        _answer.innerHTML = ''
        _Eq.innerHTML = ''
        _btn.innerHTML = 'محاسبه'
    } else {
        let _M = (_var3 - _var2) / _var1
        _Eq.innerHTML = (_var1+x) +'+ ('+ (_var2 -_var3) + ') = 0'  
        _answer.innerHTML = _M
        _Eq.style.color = ' rgb(47, 91, 160) '
        _answer.style.color = ' rgb(47, 91, 160) '
        _btn.innerHTML = 'عملیات دیگر'

    }



}
)