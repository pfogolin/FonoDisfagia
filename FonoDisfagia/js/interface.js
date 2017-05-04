$(document).ready(function(){
	// FUNCAO PARA CLICAR E SUBIR AO TOPO
	$(".subir-topo").click(function(){
		$("html, body").animate({scrollTop : 0}, 800);
	});

	// MENU HAMBURGUER
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.overlay').fadeToggle();
		$('.main-menu ul').toggleClass('active');
		$('#nav-icon').toggleClass('active');
		$("html, body").animate({scrollTop : 0}, 800);
	});

	// MENU PROCEDIMENTOS
	$('.tem-sub').click(function(){
		$(this).stop().toggleClass('active');
	});

	// PRODUCAO ACADEMICA
	clickAno	= $('#ano ul li a');
	abaAno		= $('#prod-acad dt');
	abaDados	= $('#prod-acad dt').next();

	/* ESCONDE TODOS */
	function esconde_todos(){
		abaAno.removeClass('active');
		abaDados.removeClass('active');
	}

	esconde_todos();

	/* EXIBE SÓ O PRIMEIRO RESULTADO */
	$('#prod-acad dt:first-child').addClass('active');
	$('#prod-acad dt:first-child').next().addClass('active');

	clickAno.click(function(){
		esconde_todos();
		anoSelect	= $(this).text();
		clickAno.removeClass('active');
		$(this).addClass('active');
		$('#prod-acad dt[data-ano=' + anoSelect + ']').addClass('active');
		$('#prod-acad dt[data-ano=' + anoSelect + ']').next().addClass('active');
	});

	// Mesma coisa função de cima mas para a página de entenda sua doença
	accordion_doencas();


	// ACCORDEON
	$('dl.safona dt').click(function(){
		$(this).addClass('active');
	});
});

function accordion_doencas(){
	// PRODUCAO ACADEMICA
	clickAno	= $('#doencas ul li a');
	abaAno		= $('#prod-acad dt');
	abaDados	= $('#prod-acad dt').next();

	/* ESCONDE TODOS */
	function esconde_todos(){
		abaAno.removeClass('active');
		abaDados.removeClass('active');
	}

	esconde_todos();

	/* EXIBE SÓ O PRIMEIRO RESULTADO */
	$('#prod-acad dt:first-child').addClass('active');
	$('#prod-acad dt:first-child').next().addClass('active');

	clickAno.click(function(){
		esconde_todos();
		anoSelect	= $(this).attr( 'id' );
		clickAno.removeClass('active');
		$(this).addClass('active');
		$('#prod-acad dt[data-ano=' + anoSelect + ']').addClass('active');
		$('#prod-acad dt[data-ano=' + anoSelect + ']').next().addClass('active');
	});
}