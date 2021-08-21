const id = document.querySelector('#id').value;
const editForm = async function(event) {
  event.preventDefault();

const name = document.querySelector('#name').value;
  const category = document.querySelector('#category').value;
  const description = document.querySelector('#description').value;
  const event_date = document.querySelector('#event_date').value;
  const event_time = document.querySelector('#event_time').value;
  const covid_items = document.querySelector('#covid_items').value;

  await fetch(`/api/events/${id}`, {
    method: 'PUT',
body: JSON.stringify({
      name, category, description, event_date, event_time, covid_items,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};
const deleteHandler = async function() {
  await fetch(`/api/events/${id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-event-form')
  .addEventListener('submit', editForm);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteHandler);
