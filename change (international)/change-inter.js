//General Variables
let cxlId = document.getElementById('cxlId');
let cxlPnr = document.getElementById('cxlPnr');
let mosafer = document.querySelector('#mf');
let taxes = document.querySelector('#tax');
let result = document.querySelector('#result');
//Adulte Variables
let adtPenalty = document.querySelector('#adulte');
let adtDiff = document.querySelector('#adtDiff');
let adtNumber = document.querySelector('#adtNumber');
//child Variables
let chdPenalty = document.querySelector('#child');
let chdDiff = document.querySelector('#chdDiff');
let chdNumber = document.querySelector('#chdNumber');
//infant Variables
let infPenalty = document.querySelector('#infant');
let infDiff = document.querySelector('#infDiff');
let infNumber = document.querySelector('#infNumber');
//Currency
let chgEnCurrency = document.getElementById('chgEnCurrency');
let chgArCurrency = document.getElementById('chgArCurrency');
//BTNs Variables
let calc = document.querySelector('#calc');
let clear = document.querySelector('#clear');
//fee output variables
let arabicFees = document.querySelector('#arabic-fees');
let englishFees = document.querySelector('#english-fees');
/*ui output variables*/
//Ar
let uiArId = document.getElementById('uiArId');
let uiArPnr = document.getElementById('uiArPnr');
let uiArAdtAlFees = document.getElementById('uiArAdtAlFees');
let uiArChdAlFees = document.getElementById('uiArChdAlFees');
let uiArInfAlFees = document.getElementById('uiArInfAlFees');
let uiArAdtFd = document.getElementById('uiArAdtFd');
let uiArChdFd = document.getElementById('uiArChdFd');
let uiArInfFd = document.getElementById('uiArInfFd');
let uiArMosaferFees = document.getElementById('uiArMosaferFees');
let uiArNonRefTaxes = document.getElementById('uiArNonRefTaxes');
let uiArTotalAdtFees = document.getElementById('uiArTotalAdtFees');
let uiArTotalChdFees = document.getElementById('uiArTotalChdFees');
let uiArTotalInfFees = document.getElementById('uiArTotalInfFees');
let uiArTotalForAll = document.getElementById('uiArTotalForAll');
//En
let uiEnId = document.getElementById('uiEnId');
let uiEnPnr = document.getElementById('uiEnPnr');
let uiEnAdtAlFees = document.getElementById('uiEnAdtAlFees');
let uiEnChdAlFees = document.getElementById('uiEnChdAlFees');
let uiEnInfAlFees = document.getElementById('uiEnInfAlFees');
let uiEnAdtFd = document.getElementById('uiEnAdtFd');
let uiEnChdFd = document.getElementById('uiEnChdFd');
let uiEnInfFd = document.getElementById('uiEnInfFd');
let uiEnMosaferFees = document.getElementById('uiEnMosaferFees');
let uiEnNonRefTaxes = document.getElementById('uiEnNonRefTaxes');
let uiEnTotalAdtFees = document.getElementById('uiEnTotalAdtFees');
let uiEnTotalChdFees = document.getElementById('uiEnTotalChdFees');
let uiEnTotalInfFees = document.getElementById('uiEnTotalInfFees');
let uiEnTotalForAll = document.getElementById('uiEnTotalForAll');

