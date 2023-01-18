
function validate() {

    // ====================radio button
    const maleEl = document.getElementById('male');
    const femaleEl = document.getElementById('female');
    const othersEl = document.getElementById('others');
    if (maleEl.checked == true) {
        document.querySelector('.p5').innerHTML = '';
    }
    else if (femaleEl.checked == true) {
        document.querySelector('.p5').innerHTML = '';
    }
    else if (othersEl.checked == true) {
        document.querySelector('.p5').innerHTML = '';
    }
    else {
        document.querySelector('.p5').innerHTML = '*SELECT ANY ONE*';
        
    }
    // ================check box===============\\

    
    const check1 = document.querySelector('.terms');
    if (check1.checked == true) {
        document.querySelector('.p7').innerHTML = '';
    } else {
        document.querySelector('.p7').innerHTML = 'Check the box';
        return false
    }


}
