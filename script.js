document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('picture-form');
    const gallery = document.getElementById('picture-gallery');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const imageFile = document.getElementById('image').files[0];

        // In a real app, you would upload the image to a server here
        // For now, we'll just create a local URL for the image
        const imageUrl = URL.createObjectURL(imageFile);

        addPictureToGallery(title, description, imageUrl);

        form.reset();
    });

    function addPictureToGallery(title, description, imageUrl) {
        const pictureElement = document.createElement('div');
        pictureElement.className = 'picture-item';
        pictureElement.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <h3>${title}</h3>
            <p>${description}</p>
        `;
        gallery.prepend(pictureElement);
    }
});