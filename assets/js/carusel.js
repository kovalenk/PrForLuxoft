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
        setTimeout(()=>{
            const totalItems = itemsV1.length
            itemsV1[totalItems - 1].classList.add("quotes--prev");
            itemsV1[0].classList.add("quotes--active");
            itemsV1[1].classList.add("quotes--next");
            paginationV1[totalItems - 1]
            paginationV1[0].classList.add("quotes--active");
            paginationV1[1].classList.add("quotes--next");
        },200)
        // Targets the previous, current, and next items
        // This assumes there are at least three items.
      }
      // Set event listeners
      function setEventListenersV1() {
        setTimeout(()=>{
            var next = d.getElementsByClassName('carousel__button--next--v1')[0],
            prev = d.getElementsByClassName('carousel__button--prev--v1')[0],
            firstBlock = d.getElementsByClassName('quotes__line quotes__line--v1')[0],
            secondBlock = d.getElementsByClassName('quotes__line quotes__line--v1')[1],
            thirdBlock = d.getElementsByClassName('quotes__line quotes__line--v1')[2];
            next.addEventListener('click', moveNextV1);
            prev.addEventListener('click', movePrevV1);
            firstBlock.addEventListener('click', moveToFirstV1);
            secondBlock.addEventListener('click', moveToSecondV1);
            thirdBlock.addEventListener('click', moveToThirdV1);
        },100)
      }
      function disableInteractionV1() {
        // Set 'moving' to true for the same duration as our transition.
        // (0.5s = 500ms)
        moving = true;
        // setTimeout runs its function once after the given time
        setTimeout(function(){
          moving = false
        }, 500);
      }
      function moveCarouselToV1(slideV1) {

        // Check if carousel is moving, if not, allow interaction
        if(!moving) {
          // temporarily disable interactivity
          disableInteractionV1();
          // Update the "old" adjacent slideV1s with "new" ones
          let newPrevious = slideV1 - 1,
              newNext = slideV1 + 1,
              oldPrevious = slideV1 - 2,
              oldNext = slideV1 + 2;
          // Test if carousel has more than three items
          const totalItems = itemsV1.length

          if ((totalItems - 1) < 3) {
            // Checks and updates if the new slideV1s are out of bounds
            if (newPrevious <= 0) {
              oldPrevious = (totalItems - 1);
            } else if (newNext >= (totalItems - 1)){
              oldNext = 0;
            }
            // Checks and updates if slideV1 is at the beginning/end
            if (slideV1 === 0) {
              newPrevious = (totalItems - 1);
              oldPrevious = (totalItems - 2);
              oldNext = (slideV1 + 1);
            } else if (slideV1 === (totalItems -1)) {
              newPrevious = (slideV1 - 1);
              newNext = 0;
              oldNext = 1;
            }
            // Now we've worked out where we are and where we're going,
            // by adding/removing classes we'll trigger the transitions.
            // Reset old next/prev elements to default classes
            itemsV1[oldPrevious].className = itemClassNameV1;
            paginationV1[oldPrevious].className = paginationClassNameV1;

            // Add new classes
            itemsV1[newPrevious].className = itemClassNameV1 + " quotes--prev";
            itemsV1[slideV1].className = itemClassNameV1 + " quotes--active";
            itemsV1[newNext].className = itemClassNameV1 + " quotes--next";

            paginationV1[newPrevious].className = paginationClassNameV1 + " quotes--prev";
            paginationV1[slideV1].className = paginationClassNameV1 + " quotes--active";
            paginationV1[newNext].className = paginationClassNameV1 + " quotes--next";
          }
        }
      }
      function moveNextV1() {
        // Check if moving
        if (!moving) {
          // If it's the last slideV1, reset to 0, else +1
          const totalItems = itemsV1.length
          if (slideV1 === (totalItems - 1)) {
            slideV1 = 0;
          } else {
            slideV1++;
          }
          // Move carousel to updated slideV1
          moveCarouselToV1(slideV1);
        }
      }
      function moveToFirstV1() {
        // Check if moving
        if (!moving) {
          // If it's the last slideV1, reset to 0, else +1
          // Move carousel to updated slideV1
          moveCarouselToV1(0);
        }
      }
      function moveToSecondV1() {
        // Check if moving
        if (!moving) {
          // If it's the last slideV1, reset to 0, else +1
          // Move carousel to updated slideV1
          moveCarouselToV1(1);
        }
      }
      function moveToThirdV1() {
        // Check if moving
        if (!moving) {
          // If it's the last slideV1, reset to 0, else +1
          // Move carousel to updated slideV1
          moveCarouselToV1(2);
        }
      }
      // Previous navigation handler
      function movePrevV1() {
        // Check if moving
        const totalItems = itemsV1.length

        if (!moving) {
          // If it's the first slideV1, set as the last slideV1, else -1
          if (slideV1 === 0) {
            slideV1 = (totalItems - 1);
          } else {
            slideV1--;
          }

          // Move carousel to updated slideV1
          moveCarouselToV1(slideV1);
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
