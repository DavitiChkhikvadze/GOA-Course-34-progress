document.addEventListener('DOMContentLoaded', () => {
    const cube = document.getElementById('rubik-cube');
    let isDragging = false;
    let startX, startY;
    let initialRotateX = -20;
    let initialRotateY = 45;
    let sensitivity = 0.5;

    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        cube.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        let newRotateY = initialRotateY + (dx * sensitivity);
        let newRotateX = initialRotateX - (dy * sensitivity);

        cube.style.transform = `rotateX(${newRotateX}deg) rotateY(${newRotateY}deg)`;
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;

        const style = window.getComputedStyle(cube);
        const transformMatrix = new DOMMatrixReadOnly(style.transform);
        let currentTransform = cube.style.transform;

        initialRotateX = initialRotateX - ( (e.clientY - startY) * sensitivity);
        initialRotateY = initialRotateY + ( (e.clientX - startX) * sensitivity);

        cube.style.transition = 'transform 0.1s linear';
    });
});