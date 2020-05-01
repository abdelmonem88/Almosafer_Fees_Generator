/* Cancellation*/
//UI
let cxlAdtPen = document.getElementById('cxlAdtPen');
let cxlAdtNum = document.getElementById('cxlAdtNum');
let cxlChdPen = document.getElementById('cxlChdPen');
let cxlChdNum = document.getElementById('cxlChdNum');
let cxlInfPen = document.getElementById('cxlInfPen');
let cxlInfNum = document.getElementById('cxlInfNum');
let cxlMosFees = document.getElementById('cxlMf');
let cxlNonRef = document.getElementById('cxlNonRef');
let cxlUsedFare = document.getElementById('cxlUsedFare');
let serviceFees = document.getElementById('serviceFees');
let promotion = document.getElementById('promotion');
let bookingAmount = document.getElementById('bookingAmount');
//btns
let clearBtn = document.getElementById('clearCxlBtn');
let calcBtn = document.getElementById('calcCxlBtn');
/*UI Fees Result*/
let cxlResult = document.getElementById('cxlResult');
let enCxlFees = document.getElementById('enCxlFees');
let arCxlFees = document.getElementById('arCxlFees');
/*Ar*/
let uiArAdtPen = document.getElementById('uiArAdtPen');
let uiArChdPen = document.getElementById('uiArChdPen');
let uiArInfPen = document.getElementById('uiArInfPen');
let uiArMosFees = document.getElementById('uiArMosFees');
let uiArNonReftaxes = document.getElementById('uiArNonReftaxes');
let uiArAdtsFees = document.getElementById('uiArAdtsFees');
let uiArChdfees = document.getElementById('uiArChdfees');
let uiArInfFees = document.getElementById('uiArInfFees');
let uiArTotalFees = document.getElementById('uiArTotalFees');
let uiArUsedFare = document.getElementById('uiArUsedFare');
let uiArServiceFees = document.getElementById('uiArServiceFees');
let uiArPromotion = document.getElementById('uiArPromotion');
let uiArTotalDeducted = document.getElementById('uiArTotalDeducted');
let uiArRefundAmount = document.getElementById('uiArRefundAmount');
/*En*/
let uiEnAdtPen = document.getElementById('uiEnAdtPen');
let uiEnChdPen = document.getElementById('uiEnChdPen');
let uiEnInfPen = document.getElementById('uiEnInfPen');
let uiEnMosFees = document.getElementById('uiEnMosFees');
let uiEnNonReftaxes = document.getElementById('uiEnNonReftaxes');
let uiEnAdtsFees = document.getElementById('uiEnAdtsFees');
let uiEnChdfees = document.getElementById('uiEnChdfees');
let uiEnInfFees = document.getElementById('uiEnInfFees');
let uiEnTotalFees = document.getElementById('uiEnTotalFees');
let uiEnUsedFare = document.getElementById('uiEnUsedFare');
let uiEnServiceFees = document.getElementById('uiEnServiceFees');
let uiEnPromotion = document.getElementById('uiEnPromotion');
let uiEnTotalDeducted = document.getElementById('uiEnTotalDeducted');
let uiEnRefundAmount = document.getElementById('uiEnRefundAmount');
//Currency
let cxlEnCurrency = document.getElementById('cxlEnCurrency');
let cxlArCurrency = document.getElementById('cxlArCurrency');

