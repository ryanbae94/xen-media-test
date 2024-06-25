$(document).ready(function () {
	// button
	$('.header-button-container').hover(
		function () {
			$('#header-button-arrow').attr('src', 'assets/images/arrow_red.png');
		},
		function () {
			$('#header-button-arrow').attr('src', 'assets/images/arrow_white.png');
		}
	);
	// accordion
	const list = [
		{
			id: 1,
			title: 'The new concept of Fixed structure',
			description:
				"It's completely structural, which means it's much better for assembly, flatness, and screen quality than traditional methods.",
		},
		{
			id: 2,
			title: 'Ultra-Rigid Bridged Die Casting',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, ',
		},
		{
			id: 3,
			title: 'Cable-free hub boards',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, ',
		},
		{
			id: 4,
			title: 'Low Power - Low Heat',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, ',
		},
		{
			id: 5,
			title: 'EZ Mount™ Only Installation Bracket',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, .',
		},
		{
			id: 6,
			title: 'Highly versatile',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint,',
		},
	];

	let openId = null;

	const handleToggle = (id) => {
		if (openId === id) {
			openId = null;
		} else {
			openId = id;
		}
		updateAccordion();
	};

	const updateAccordion = () => {
		$('.accordion-contents-wrapper').each(function () {
			const id = $(this).data('id');
			const isOpen = openId === id;
			const $description = $(this)
				.parent()
				.find('.accordion-description-wrapper');
			const $arrow = $(this).find('.accordion-arrow-icon');

			$description.toggleClass('open', isOpen);
			$arrow.toggleClass('open', isOpen);
		});
	};

	const renderAccordion = () => {
		$('.accordion-container').empty();
		list.forEach((item) => {
			const itemHtml = `
                <div>
                    <div class="accordion-contents-wrapper" data-id="${
											item.id
										}">
                        <span>${String(item.id).padStart(2, '0')}.</span>
                        <div id="title">${item.title}</div>
                        <div class="accordion-arrow-icon"></div>
                    </div>
                    <div class="accordion-border-line"></div>
                    <div class="accordion-description-wrapper">
                        <p>${item.description}</p>
                        <div class="accordion-border-line"></div>
                    </div>
                </div>
            `;
			$('.accordion-container').append(itemHtml);
		});

		$('.accordion-contents-wrapper').on('click', function () {
			const id = $(this).data('id');
			handleToggle(id);
		});
	};

	renderAccordion();

	// video
	const $video = $('#myVideo');
	const $playButton = $('.play-button');

	let isPlaying = false;

	function handlePlay() {
		if (isPlaying) {
			$video[0].pause();
		} else {
			$video[0].play();
		}
		isPlaying = !isPlaying;
		updatePlayButtonVisibility();
	}

	function handleVideoPlay() {
		isPlaying = true;
		updatePlayButtonVisibility();
	}

	function handleVideoPause() {
		isPlaying = false;
		updatePlayButtonVisibility();
	}

	function updatePlayButtonVisibility() {
		if (isPlaying) {
			$playButton.hide();
		} else {
			$playButton.show();
		}
	}

	$playButton.on('click', handlePlay);
	$video.on('play', handleVideoPlay);
	$video.on('pause', handleVideoPause);
});