//calculat Function
function calculator() {
	chgEmptyFields();
	let adtFees =
		parseFloat(adtPenalty.value) + parseFloat(mosafer.value) + parseFloat(taxes.value) + parseFloat(adtDiff.value);
	let totalAdt = parseFloat(adtFees * parseInt(adtNumber.value));

	let chdFees =
		parseFloat(chdPenalty.value) + parseFloat(mosafer.value) + parseFloat(taxes.value) + parseFloat(chdDiff.value);
	let totalChd = parseFloat(chdFees * parseInt(chdNumber.value));

	let infFees = parseFloat(infPenalty.value) + parseFloat(infDiff.value);
	let totalInf = parseFloat(infFees * parseInt(infNumber.value));

	let finalTotal = totalAdt + totalChd + totalInf;
	let fixedToatl = finalTotal;

	if (
		cxlId.value == '' ||
		cxlPnr.value == '' ||
		mosafer.value == '' ||
		taxes.value == '' ||
		adtPenalty.value == '' ||
		adtNumber.value == ''
	) {
		alert('please enter all *mandatory fields!');
	} else if (chgEnCurrency.value == 'choose currency' || chgArCurrency.value == 'أختر العملة') {
		alert('please choose currency!');
	} else {
		result.innerHTML = `Total Fees:  ${fixedToatl} ${chgEnCurrency.value}`;
		//Ar
		if (cxlId.value != '') {
			uiArId.innerHTML = `${cxlId.value} = رمز المسافر`;
		}
		if (cxlPnr.value != '') {
			uiArPnr.innerHTML = `${cxlPnr.value} = الرقم المرجعي للطيران`;
		}
		if (adtPenalty.value != '0') {
			uiArAdtAlFees.innerHTML = `رسوم الطيران للبالغ = ${adtPenalty.value} ${chgArCurrency.value}`;
		}
		if (chdPenalty.value != '0' && chdNumber.value != '0') {
			uiArChdAlFees.innerHTML = `رسوم الطيران للطفل = ${chdPenalty.value} ${chgArCurrency.value}`;
		} else {
			uiArChdAlFees.innerHTML = '';
		}
		if (infPenalty.value != '0' && infNumber.value != '0') {
			uiArInfAlFees.innerHTML = `رسوم الطيران للرضيع = ${infPenalty.value} ${chgArCurrency.value}`;
		} else {
			uiArInfAlFees.innerHTML = '';
		}
		if (adtDiff.value != '0') {
			uiArAdtFd.innerHTML = `فرق السعر للبالغ =${adtDiff.value} ${chgArCurrency.value}`;
		} else {
			uiArAdtFd.innerHTML = '';
		}
		if (chdDiff.value != '0' && chdNumber.value != '0') {
			uiArChdFd.innerHTML = `فرق السعر للطفل =${chdDiff.value} ${chgArCurrency.value}`;
		} else {
			uiArChdFd.innerHTML = '';
		}
		if (infDiff.value != '0' && infNumber.value != '0') {
			uiArInfFd.innerHTML = `فرق السعر للرضيع =${infDiff.value} ${chgArCurrency.value}`;
		} else {
			uiArInfFd.innerHTML = '';
		}
		if (mosafer.value != '0') {
			uiArMosaferFees.innerHTML = `رسوم المسافر = ${mosafer.value} ${chgArCurrency.value}`;
		} else {
			uiArMosaferFees.innerHTML = '';
		}
		if (taxes.value != '0') {
			uiArNonRefTaxes.innerHTML = `الضرائب الغير مستردة = ${taxes.value} ${chgArCurrency.value}`;
		} else {
			uiArNonRefTaxes.innerHTML = '';
		}
		if (totalAdt != 0) {
			uiArTotalAdtFees.innerHTML = `إجمالي الرسوم للبالغين = ${totalAdt} ${chgArCurrency.value}`;
		} else {
			uiArTotalAdtFees.innerHTML = '';
		}
		if (totalChd != 0) {
			uiArTotalChdFees.innerHTML = `إجمالي الرسوم للأطفال = ${totalChd} ${chgArCurrency.value}`;
		} else {
			uiArTotalChdFees.innerHTML = '';
		}
		if (totalInf != 0) {
			uiArTotalInfFees.innerHTML = `إجمالي الرسوم للرضع = ${totalInf} ${chgArCurrency.value}`;
		} else {
			uiArTotalInfFees.innerHTML = '';
		}
		if (fixedToatl != 0) {
			uiArTotalForAll.innerHTML = `الاجمالي لجميع الأفراد = ${fixedToatl} ${chgArCurrency.value}`;
		}
		//En
		if (cxlId.value != '') {
			uiEnId.innerHTML = `Almosafer ID = ${cxlId.value}`;
		}
		if (cxlPnr.value != '') {
			uiEnPnr.innerHTML = `Airline PNR = ${cxlPnr.value}`;
		}
		if (adtPenalty.value != '0') {
			uiEnAdtAlFees.innerHTML = `Adult Airline fees = ${adtPenalty.value} ${chgEnCurrency.value}`;
		}
		if (chdPenalty.value != '0' && chdNumber.value != '0') {
			uiEnChdAlFees.innerHTML = `Child Airline fees = ${chdPenalty.value} ${chgEnCurrency.value}`;
		} else {
			uiEnChdAlFees.innerHTML = '';
		}
		if (infPenalty.value != '0' && infNumber.value != '0') {
			uiEnInfAlFees.innerHTML = `Infant Airline fees = ${infPenalty.value} ${chgEnCurrency.value}`;
		} else {
			uiEnInfAlFees.innerHTML = '';
		}
		if (adtDiff.value != '0') {
			uiEnAdtFd.innerHTML = `Adult Fare Differance =${adtDiff.value} ${chgEnCurrency.value}`;
		} else {
			uiEnAdtFd.innerHTML = '';
		}
		if (chdDiff.value != '0' && chdNumber.value != '0') {
			uiEnChdFd.innerHTML = `Child Fare Differance =${chdDiff.value} ${chgEnCurrency.value}`;
		} else {
			uiEnChdFd.innerHTML = '';
		}
		if (infDiff.value != '0' && infNumber.value != '0') {
			uiEnInfFd.innerHTML = `Infant Fare Differance =${infDiff.value} ${chgEnCurrency.value}`;
		} else {
			uiEnInfFd.innerHTML = '';
		}
		if (mosafer.value != '0') {
			uiEnMosaferFees.innerHTML = `Almosafer fees = ${mosafer.value} ${chgEnCurrency.value}`;
		} else {
			uiEnMosaferFees.innerHTML = '';
		}
		if (taxes.value != '0') {
			uiEnNonRefTaxes.innerHTML = `Non-refundable Taxes = ${taxes.value} ${chgEnCurrency.value}`;
		} else {
			uiEnNonRefTaxes.innerHTML = '';
		}
		if (totalAdt != 0) {
			uiEnTotalAdtFees.innerHTML = `Total for Adults = ${totalAdt} ${chgEnCurrency.value}`;
		} else {
			uiEnTotalAdtFees.innerHTML = '';
		}
		if (totalChd != 0) {
			uiEnTotalChdFees.innerHTML = `Total for Children = ${totalChd} ${chgEnCurrency.value}`;
		} else {
			uiEnTotalChdFees.innerHTML = '';
		}
		if (totalInf != 0) {
			uiEnTotalInfFees.innerHTML = `Total for Infants = ${totalInf} ${chgEnCurrency.value}`;
		} else {
			uiEnTotalInfFees.innerHTML = '';
		}
		if (fixedToatl != 0) {
			uiEnTotalForAll.innerHTML = `Total for All = ${fixedToatl} ${chgEnCurrency.value}`;
		}
	}
}