function calculate() {
	cxlEmptyFields();
	//calculation
	let adtsFees =
		(parseFloat(cxlAdtPen.value) + parseFloat(cxlMosFees.value) + parseFloat(cxlNonRef.value)) *
		parseInt(cxlAdtNum.value);
	let chdsFees =
		(parseFloat(cxlChdPen.value) + parseFloat(cxlMosFees.value) + parseFloat(cxlNonRef.value)) *
		parseInt(cxlChdNum.value);
	let infsFees = parseFloat(cxlInfPen.value) * parseInt(cxlInfNum.value);
	let totalFees = parseFloat(adtsFees + chdsFees + infsFees);
	let totalDeducted =
		parseFloat(totalFees) +
		parseFloat(cxlUsedFare.value) +
		parseFloat(serviceFees.value) +
		parseFloat(promotion.value);
	let refundAmount = parseFloat(bookingAmount.value) - parseFloat(totalDeducted);
	let fixedRefundedAmount = refundAmount.toFixed(2)
	//check
	if (
		cxlAdtPen.value == '' ||
		cxlAdtNum.value == '' ||
		cxlMosFees.value == '' ||
		cxlNonRef.value == '' ||
		bookingAmount.value == ''
	) {
		alert('please enter all *mandatory fields!');
	} else if (cxlEnCurrency.value == 'choose currency' || cxlArCurrency.value == 'أختر العملة') {
		alert('please choose currency!');
	} else {
		cxlResult.innerHTML = `Refunded Amount: ${fixedRefundedAmount} ${cxlEnCurrency.value}`;
		/* Ar UI*/
		if (cxlAdtPen.value != '0') {
			uiArAdtPen.innerHTML = `رسوم الطيران للبالغ = ${cxlAdtPen.value} ${cxlArCurrency.value}`;
		}
		if (cxlChdPen.value != '0' && cxlChdNum.value != '0') {
			uiArChdPen.innerHTML = `رسوم الطيران للطفل = ${cxlChdPen.value} ${cxlArCurrency.value}`;
		} else {
			uiArChdPen.innerHTML = '';
		}
		if (cxlInfPen.value != '0' && cxlInfNum.value != '0') {
			uiArInfPen.innerHTML = `رسوم الطيران للرضيع = ${cxlInfPen.value} ${cxlArCurrency.value}`;
		} else {
			uiArInfPen.innerHTML = '';
		}
		if (cxlMosFees.value != '0') {
			uiArMosFees.innerHTML = `رسوم المسافر = ${cxlMosFees.value} ${cxlArCurrency.value}`;
		} else {
			uiArMosFees.innerHTML = '';
		}
		if (cxlNonRef.value != '0') {
			uiArNonReftaxes.innerHTML = `الضرائب الغير مستردة = ${cxlNonRef.value} ${cxlArCurrency.value}`;
		}
		if (adtsFees != 0) {
			uiArAdtsFees.innerHTML = `إجمالي الرسوم للبالغين = ${adtsFees} ${cxlArCurrency.value}`;
		} else {
			uiArAdtsFees.innerHTML = '';
		}
		if (chdsFees != 0) {
			uiArChdfees.innerHTML = `إجمالي الرسوم للأطفال = ${chdsFees} ${cxlArCurrency.value}`;
		} else {
			uiArChdfees.innerHTML = '';
		}
		if (infsFees != 0) {
			uiArInfFees.innerHTML = `إجمالي الرسوم للرضع = ${infsFees} ${cxlArCurrency.value}`;
		} else {
			uiArInfFees.innerHTML = '';
		}
		if (totalFees != 0) {
			uiArTotalFees.innerHTML = `إجمالي الرسوم لجميع الأفراد = ${totalFees} ${cxlArCurrency.value}`;
		} else {
			uiArTotalFees.innerHTML = '';
		}
		if (cxlUsedFare.value != '0') {
			uiArUsedFare.innerHTML = `قيمة الرحلة / الرحلات المستخدمة = ${cxlUsedFare.value} ${cxlArCurrency.value}`;
		} else {
			uiArUsedFare.innerHTML = '';
		}
		if (serviceFees.value != '0') {
			uiArServiceFees.innerHTML = `رسوم الخدمة للحجز = ${serviceFees.value} ${cxlArCurrency.value}`;
		} else {
			uiArServiceFees.innerHTML = '';
		}
		if (promotion.value != '0') {
			uiArPromotion.innerHTML = `كود خصم = ${promotion.value} ${cxlArCurrency.value}`;
		} else {
			uiArPromotion.innerHTML = '';
		}
		if (totalDeducted != 0) {
			uiArTotalDeducted.innerHTML = `إجمالي المبلغ المستقطع = ${totalDeducted} ${cxlArCurrency.value}`;
		} else {
			uiArTotalDeducted.innerHTML = '';
		}
		if (fixedRefundedAmount != 0) {
			uiArRefundAmount.innerHTML = `إجمالي المبلغ المسترد= ${fixedRefundedAmount} ${cxlArCurrency.value}`;
		} else {
			uiArRefundAmount.innerHTML = '';
		}
		/* En UI*/
		if (cxlAdtPen.value != '0') {
			uiEnAdtPen.innerHTML = `Adult Airline Fees = ${cxlAdtPen.value} ${cxlEnCurrency.value}`;
		}
		if (cxlChdPen.value != '0' && cxlChdNum.value != '0') {
			uiEnChdPen.innerHTML = `Child Airline Fees = ${cxlChdPen.value} ${cxlEnCurrency.value}`;
		} else {
			uiEnChdPen.innerHTML = '';
		}
		if (cxlInfPen.value != '0' && cxlInfNum.value != '0') {
			uiEnInfPen.innerHTML = `Infant Airline Fees = ${cxlInfPen.value} ${cxlEnCurrency.value}`;
		} else {
			uiEnInfPen.innerHTML = '';
		}
		if (cxlMosFees.value != '0') {
			uiEnMosFees.innerHTML = `Almosafer Fees = ${cxlMosFees.value} ${cxlEnCurrency.value}`;
		} else {
			uiEnMosFees.innerHTML = '';
		}
		if (cxlNonRef.value != '0') {
			uiEnNonReftaxes.innerHTML = `Non-refundable Taxes = ${cxlNonRef.value} ${cxlEnCurrency.value}`;
		}
		if (adtsFees != 0) {
			uiEnAdtsFees.innerHTML = `Total Adults Fees = ${adtsFees} ${cxlEnCurrency.value}`;
		} else {
			uiEnAdtsFees.innerHTML = '';
		}
		if (chdsFees != 0) {
			uiEnChdfees.innerHTML = `Total Children Fees = ${chdsFees} ${cxlEnCurrency.value}`;
		} else {
			uiEnChdfees.innerHTML = '';
		}
		if (infsFees != 0) {
			uiEnInfFees.innerHTML = `Total Infants Fees = ${infsFees} ${cxlEnCurrency.value}`;
		} else {
			uiEnInfFees.innerHTML = '';
		}
		if (totalFees != 0) {
			uiEnTotalFees.innerHTML = `Total For All Passengers = ${totalFees} ${cxlEnCurrency.value}`;
		} else {
			uiEnTotalFees.innerHTML = '';
		}
		if (cxlUsedFare.value != '0') {
			uiEnUsedFare.innerHTML = `Used Trip/Trips Amount = ${cxlUsedFare.value} ${cxlEnCurrency.value}`;
		} else {
			uiEnUsedFare.innerHTML = '';
		}
		if (serviceFees.value != '0') {
			uiEnServiceFees.innerHTML = `Booking Service Fees = ${serviceFees.value} ${cxlEnCurrency.value}`;
		} else {
			uiEnServiceFees.innerHTML = '';
		}
		if (promotion.value != '0') {
			uiEnPromotion.innerHTML = `Promotion Code = ${promotion.value} ${cxlEnCurrency.value}`;
		} else {
			uiEnPromotion.innerHTML = '';
		}
		if (totalDeducted != 0) {
			uiEnTotalDeducted.innerHTML = `Total Deducted Amount = ${totalDeducted} ${cxlEnCurrency.value}`;
		} else {
			uiEnTotalDeducted.innerHTML = '';
		}
		if (fixedRefundedAmount != 0) {
			uiEnRefundAmount.innerHTML = `Total Refunded Amount = ${fixedRefundedAmount} ${cxlEnCurrency.value}`;
		} else {
			uiEnRefundAmount.innerHTML = '';
		}
	}
}

