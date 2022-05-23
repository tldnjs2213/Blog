'use strict';

class PageMove {
	constructor(divLogo, buttonAboutMeButton, sectionContainer, footerContactMeContainer, ...divPageMove) {
		this.divLogo = divLogo;
		this.buttonAboutMeButton = buttonAboutMeButton;
		this.sectionContainer = sectionContainer;
		this.footerContactMeContainer = footerContactMeContainer;
		this.divPageMove = divPageMove;
	}
	homePageMove() {
		this.divLogo.addEventListener('click', () => {
			this.sectionContainer[0].scrollIntoView({ behavior: 'smooth' });
		});
		this.divPageMove[0].addEventListener('click', () => {
			this.sectionContainer[0].scrollIntoView({ behavior: 'smooth' });
		});
	}

	aboutMePageMove() {
		this.buttonAboutMeButton.addEventListener('click', () => {
			this.sectionContainer[1].scrollIntoView({ behavior: 'smooth' });
		});
		this.divPageMove[1].addEventListener('click', () => {
			this.sectionContainer[1].scrollIntoView({ behavior: 'smooth' });
		});
	}

	skillsPageMove() {
		this.divPageMove[2].addEventListener('click', () => {
			this.sectionContainer[2].scrollIntoView({ behavior: 'smooth' });
		});
	}
	portfolioPageMove() {
		this.divPageMove[3].addEventListener('click', () => {
			this.sectionContainer[3].scrollIntoView({ behavior: 'smooth' });
		});
	}
	contactMePageMove() {
		this.divPageMove[4].addEventListener('click', () => {
			this.footerContactMeContainer.scrollIntoView({ behavior: 'smooth' });
		});
	}

	main() {
		this.homePageMove();
		this.aboutMePageMove();
		this.skillsPageMove();
		this.portfolioPageMove();
		this.contactMePageMove();
	}
}

class Skills {
	constructor(skillsContainer, divSkillDescription) {
		this.skillsContainer = skillsContainer;
		this.divSkillDescription = divSkillDescription;
	}
	createSkillsText() {
		this.skillsContainer.forEach((value, index) => {
			value.addEventListener('click', () => {
				switch (index) {
					case 0:
						this.divSkillDescription.textContent = '레이아웃의 구조를 이해하고 있으며 더욱 더 발전하기 위해 공부하고 있습니다.';
						break;
					case 1:
						this.divSkillDescription.textContent = '구조를 배치하고 효과를 줄 수 있으며 더욱 많은 효과를 위한 선택자 공부하고 있습니다.';
						break;
					case 2:
						this.divSkillDescription.textContent = 'ES6와 Class객체에 대한 이해가 부족하여 예제와 책을 보면서 공부하고 있습니다.';
						break;
					case 3:
						this.divSkillDescription.textContent = '기본적인 사용법을 익히며 사용하고 있으며 코드를 간략화 할 수 있도록 연습하고 있습니다.';
						break;
					case 4:
						this.divSkillDescription.textContent = 'CSS를 더욱 간략화 하여 적용 할 수 있으며 함수 사용법을 공부하고 있습니다.';
						break;
					case 5:
						this.divSkillDescription.textContent = '동적프로그램을 사용할 수 있으며 선택자 사용 등 공부하고 있습니다.';
						break;
					case 6:
						this.divSkillDescription.textContent = 'props와 state를 사용하여 값 전달을 어느 정도 이해 하고 있으며 객체형에서 함수형으로 공부하고 있습니다.';
						break;
					case 7:
						this.divSkillDescription.textContent = 'DB와 비동기 등을 접목 시킬 수 있으며 DB연결과 다양한 변수 및 명령어를 php net을 통해 공부하고 있습니다.';
						break;
					case 8:
						this.divSkillDescription.textContent = '테이블의 구성과 명령어를 이해하며 사용 할 수 있으며 다양한 명령어를 공부하고 있습니다.';
						break;
					default:
						'';
						break;
				}
			});
		});
	}
	main() {
		this.createSkillsText();
	}
}

