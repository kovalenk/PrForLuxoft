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
        setTimeout(()=>{
            const totalItems = items.length
            items[totalItems - 1].classList.add("quotes--prev2");
            items[0].classList.add("quotes--active2");
            items[1].classList.add("quotes--next2");
            pagination[totalItems - 1]
            pagination[0].classList.add("quotes--active2");
            pagination[1].classList.add("quotes--next2");
        },200)
        // Targets the previous, current, and next items
        // This assumes there are at least three items.
      }
      // Set event listeners
      function setEventListeners() {
        setTimeout(()=>{
            var next = d.getElementsByClassName('carousel__button--next--v2')[0],
            prev = d.getElementsByClassName('carousel__button--prev--v2')[0],
            firstBlock = d.getElementsByClassName('quotes__line quotes__line--v2')[0],
            secondBlock = d.getElementsByClassName('quotes__line quotes__line--v2')[1],
            thirdBlock = d.getElementsByClassName('quotes__line quotes__line--v2')[2];
            next.addEventListener('click', moveNext);
            prev.addEventListener('click', movePrev);
            firstBlock.addEventListener('click', moveToFirst);
            secondBlock.addEventListener('click', moveToSecond);
            thirdBlock.addEventListener('click', moveToThird);
        },100)
      }
      function disableInteraction() {
        // Set 'moving' to true for the same duration as our transition.
        // (0.5s = 500ms)
        moving = true;
        // setTimeout runs its function once after the given time
        setTimeout(function(){
          moving = false
        }, 500);
      }
      function moveCarouselTo(slide) {

        // Check if carousel is moving, if not, allow interaction
        if(!moving) {
          // temporarily disable interactivity
          disableInteraction();
          // Update the "old" adjacent slide2s with "new" ones
          let newPrevious = slide - 1,
              newNext = slide + 1,
              oldPrevious = slide - 2,
              oldNext = slide + 2;
          // Test if carousel has more than three items
          const totalItems = items.length

          if ((totalItems - 1) < 3) {
            // Checks and updates if the new slide2s are out of bounds
            if (newPrevious <= 0) {
              oldPrevious = (totalItems - 1);
            } else if (newNext >= (totalItems - 1)){
              oldNext = 0;
            }
            // Checks and updates if slide2 is at the beginning/end
            if (slide === 0) {
              newPrevious = (totalItems - 1);
              oldPrevious = (totalItems - 2);
              oldNext = (slide + 1);
            } else if (slide === (totalItems -1)) {
              newPrevious = (slide - 1);
              newNext = 0;
              oldNext = 1;
            }
            // Now we've worked out where we are and where we're going,
            // by adding/removing classes we'll trigger the transitions.
            // Reset old next/prev elements to default classes
            items[oldPrevious].className = itemClassName;
            pagination[oldPrevious].className = paginationClassName;

            // Add new classes
            items[newPrevious].className = itemClassName + " quotes--prev2";
            items[slide].className = itemClassName + " quotes--active2";
            items[newNext].className = itemClassName + " quotes--next2";

            pagination[newPrevious].className = paginationClassName + " quotes--prev2";
            pagination[slide].className = paginationClassName + " quotes--active2";
            pagination[newNext].className = paginationClassName + " quotes--next2";
          }
        }
      }
      function moveNext() {
        // Check if moving
        if (!moving) {
          // If it's the last slide2, reset to 0, else +1
          const totalItems = items.length
          if (slide === (totalItems - 1)) {
            slide = 0;
          } else {
            slide++;
          }
          // Move carousel to updated slide2
          moveCarouselTo(slide);
        }
      }
      function moveToFirst() {
        // Check if moving
        if (!moving) {
          // If it's the last slide2, reset to 0, else +1
          // Move carousel to updated slide2
          moveCarouselTo(0);
        }
      }
      function moveToSecond() {
        // Check if moving
        if (!moving) {
          // If it's the last slide2, reset to 0, else +1
          // Move carousel to updated slide2
          moveCarouselTo(1);
        }
      }
      function moveToThird() {
        // Check if moving
        if (!moving) {
          // If it's the last slide2, reset to 0, else +1
          // Move carousel to updated slide2
          moveCarouselTo(2);
        }
      }
      // Previous navigation handler
      function movePrev() {
        // Check if moving
        const totalItems = items.length

        if (!moving) {
          // If it's the first slide2, set as the last slide2, else -1
          if (slide === 0) {
            slide = (totalItems - 1);
          } else {
            slide--;
          }

          // Move carousel to updated slide2
          moveCarouselTo(slide);
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