calcBtn.addEventListener('click', calculate);

//fill Empty fields funcation
function cxlEmptyFields() {
	if (cxlChdPen.value == '' || cxlChdNum.value == '') {
		cxlChdPen.value = '0';
		cxlChdNum.value = '0';
	}
	if (cxlInfPen.value == '' || cxlInfNum.value == '') {
		cxlInfPen.value = '0';
		cxlInfNum.value = '0';
	}
	if (cxlNonRef.value == '') {
		cxlNonRef.value = '0';
	}
	if (cxlUsedFare.value == '') {
		cxlUsedFare.value = '0';
	}
	if (serviceFees.value == '') {
		serviceFees.value = '0';
	}
	if (promotion.value == '') {
		promotion.value = '0';
	}
}

//Clear Functions
function cxlClearInputs() {
	if (
		cxlAdtPen.value == '' &&
		cxlAdtNum.value == '' &&
		cxlChdPen.value == '' &&
		cxlChdNum.value == '' &&
		cxlInfPen.value == '' &&
		cxlInfNum.value == '' &&
		cxlMosFees.value == '' &&
		cxlNonRef.value == '' &&
		cxlUsedFare.value == '' &&
		serviceFees.value == '' &&
		promotion.value == '' &&
		bookingAmount.value == '' &&
		cxlResult.innerHTML == '' &&
		cxlEnCurrency.value == 'choose currency' &&
		cxlArCurrency.value == 'أختر العملة' &&
		uiArAdtPen.innerHTML == ''
	) {
		alert('nothing to clear!');
	} else {
		cxlAdtPen.value = '';
		cxlAdtNum.value = '';
		cxlChdPen.value = '';
		cxlChdNum.value = '';
		cxlInfPen.value = '';
		cxlInfNum.value = '';
		cxlMosFees.value = '';
		cxlNonRef.value = '';
		cxlUsedFare.value = '';
		serviceFees.value = '';
		promotion.value = '';
		bookingAmount.value = '';
		cxlResult.innerHTML = '';
		cxlEnCurrency.value = 'choose currency';
		cxlArCurrency.value = 'أختر العملة';
		uiArAdtPen.innerHTML = '';
	}
}

