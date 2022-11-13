!(function(d){
  const quotesSectionsV1 = document.getElementsByClassName('quotes-section--v1');
  for (let i = 0; i < quotesSectionsV1.length; i++) {
    let itemClassNameV1 = "quotes__block quotes__block--v1";
    let paginationClassNameV1 = "quotes__line quotes__line--v1";
    itemsV1 = d.getElementsByClassName(itemClassNameV1),
    paginationV1 = d.getElementsByClassName(paginationClassNameV1)
    slideV1 = 0,
    moving = true;

    function setInitialClassesV1() {
      setTimeout(() => {
        addNextClassesV1();
        addPrevClassesV1();
        addActiveClassesV1(0);
      }, 200)
    }

    function removeClassesV1() {
      for (let ql = 0; ql < itemsV1.length; ql++) {
        itemsV1[ql].classList.remove("quotes--prev");
        itemsV1[ql].classList.remove("quotes--active");
        itemsV1[ql].classList.remove("quotes--next");
      }
      for (let ql = 0; ql < paginationV1.length; ql++) {
        paginationV1[ql].classList.remove("quotes--prev");
        paginationV1[ql].classList.remove("quotes--active");
        paginationV1[ql].classList.remove("quotes--next");
      }
    }

    function addNextClassesV1() {
      for (let ql = 0; ql < itemsV1.length; ql++) {
        itemsV1[ql].classList.add("quotes--next");
        paginationV1[ql].classList.add("quotes--next");
      }
    }

    function addPrevClassesV1() {
      for (let ql = 0; ql < itemsV1.length; ql++) {
        if(slideV1) {
          if (ql === (slideV1 - 1)) {
            itemsV1[ql].classList.remove("quotes--next");
            paginationV1[ql].classList.remove("quotes--next");
            itemsV1[ql].classList.add("quotes--prev");
            paginationV1[ql].classList.add("quotes--prev");
          }
        } else {
          itemsV1[itemsV1.length - 1].classList.remove("quotes--next");
          paginationV1[itemsV1.length - 1].classList.remove("quotes--next");
          itemsV1[itemsV1.length - 1].classList.add("quotes--prev");
          paginationV1[itemsV1.length - 1].classList.add("quotes--prev");
        }
      }
    }

    function addActiveClassesV1(index) {
      itemsV1[index].classList.remove("quotes--prev");
      itemsV1[index].classList.remove("quotes--next");
      itemsV1[index].classList.add("quotes--active");
      paginationV1[index].classList.remove("quotes--prev");
      paginationV1[index].classList.remove("quotes--next");
      paginationV1[index].classList.add("quotes--active");
    }
    // Set event listeners
    function setEventListenersV1() {
      setTimeout(() => {
        var next = d.getElementsByClassName('carousel__button--next--v1')[0],
          prev = d.getElementsByClassName('carousel__button--prev--v1')[0];
        const quotesLines = d.getElementsByClassName('quotes__line quotes__line--v1');
        for (let ql = 0; ql < quotesLines.length; ql++) {
          quotesLines[ql].addEventListener('click', () => {
            if (!moving) {
              moveCarouselToV1(ql);
            }
          });
        }
        next.addEventListener('click', () => {
          if (!moving) {
            const totalItems = itemsV1.length
            if (slideV1 === (totalItems - 1)) {
              slideV1 = 0;
            } else {
              slideV1++;
            }
            moveCarouselToV1(slideV1);
          }
        });
        prev.addEventListener('click', () => {
          const totalItems = itemsV1.length

          if (!moving) {
            if (slideV1 === 0) {
              slideV1 = (totalItems - 1);
            } else {
              slideV1--;
            }
            moveCarouselToV1(slideV1);
          }
        });
      }, 100)
    }

    function moveCarouselToV1(slide_to) {
      if (!moving) {
        slideV1 = slide_to
        removeClassesV1();
        addNextClassesV1();
        addPrevClassesV1();
        addActiveClassesV1(slideV1);
      }
    }

    function initCarouselV1() {
      setInitialClassesV1();
      setEventListenersV1();
      // Set moving to false so that the carousel becomes interactive
      moving = false;
    }

    initCarouselV1();
  }
}(document));
