function skillSectionSwap(element) { 
    let skillButtonArray = document.querySelectorAll('.skill-button');

    skillButtonArray.forEach((x, i) => {
		if (x.classList.contains('skill-button-active')) {
			x.classList.remove('skill-button-active')
		}
	});

    let activeSkillButtonArray = document.querySelectorAll(`.skill-button-${element}`);

    activeSkillButtonArray.forEach((x, i) => {
		x.classList.add('skill-button-active');
	});

	let inactiveSkillSection = document.querySelector('.active-skill-section');

	inactiveSkillSection.classList.remove('active-skill-section');
	inactiveSkillSection.classList.add('inactive-skill-section');

	let activeSkillSection = document.querySelector(`#skill-section-${element}`);
	activeSkillSection.classList.remove('inactive-skill-section');
	activeSkillSection.classList.add('active-skill-section');

    let articleToScroll = document.querySelector('#skill-article');
    articleToScroll.scrollIntoView();
}

function horizontalNavigation(section, direction) {
	let sectionArray = document.querySelectorAll(`.${section}-section`);
	
	let activeSection = document.querySelector(`.active-${section}-section`);    
	let previousSection;
	let nextSection;

	let index = 0;
	
	sectionArray.forEach((x, i) => {
		if (x.classList.contains(`active-${section}-section`)) {
			index = i;
		}
	});

	console.log(index);

	if (index === 0) {
		previousSection = sectionArray[sectionArray.length - 1];
		nextSection = sectionArray[index + 1];
	}

	else if (index === sectionArray.length - 1) {
		previousSection = sectionArray[index - 1];
		nextSection = sectionArray[0];
	}

	else { 
		previousSection = sectionArray[index - 1];
		nextSection = sectionArray[index + 1];
	}

	activeSection.classList.remove(`active-${section}-section`);
	activeSection.classList.add(`inactive-${section}-section`);

	if (direction) { 
		nextSection.classList.add(`active-${section}-section`);
		nextSection.classList.remove(`inactive-${section}-section`);
	}

	else { 
		previousSection.classList.add(`active-${section}-section`);
		previousSection.classList.remove(`inactive-${section}-section`);
	}
}

window.addEventListener("scroll", revealInterludeArticle);

function revealInterludeArticle() { 
	let interludeArray = document.querySelectorAll('.interlude-articles');

    for (let i = 0; i < interludeArray.length; i++) {
        let windowHeight = window.innerHeight;
        let elementBottom = interludeArray[i].getBoundingClientRect().bottom;
        let elementVisible = 100;
        if (elementBottom < windowHeight - elementVisible) {
            interludeArray[i].classList.add('interlude-articles-active');
        }
    }
}

revealInterludeArticle();