document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.querySelector('.menu-toggle')
	const menu = document.querySelector('.menu')

	// Обработчик события для переключения меню
	menuToggle.addEventListener('click', function () {
		// Переключаем класс 'active' для меню
		menu.classList.toggle('active')
	})

	// Закрытие меню при клике вне его
	document.addEventListener('click', function (event) {
		// Проверяем, был ли клик вне меню и кнопки
		if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
			menu.classList.remove('active') // Убираем класс 'active', чтобы скрыть меню
		}
	})
})

$(document).ready(function () {
	// Инициализация слайдера
	$('.slider').slick({
		dots: false, // Отключаем точки
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true, // Адаптивная высота для слайдов
	})

	// Добавляем обработчики событий для кнопок
	$('.prev').on('click', function () {
		$('.slider').slick('slickPrev')
		updateDate() // Обновляем дату при переходе
	})

	$('.next').on('click', function () {
		$('.slider').slick('slickNext')
		updateDate() // Обновляем дату при переходе
	})

	// Функция для обновления даты
	function updateDate() {
		const currentSlideIndex = $('.slider').slick('slickCurrentSlide') // Получаем индекс текущего слайда
		const dateText = String(currentSlideIndex + 1).padStart(2, '0') + '/08' // Форматируем дату
		$('#date').text(dateText) // Обновляем текст даты

		// Меняем цвет текста даты
		$('#date').removeClass('highlight') // Убираем класс выделения
		setTimeout(() => {
			$('#date').addClass('highlight') // Добавляем класс выделения
		}, 100) // Небольшая задержка для эффекта
	}

	// Инициализация даты при загрузке
	updateDate()
})

document.addEventListener('DOMContentLoaded', function () {
	const galleryInner = document.querySelector('.gallery-inner')
	const images = document.querySelectorAll('.gallery img')

	// Устанавливаем ширину gallery-inner
	const totalWidth = Array.from(images).reduce((total, img) => {
		return total + img.offsetWidth + 20 // 20 - это отступ (10px с каждой стороны)
	}, 0)

	galleryInner.style.width = totalWidth + 'px'
})

function toggleAnswer(questionElement) {
	const faqItem = questionElement.parentElement
	const answerElement = questionElement.nextElementSibling

	if (answerElement.style.display === 'block') {
		answerElement.style.display = 'none'
		faqItem.style.borderColor = 'transparent'
		questionElement.style.color = ' rgb(5, 12, 51)'
	} else {
		answerElement.style.display = 'block'
		faqItem.style.borderColor = ' rgb(241, 77, 52)'
		questionElement.style.color = ' rgb(241, 77, 52)'
	}
}
