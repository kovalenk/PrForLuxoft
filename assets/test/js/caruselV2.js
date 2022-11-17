!(function(d){
  const quotesSections = document.getElementsByClassName('quotes-section--v2');
  for (let i = 0; i < quotesSections.length; i++) {
    let itemClassName = "quotes__block quotes__block--v2";
    let paginationClassName = "quotes__line quotes__line--v2";
    items = d.getElementsByClassName(itemClassName),
      pagination = d.getElementsByClassName(paginationClassName)
    slide = 0,
      moving = true;
    function setInitialClasses() {
      setTimeout(() => {
        addNextClasses();
        addPrevClasses();
        addActiveClasses(0);
      }, 200)
    }

    function removeClasses() {
      for (let ql = 0; ql < items.length; ql++) {
        items[ql].classList.remove("quotes--prev2");
        items[ql].classList.remove("quotes--active2");
        items[ql].classList.remove("quotes--next2");
      }
      for (let ql = 0; ql < pagination.length; ql++) {
        pagination[ql].classList.remove("quotes--prev2");
        pagination[ql].classList.remove("quotes--active2");
        pagination[ql].classList.remove("quotes--next2");
      }
    }

    function addNextClasses() {
      for (let ql = 0; ql < items.length; ql++) {
        items[ql].classList.add("quotes--next2");
        pagination[ql].classList.add("quotes--next2");
      }
    }

    function addPrevClasses() {
      for (let ql = 0; ql < items.length; ql++) {
        if(slide) {
          if (ql === (slide - 1)) {
            items[ql].classList.remove("quotes--next2");
            pagination[ql].classList.remove("quotes--next2");
            items[ql].classList.add("quotes--prev2");
            pagination[ql].classList.add("quotes--prev2");
          }
        } else {
          items[items.length - 1].classList.remove("quotes--next2");
          pagination[items.length - 1].classList.remove("quotes--next2");
          items[items.length - 1].classList.add("quotes--prev2");
          pagination[items.length - 1].classList.add("quotes--prev2");
        }
      }
    }

    function addActiveClasses(index) {
      items[index].classList.remove("quotes--prev2");
      items[index].classList.remove("quotes--next2");
      items[index].classList.add("quotes--active2");
      pagination[index].classList.remove("quotes--prev2");
      pagination[index].classList.remove("quotes--next2");
      pagination[index].classList.add("quotes--active2");
    }

    // Set event listeners
    function setEventListeners() {
      setTimeout(() => {
        var next = d.getElementsByClassName('carousel__button--next--v2')[0],
          prev = d.getElementsByClassName('carousel__button--prev--v2')[0];
        const quotesLines = d.getElementsByClassName('quotes__line quotes__line--v2');
        for (let ql = 0; ql < quotesLines.length; ql++) {
          quotesLines[ql].addEventListener('click', () => {
            if (!moving) {
              moveCarouselTo(ql);
            }
          });
        }
        next.addEventListener('click', () => {
          if (!moving) {
            const totalItems = items.length
            if (slide === (totalItems - 1)) {
              slide = 0;
            } else {
              slide++;
            }
            moveCarouselTo(slide);
          }
        });
        prev.addEventListener('click', () => {
          const totalItems = items.length

          if (!moving) {
            if (slide === 0) {
              slide = (totalItems - 1);
            } else {
              slide--;
            }
            moveCarouselTo(slide);
          }
        });
      }, 100)
    }
    function moveCarouselTo(slide_to) {
      if (!moving) {
        slide = slide_to
        removeClasses();
        addNextClasses();
        addPrevClasses();
        addActiveClasses(slide);
      }
    }

    function initCarousel() {
      setInitialClasses();
      setEventListeners();
      // Set moving to false so that the carousel becomes interactive
      moving = false;
    }
    initCarousel();
  }
}(document));
