
function shuffle(array) {
for (var i = array.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var temp = array[i];
array[i] = array[j];
array[j] = temp;
}
return array;
}

function Data () {
	Data = new Date();
	Hour = Data.getHours();
	Minutes = Data.getMinutes();
	Seconds = Data.getSeconds();
	s=Hour+":"+Minutes+":"+Seconds;
	alert(s);
}

/*смена текстуры поля*/
function changeBoard() {
	var c = "url(img/" + $('input:checked').val() + ".jpg)";
	$('html').css('backgroundImage', c);
}



// создание поля
function createField() {
	var cards = [1,2,3,4,5,6,7,8,9,10,11,12]; // список карт
	$('.card').remove(); // очистка поля
	//получение количества строк и столбцев
	k=$('#col').val() 
	l=$('#line').val(); 
	p=k*l // всего карт
	if (p%2==0 && p!=0 && p<=24) { // проверка чет-нечет и 0
		//вычисление размера поля
		w=(k*131)+'px'; 
		h=(l*168)+'px'; 
		// установка размеров поля
		$('.field').css({"width": w,
										 "height": h,
										 "padding": "10px"
		}); 
	
 	shuffle(cards); // перемешиваем список начальных карт
 	var randomCards = [ ]; //создаем массив для рандомных карт

 	/*заполняем рандомный массив картами в двойном экземпляре*/
 	for (var i = 0; i < p/2; i++) {
 			randomCards[i]=cards[i];
 			randomCards[i+p/2]=cards[i];
 	}

 	shuffle(randomCards); // перемешиваем массив рендомных карт
 	
 	// вывод карт на поле
 	for (i = 0; i < p; i++) {
				$('.field').append("<img src='img/card.jpg' alt='"+randomCards[i]+"' class='card'>");
		}
		
		
	} //конец If истина
	/*все числа нечетные, либо = 0
	вывод сообщения и обнуление введенных значений*/
	else { alert("введены не верные параметры");
		$('#col, #line').val(NONE);
	} // конец else
	

/*$(".field").selectable();*/

/*в момент нажатия рубашка меняетя на картинку*/

$('img').mousedown(function(){
var	src = 'img/' + $(this).attr('alt') + '.jpg';
	$(this).attr('src', src);

});

/*$('img').click(function(){*/

$("img").click(function() {
		$(this).toggleClass("ui-selected");

if ($('.ui-selected').length == 2) {
	setTimeout(function () { // задержка выполнения
		if ($('.ui-selected:first').attr('src') == $('.ui-selected:last').attr('src')) {
			$('.ui-selected').fadeTo(0, 0);
	
		} $('.ui-selected').removeClass('ui-selected').attr('src','img/card.jpg');
	},200); 
}

}); 



}