calc.addEventListener('click', calculator);

//Empty Fields Function
function chgEmptyFields() {
	if (adtDiff.value == '') {
		adtDiff.value = '0';
	}
	if (chdPenalty.value == '' || chdNumber.value == '') {
		chdPenalty.value = '0';
		chdNumber.value = '0';
	}
	if (chdDiff.value == '') {
		chdDiff.value = '0';
	}
	if (infPenalty.value == '' || infNumber.value == '') {
		infPenalty.value = '0';
		infNumber.value = '0';
	}
	if (infDiff.value == '') {
		infDiff.value = '0';
	}
	if (tax.value == '') {
		tax.value = '0';
	}
}

//Clear Function
function ClearInputs() {
	if (
		cxlId.value == '' &&
		cxlPnr.value == '' &&
		mosafer.value == '' &&
		taxes.value == '' &&
		adtPenalty.value == '' &&
		adtDiff.value == '' &&
		adtNumber.value == '' &&
		chdPenalty.value == '' &&
		chdDiff.value == '' &&
		chdNumber.value == '' &&
		infPenalty.value == '' &&
		infDiff.value == '' &&
		infNumber.value == '' &&
		chgEnCurrency.value == 'choose currency' &&
		chgArCurrency.value == 'أختر العملة'
	) {
		alert('nothing to clear!');
	} else {
		cxlId.value = '';
		cxlPnr.value = '';
		mosafer.value = '';
		taxes.value = '';
		adtPenalty.value = '';
		adtDiff.value = '';
		adtNumber.value = '';
		chdPenalty.value = '';
		chdDiff.value = '';
		chdNumber.value = '';
		infPenalty.value = '';
		infDiff.value = '';
		infNumber.value = '';
		result.innerHTML = '';
		chgEnCurrency.value = 'choose currency';
		chgArCurrency.value = 'أختر العملة';
	}
}
clear.addEventListener('click', ClearInputs);