clearBtn.addEventListener('click', cxlClearInputs);

function cxlClearUiFees() {
	//En
	if (uiEnAdtPen.innerHTML != '') {
		uiEnAdtPen.innerHTML = '';
	}
	if (uiEnChdPen.innerHTML != '') {
		uiEnChdPen.innerHTML = '';
	}
	if (uiEnInfPen.innerHTML != '') {
		uiEnInfPen.innerHTML = '';
	}
	if (uiEnMosFees.innerHTML != '') {
		uiEnMosFees.innerHTML = '';
	}
	if (uiEnNonReftaxes.innerHTML != '') {
		uiEnNonReftaxes.innerHTML = '';
	}
	if (uiEnAdtsFees.innerHTML != '') {
		uiEnAdtsFees.innerHTML = '';
	}
	if (uiEnChdfees.innerHTML != '') {
		uiEnChdfees.innerHTML = '';
	}
	if (uiEnInfFees.innerHTML != '') {
		uiEnInfFees.innerHTML = '';
	}
	if (uiEnTotalFees.innerHTML != '') {
		uiEnTotalFees.innerHTML = '';
	}
	if (uiEnUsedFare.innerHTML != '') {
		uiEnUsedFare.innerHTML = '';
	}
	if (uiEnServiceFees.innerHTML != '') {
		uiEnServiceFees.innerHTML = '';
	}
	if (uiEnPromotion.innerHTML != '') {
		uiEnPromotion.innerHTML = '';
	}
	if (uiEnTotalDeducted.innerHTML != '') {
		uiEnTotalDeducted.innerHTML = '';
	}
	if (uiEnRefundAmount.innerHTML != '') {
		uiEnRefundAmount.innerHTML = '';
	}
	//Ar
	if (uiArAdtPen.innerHTML != '') {
		uiArAdtPen.innerHTML = '';
	}
	if (uiArChdPen.innerHTML != '') {
		uiArChdPen.innerHTML = '';
	}
	if (uiArInfPen.innerHTML != '') {
		uiArInfPen.innerHTML = '';
	}
	if (uiArMosFees.innerHTML != '') {
		uiArMosFees.innerHTML = '';
	}
	if (uiArNonReftaxes.innerHTML != '') {
		uiArNonReftaxes.innerHTML = '';
	}
	if (uiArAdtsFees.innerHTML != '') {
		uiArAdtsFees.innerHTML = '';
	}
	if (uiArChdfees.innerHTML != '') {
		uiArChdfees.innerHTML = '';
	}
	if (uiArInfFees.innerHTML != '') {
		uiArInfFees.innerHTML = '';
	}
	if (uiArTotalFees.innerHTML != '') {
		uiArTotalFees.innerHTML = '';
	}
	if (uiArUsedFare.innerHTML != '') {
		uiArUsedFare.innerHTML = '';
	}
	if (uiArServiceFees.innerHTML != '') {
		uiArServiceFees.innerHTML = '';
	}
	if (uiArPromotion.innerHTML != '') {
		uiArPromotion.innerHTML = '';
	}
	if (uiArTotalDeducted.innerHTML != '') {
		uiArTotalDeducted.innerHTML = '';
	}
	if (uiArRefundAmount.innerHTML != '') {
		uiArRefundAmount.innerHTML = '';
	}
}
clearBtn.addEventListener('click', cxlClearUiFees);
