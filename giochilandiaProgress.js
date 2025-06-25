/**
 * GiochilandiaProgress - Simple Progress Bar Manager
 * Author: Giochilandia
 * License: Custom
 */

const GiochilandiaProgress = {
    /**
     * Creates a simple progress bar inside the given container.
     * @param {string} containerId - The ID of the container element.
     */
    create(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('[GiochilandiaProgress] Container not found.');
            return;
        }

        const progressBar = document.createElement('div');
        progressBar.style.width = '0%';
        progressBar.style.height = '25px';
        progressBar.style.backgroundColor = '#4caf50';
        progressBar.style.transition = 'width 0.3s';

        container.style.backgroundColor = '#ddd';
        container.style.borderRadius = '4px';
        container.style.overflow = 'hidden';
        container.appendChild(progressBar);

        container._progressBar = progressBar;
    },

    /**
     * Updates the progress bar to a given percentage.
     * @param {string} containerId - The ID of the container element.
     * @param {number} percentage - Progress percentage (0 to 100).
     */
    update(containerId, percentage) {
        const container = document.getElementById(containerId);
        if (!container || !container._progressBar) {
            console.error('[GiochilandiaProgress] Progress bar not initialized.');
            return;
        }
        const clamped = Math.min(Math.max(percentage, 0), 100);
        container._progressBar.style.width = `${clamped}%`;
    }
};

// Example usage:
// GiochilandiaProgress.create('progressContainer');
// GiochilandiaProgress.update('progressContainer', 50);

module.exports = GiochilandiaProgress;
