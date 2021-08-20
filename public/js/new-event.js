const newFormHandler = async function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const category = document.querySelector('#category').value.trim();
  const description = document.querySelector('#description').value.trim();
  const event_date = document.querySelector('#event_date').value.trim();
  const event_time = document.querySelector('#event_time').value.trim();
  const covid_items = document.querySelector('#covid_items').value.trim();

await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
      name, category, description, event_date, event_time, covid_items,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-event-form')
  .addEventListener('submit', newFormHandler);