const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const category = document.querySelector('#category').value.trim();
  const description = document.querySelector('#description').value.trim();
  const event_date = document.querySelector('#event_date').value.trim();
  const event_time = document.querySelector('#event_time').value.trim();
  const covid_items = document.querySelector('#covid_items').value.trim();

  if (name && category && description && event_date && event_time && covid_items) {
    const response = await fetch(`/events/`, {
      method: 'POST',
      body: JSON.stringify({ name, category, description, event_date, event_time, covid_items  }),
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

document
  .querySelector('#new-event-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('#event-list')
//   .addEventListener('click', delButtonHandler);