class PortfolioMove {
	constructor(
		arrImgThumbnail,
		arrDivPortfolioTitle,
		arrDivPersonNumber,
		arrDivDescription,
		arrPortfolioGithubURL,
		portfolioURL,
		iLeftIcon,
		iRightIcon,
		imgThumbnail,
		divPortfolioTitle,
		divPersonNumber,
		divDescription,
		aGithub,
		aUrl
	) {
		this.arrImgThumbnail = arrImgThumbnail;
		this.arrDivPortfolioTitle = arrDivPortfolioTitle;
		this.arrDivPersonNumber = arrDivPersonNumber;
		this.arrDivDescription = arrDivDescription;
		this.arrPortfolioGithubURL = arrPortfolioGithubURL;
		this.portfolioURL = portfolioURL;
		this.iLeftIcon = iLeftIcon;
		this.iRightIcon = iRightIcon;
		this.imgThumbnail = imgThumbnail;
		this.divPortfolioTitle = divPortfolioTitle;
		this.divPersonNumber = divPersonNumber;
		this.divDescription = divDescription;
		this.aGithub = aGithub;
		this.aUrl = aUrl;
	}
	rightSlider() {
		this.iRightIcon.addEventListener('click', () => {
			this.arrImgThumbnail.push(this.arrImgThumbnail.shift());
			this.arrDivPortfolioTitle.push(this.arrDivPortfolioTitle.shift());
			this.arrDivPersonNumber.push(this.arrDivPersonNumber.shift());
			this.arrDivDescription.push(this.arrDivDescription.shift());
			this.arrPortfolioGithubURL.push(this.arrPortfolioGithubURL.shift());
			this.portfolioURL.push(this.portfolioURL.shift());
			this.imgThumbnail.setAttribute('src', this.arrImgThumbnail[0]);
			this.divPortfolioTitle.innerHTML = this.arrDivPortfolioTitle[0];
			this.divPersonNumber.innerHTML = this.arrDivPersonNumber[0];
			this.divDescription.innerHTML = this.arrDivDescription[0];
			this.aGithub.setAttribute('href', this.arrPortfolioGithubURL[0]);
			this.aUrl.setAttribute('href', this.portfolioURL[0]);
		});
	}

	leftSlider() {
		this.iLeftIcon.addEventListener('click', () => {
			this.arrImgThumbnail.unshift(this.arrImgThumbnail.pop());
			this.arrDivPortfolioTitle.unshift(this.arrDivPortfolioTitle.pop());
			this.arrDivPersonNumber.unshift(this.arrDivPersonNumber.pop());
			this.arrDivDescription.unshift(this.arrDivDescription.pop());
			this.arrPortfolioGithubURL.unshift(this.arrPortfolioGithubURL.pop());
			this.portfolioURL.unshift(this.portfolioURL.pop());
			this.imgThumbnail.setAttribute('src', this.arrImgThumbnail[0]);
			this.divPortfolioTitle.innerHTML = this.arrDivPortfolioTitle[0];
			this.divPersonNumber.innerHTML = this.arrDivPersonNumber[0];
			this.divDescription.innerHTML = this.arrDivDescription[0];
			this.aGithub.setAttribute('href', this.arrPortfolioGithubURL[0]);
			this.aUrl.setAttribute('href', this.portfolioURL[0]);
		});
	}
	main() {
		this.rightSlider();
		this.leftSlider();
	}
}

// funcNavMove
const funcNavMove = (headerNavBarContainer, sectionContainer) => {
	window.addEventListener('scroll', () => {
		const sectionContainerHeight = sectionContainer[0].scrollHeight;
		let position = document.documentElement.scrollTop;
		return position > sectionContainerHeight - 1
			? (headerNavBarContainer.style.visibility = 'visible') && (headerNavBarContainer.style.opacity = 1)
			: (headerNavBarContainer.style.visibility = 'hidden') && (headerNavBarContainer.style.opacity = 0);
	});
};

