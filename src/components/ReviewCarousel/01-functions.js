export const nextSlide = ( slider, transition ) => {

    const transitionTime = transition;

    if ( slider.current.children.length > 0 ) {

        const fistSlide = slider.current.children[0];

        slider.current.style.transition = `${transitionTime}ms ease-out all`;

        const slideSize = slider.current.children[0].offsetWidth;

        slider.current.style.transform = `translateX( -${slideSize}px )`;

        const transition = () => {
            slider.current.style.transition = 'none';
            slider.current.style.transform = `translateX( 0 )`;

            slider.current.appendChild( fistSlide );

            slider.current.removeEventListener( 'transitionend', transition );
        }

        slider.current.addEventListener( 'transitionend', transition );
    }
}

export const prevSlide = ( slider, transition ) => {

    const transitionTime = transition;

    if ( slider.current.children.length > 0 ) {

        const sliderLen = slider.current.children.length - 1;
        const lastSlide = slider.current.children[ sliderLen ];
        slider.current.insertBefore( lastSlide, slider.current.firstChild );

        const slideSize = slider.current.children[0].offsetWidth;

        slider.current.style.transition = 'none';
        slider.current.style.transform = `translateX( -${slideSize}px )`;

        setTimeout(() => {
            slider.current.style.transition = `${transitionTime}ms ease-out all`;
            slider.current.style.transform = `translateX( 0 )`;
        }, 30);
    }
}