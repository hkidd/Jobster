module.exports = {
    // format_time: (date) => {
    //   return date.toLocaleDateString();
    // },

    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate() + 1}/${
        new Date(date).getFullYear()}`;
    }
  };