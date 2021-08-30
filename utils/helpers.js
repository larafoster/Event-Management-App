var format = require('date-fns/format');

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY

  date = format(new Date(date), "MMMM-do");
    return date;
  }

};
