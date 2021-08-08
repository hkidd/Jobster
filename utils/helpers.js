module.exports = {
    format_time: (date) => {
      return date.toLocaleDateString('en-US', { timeZone: 'America/Chicago' });
    },

    format_date: (date) => {
      var d = date
      var year = d.getFullYear();
      var month = d.getMonth();
      var day = d.getDate() + 1;
  
      var c = new Date(year, month, day);
      console.log(c);
      return c.toLocaleDateString();
    }

  };