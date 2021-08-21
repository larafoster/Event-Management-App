const id = document.querySelector('#id').value;
const editForm = async function(event) {
  event.preventDefault();

const name = document.querySelector('#name').value.trim();
  const category = document.querySelector('#category').value.trim();
  const description = document.querySelector('textarea[name="description"]').value;
  const event_date = document.querySelector('#event_date').value.trim();
  const event_time = document.querySelector('#event_time').value.trim();
  const covid_items = document.querySelector('#covid_items').value.trim();

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
