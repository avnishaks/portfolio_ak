// lib/utils.js
export const extractThumbnail = (description) => {
  const match = description.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : 'https://via.placeholder.com/150';
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const ordinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // Covers 11th to 19th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
};