function chgClearUiFees() {
	//Ar
	if (uiArId.innerHTML != '') {
		uiArId.innerHTML = '';
	}
	if (uiArPnr.innerHTML != '') {
		uiArPnr.innerHTML = '';
	}
	if (uiArAdtAlFees.innerHTML != '') {
		uiArAdtAlFees.innerHTML = '';
	}
	if (uiArChdAlFees.innerHTML != '') {
		uiArChdAlFees.innerHTML = '';
	}
	if (uiArInfAlFees.innerHTML != '') {
		uiArInfAlFees.innerHTML = '';
	}
	if (uiArAdtFd.innerHTML != '') {
		uiArAdtFd.innerHTML = '';
	}
	if (uiArChdFd.innerHTML != '') {
		uiArChdFd.innerHTML = '';
	}
	if (uiArInfFd.innerHTML != '') {
		uiArInfFd.innerHTML = '';
	}
	if (uiArMosaferFees.innerHTML != '') {
		uiArMosaferFees.innerHTML = '';
	}
	if (uiArNonRefTaxes.innerHTML != '') {
		uiArNonRefTaxes.innerHTML = '';
	}
	if (uiArTotalAdtFees.innerHTML != '') {
		uiArTotalAdtFees.innerHTML = '';
	}
	if (uiArTotalChdFees.innerHTML != '') {
		uiArTotalChdFees.innerHTML = '';
	}
	if (uiArTotalInfFees.innerHTML != '') {
		uiArTotalInfFees.innerHTML = '';
	}
	if (uiArTotalForAll.innerHTML != '') {
		uiArTotalForAll.innerHTML = '';
	}
	//En
	if (uiEnId.innerHTML != '') {
		uiEnId.innerHTML = '';
	}
	if (uiEnPnr.innerHTML != '') {
		uiEnPnr.innerHTML = '';
	}
	if (uiEnAdtAlFees.innerHTML != '') {
		uiEnAdtAlFees.innerHTML = '';
	}
	if (uiEnChdAlFees.innerHTML != '') {
		uiEnChdAlFees.innerHTML = '';
	}
	if (uiEnInfAlFees.innerHTML != '') {
		uiEnInfAlFees.innerHTML = '';
	}
	if (uiEnAdtFd.innerHTML != '') {
		uiEnAdtFd.innerHTML = '';
	}
	if (uiEnChdFd.innerHTML != '') {
		uiEnChdFd.innerHTML = '';
	}
	if (uiEnInfFd.innerHTML != '') {
		uiEnInfFd.innerHTML = '';
	}
	if (uiEnMosaferFees.innerHTML != '') {
		uiEnMosaferFees.innerHTML = '';
	}
	if (uiEnNonRefTaxes.innerHTML != '') {
		uiEnNonRefTaxes.innerHTML = '';
	}
	if (uiEnTotalAdtFees.innerHTML != '') {
		uiEnTotalAdtFees.innerHTML = '';
	}
	if (uiEnTotalChdFees.innerHTML != '') {
		uiEnTotalChdFees.innerHTML = '';
	}
	if (uiEnTotalInfFees.innerHTML != '') {
		uiEnTotalInfFees.innerHTML = '';
	}
	if (uiEnTotalForAll.innerHTML != '') {
		uiEnTotalForAll.innerHTML = '';
	}
}
clear.addEventListener('click', chgClearUiFees);
