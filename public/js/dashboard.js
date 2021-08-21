/* const id = document.querySelector('#id').value;


const deleteHandler = async function() {
  await fetch('/api/events/${id}', {
=======
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (name && description) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/events');
    } else {
      alert('Failed to create event');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/events');
    } else {
      alert('Failed to delete event');
    }
  }
};
const deleteClickHandler = async function() {
  await fetch(`/api/event/${Id}`, {

    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteHandler);
 */