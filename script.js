document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const careerDetails = document.getElementById('career-details').value;
        const template = document.getElementById('template').value;

        if (careerDetails && template !== 'Select a template') {
            try {
                const response = await fetch('/functions/api/handler.ts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        careerDetails,
                        template,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                alert('Resume generated successfully!');
                // Here you can handle the generated resume (e.g., download it)
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                alert('Failed to generate resume. Please try again later.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
});