// HamburgerMenu
const funcHamburger = (iHamburgerIcon, headerNavBarContainer, navContainer, divLogoContainer, ulContainerLi) => {
	iHamburgerIcon.addEventListener('click', () => {
		headerNavBarContainer.classList.toggle('active');
		navContainer.classList.toggle('active');
		divLogoContainer.classList.toggle('active');
		ulContainerLi.forEach((value) => {
			value.addEventListener('click', () => {
				headerNavBarContainer.classList.remove('active');
				navContainer.classList.remove('active');
				divLogoContainer.classList.remove('active');
			});
		});
	});
};

const main = (() => {
	// pageMove
	const buttonAboutMeButton = document.querySelector('.buttonAboutMeButton');
	const divLogo = document.querySelector('.divLogo');
	const sectionContainer = document.querySelectorAll('main section');
	const footerContactMeContainer = document.querySelector('.footerContactMeContainer');
	const divPageMove = document.querySelectorAll('.divPageMove');
	const pageMove = new PageMove(divLogo, buttonAboutMeButton, [...sectionContainer], footerContactMeContainer, ...divPageMove);
	pageMove.main();

	// skills
	const skillsContainer = document.querySelectorAll('.ulSkillsContainer li');
	const divSkillDescription = document.querySelector('.divSkillDescription');
	const skills = new Skills([...skillsContainer], divSkillDescription);
	skills.main();

	// portfolio
	const iLeftIcon = document.querySelector('.iLeftIcon');
	const iRightIcon = document.querySelector('.iRightIcon');
	const arrImgThumbnail = [
		'./images/login.png',
		'./images/cashRegister.png',
		'./images/youtube.png',
		'./images/habitTracker.png',
		'./images/timer.png',
		'./images/toDoList.png',
		'./images/decimalConverter.png',
		'./images/pallBassetKiosk.png',
		'./images/matrixCalculator.png',
		'./images/eventHomePage.png',
	];
	const arrDivPortfolioTitle = [
		'<div class="divPortfolioTitle">Simple Application</div>',
		'<div class="divPortfolioTitle">CashRegister</div>',
		'<div class="divPortfolioTitle">Youtube</div>',
		'<div class="divPortfolioTitle">HabitTracker</div>',
		'<div class="divPortfolioTitle">Timer</div>',
		'<div class="divPortfolioTitle">ToDoList</div>',
		'<div class="divPortfolioTitle">DecimalConverter</div>',
		'<div class="divPortfolioTitle">PaulBassetKiosk</div>',
		'<div class="divPortfolioTitle">MatrixCalculator</div>',
		'<div class="divPortfolioTitle">EventHomePage</div>',
	];
	const arrDivPersonNumber = [
		'<div class="divPersonNumber">1인 프로젝트</div>',
		'<div class="divPersonNumber">2인 프로젝트</div>',
		'<div class="divPersonNumber">1인 프로젝트</div>',
		'<div class="divPersonNumber">1인 프로젝트</div>',
		'<div class="divPersonNumber">2인 프로젝트</div>',
		'<div class="divPersonNumber">1인 프로젝트</div>',
		'<div class="divPersonNumber">2인 프로젝트</div>',
		'<div class="divPersonNumber">5인 프로젝트</div>',
		'<div class="divPersonNumber">1인 프로젝트</div>',
		'<div class="divPersonNumber">1인 프로젝트</div>',
	];
	const arrDivDescription = [
		'<div class="divDescription">php와 mysql을 이용하여 간단한 회원가입을 통해 세션을 받은 아이디만 로그인하여 메모장을 사용하며 삭제, 수정 가능한 페이지를 만들었습니다.</div>',
		'<div class="divDescription">거스름돈 계산기를 반응형으로  html, pug, sass, css, javascript, php, mysql을 사용하여 물건을 샀을경우 거스름돈을 계산하는 프로그램을 만들었습니다.</div>',
		'<div class="divDescription">react 유튜브 api 프로젝트. 리액트를 공부를 위해 강의 보면서 클론 코딩하였습니다.</div>',
		'<div class="divDescription">react객체형으로 자신의 습관들을 등록하여 추적할수 있는 habit tracker를 만들었습니다.</div>',
		'<div class="divDescription">html, pug, css, sass, javascript를 이용하여 현재 시간을 나타내고 스톱워치를 이용하여 구간시간을 기록하는 타이머를 만들었습니다.</div>',
		'<div class="divDescription">html, pug, css, sass, javascript를 이용하여 to do list를 만들었습니다.</div>',
		'<div class="divDescription">html, pug, css, sass, javascript를 사용하여 각 진수들을 변환하는 진수변환기를 만들었습니다.</div>',
		'<div class="divDescription">팀(5명) 프로젝트로 카페 주문 키오스크를 만들었습니다.</div>',
		'<div class="divDescription">행렬의 덧셈,뺄셈,곱셈이 가능한 행렬계산기를 만들었습니다.</div>',
		'<div class="divDescription">첫 포트폴리오용으로 끌레도르 이벤트 홈페이지를 만들었습니다.</div>',
	];
	const arrPortfolioGithubURL = [
		'https://github.com/tldnjs2213/Tenth-Portfolio',
		'https://github.com/tldnjs2213/Sixth-Portfolio',
		'https://github.com/tldnjs2213/Ninth-Portfolio',
		'https://github.com/tldnjs2213/Eighth-Portfolio',
		'https://github.com/tldnjs2213/Seventh-Portfolio',
		'https://github.com/tldnjs2213/Fifth-Portfolio',
		'https://github.com/tldnjs2213/Fourth-Portfolio',
		'https://github.com/tldnjs2213/Third-Portfolio',
		'https://github.com/tldnjs2213/Second-Portfolio',
		'https://github.com/tldnjs2213/First-Portfolio',
	];
	const arrPortfolioURL = [
		'http://pager.kr/~c15st06/portfolio/app(php-mysql)/',
		'http://pager.kr/~c15st06/portfolio/CashRegister/',
		'https://tldnjs2213.github.io/Ninth-Portfolio/',
		'https://tldnjs2213.github.io/Eighth-Portfolio/',
		'https://tldnjs2213.github.io/Seventh-Portfolio/',
		'https://tldnjs2213.github.io/Fifth-Portfolio/',
		'https://tldnjs2213.github.io/Fourth-Portfolio/',
		'http://pager.kr:3000/',
		'https://tldnjs2213.github.io/Second-Portfolio/',
		'https://tldnjs2213.github.io/First-Portfolio/',
	];
	const imgThumbnail = document.querySelector('.imgThumbnail');
	const divPortfolioTitle = document.querySelector('.divPortfolioTitle');
	const divPersonNumber = document.querySelector('.divPersonNumber');
	const divDescription = document.querySelector('.divDescription');
	const aGithub = document.querySelector('.divButtonContainer > .aGithub');
	const aUrl = document.querySelector('.divButtonContainer > .aUrl');
	const portfolioMove = new PortfolioMove(
		arrImgThumbnail,
		arrDivPortfolioTitle,
		arrDivPersonNumber,
		arrDivDescription,
		arrPortfolioGithubURL,
		arrPortfolioURL,
		iLeftIcon,
		iRightIcon,
		imgThumbnail,
		divPortfolioTitle,
		divPersonNumber,
		divDescription,
		aGithub,
		aUrl
	);
	portfolioMove.main();

	// funcNavMove
	const headerNavBarContainer = document.querySelector('.headerNavBarContainer');
	funcNavMove(headerNavBarContainer, [...sectionContainer]);

	// HamburgerMenu
	const iHamburgerIcon = document.querySelector('.iHamburgerIcon');
	const navContainer = document.querySelector('.navContainer');
	const divLogoContainer = document.querySelector('.divLogoContainer');
	const ulContainerLi = document.querySelectorAll('.ulContainer li');
	funcHamburger(iHamburgerIcon, headerNavBarContainer, navContainer, divLogoContainer, [...ulContainerLi]);
})();
