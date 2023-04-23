'use strict';

// Custom THC Methods
const thc = {
    greetings: 'Hello there! Hope you will enjoy reading the code :P',
    version: '0.0.1',
    verbose: Boolean(new URLSearchParams(document.location.search).get('d')) || false,

    // Custom method to show tooltip next to copy/paste buttons
    showTooltip: (element, text, direction) => {
        // Target element
        const el = element.children[0];

        // Tooltip code
        const tooltipHTML = `<div class="tooltip"><span class="tooltiptext ${direction}">${text}</span></div>`;

        // Debug
        if (thc.verbose === true) {
            console.log('Called from element:', element);
            console.log('Element children:', element.children);
            console.log('Target element:', el);
        }

        // Add tooltip element
        el.insertAdjacentHTML('afterend', tooltipHTML);

        // Lookup created tooltip element
        const tooltipContainer = document.querySelector('.tooltip');
        const tooltipContent = tooltipContainer.children[0];

        // Debug
        if (thc.verbose === true) {
            console.log('Related tooltip:', tooltipContainer);
            console.log('Tooltip content:', tooltipContainer.children[0]);
        }

        // Reveal tooltip
        tooltipContent.style.opacity = 1;

        // Attach mouse event just once
        el.addEventListener('mouseleave', (event) => {
            // Target element
            const el = event.target;

            // Debug
            if (thc.verbose === true) {
                console.log('Mouse [mouseleave] event received:', event);
                console.log('Target element:', el);
            }

            // Lookup created tooltip element
            const tooltipContainer = document.querySelector('.tooltip');
            const tooltipContent = tooltipContainer.children[0];

            // Debug
            if (thc.verbose === true) {
                console.log('Related tooltip:', tooltipContainer);
                console.log('Tooltip content:', tooltipContainer.children[0]);
            }

            // Hide tooltip
            tooltipContent.style.opacity = 0;

            // Remove tooltip with a delay
            const delayedRemoval = setTimeout(() => {
                document.querySelectorAll('.tooltip').forEach((el) => {
                    // Debug
                    if (thc.verbose === true) {
                        console.log('Removing tooltip.', el);
                    }

                    // Remove detected tooltip
                    el.remove();

                    // Remove timeout
                    clearTimeout(delayedRemoval);
                });
            }, 1000);
        }, { once: true });
    },

    // Adding some 'magic' on tabs ;)
    initTabs: () => {
        const tabsDebug = thc.verbose;
        const tabsSelector = 'input.tab-switch';
        document.querySelectorAll(tabsSelector).forEach((el) => {
            const id = el.id;
            const type = id.split('-')[0];
            if (tabsDebug === true) {
                console.log('[change] event listener attached on', id, '- type:', type);
            }
            el.addEventListener('change', (event) => {
                if (tabsDebug === true) {
                    console.log('Change event triggered.', event);
                }
                let targetTabs = String(event.target.id).includes(type) ? type : 'undefined';
                if (tabsDebug === true) {
                    console.log(`Should select other [${targetTabs}] tabs.`);
                }
                document.querySelectorAll(tabsSelector).forEach((target) => {
                    if (String(target.id).includes(targetTabs) && !target.checked) {
                        target.checked = true;
                    }
                });
            });
        });
    },

    // Adding some other 'magic' on code snippets :P
    /*
    Done: Add CSS tooltips
    From: https://www.w3schools.com/css/css_tooltip.asp
    Comment: Yes, I'm lazy and don't remind everything. Don't blame me.
    Goal: Keep things as light as possible.
    Reached: Replaced 'showTooltip()' method from GitHub Primer by custom one.
    Author: Doctor Who (Jiab77)
    */
    initCopyPaste: () => {
        // Copy icon from GitHub Primer
        // https://primer.style/design/foundations/icons

        const clipDebug = thc.verbose;
        const snippets = document.querySelectorAll('figure.highlight pre');
        snippets.forEach((snippet) => {
            if (clipDebug === true) {
                console.log('Connected on element:', snippet);
            }
            snippet.firstChild.insertAdjacentHTML(
                'beforebegin',
                '<button class="copy-button" data-clipboard-snippet><img width="16" src="/assets/icons/copy_16.svg" alt="Copy to clipboard" title="Copy to clipboard"></button>'
            );
        });

        const clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
            target: (trigger) => {
                return trigger.nextElementSibling; // 'nextElementSibling' is used because the button is placed before the other elements
            }
        });

        clipboardSnippets.on('success', function (e) {
            e.clearSelection();
            if (clipDebug === true) {
                console.log('Received [success] event.', e);
                console.log('Action:', e.action);
                console.log('Text:', e.text);
                console.log('Trigger:', e.trigger);
            }
            thc.showTooltip(e.trigger, 'Copied!', 'right');
        });

        clipboardSnippets.on('error', function (e) {
            console.log('Received [error] event.', e);
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
            thc.showTooltip(e.trigger, fallbackMessage(e.action), 'right');
        });
    },
    initAll: () => {
        console.log('Initializing custom THC code...');
        console.log('Version:', thc.version);
        thc.initTabs();
        thc.initCopyPaste();
    }
}
thc.initAll();