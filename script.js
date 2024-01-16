function setupSkipAdLogic() {
    // Function to click the skip button
    function clickSkipButton() {
        const button = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
        if (button) {
            button.click();
            console.log('Skip button clicked');
        } else {
            console.log('Skip button not found');
        }
    }

    // Function to set up the mutation observer
    function observeForSkipButton() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    const skipTextDiv = node.querySelector ? node.querySelector('.ytp-ad-text.ytp-ad-skip-button-text-centered.ytp-ad-skip-button-text') : null;
                    if (skipTextDiv && skipTextDiv.textContent === 'Skip') {
                        clickSkipButton();
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Check if the skip button is already available and clickable
    const existingSkipButton = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
    const existingSkipTextDiv = existingSkipButton ? existingSkipButton.querySelector('.ytp-ad-text.ytp-ad-skip-button-text-centered.ytp-ad-skip-button-text') : null;
    if (existingSkipTextDiv && existingSkipTextDiv.textContent === 'Skip') {
        clickSkipButton();
    } else {
        // Call the observer setup function if the skip button is not already available
        observeForSkipButton();
    }
}

// Call the function to set up the skip ad logic
setupSkipAdLogic();
