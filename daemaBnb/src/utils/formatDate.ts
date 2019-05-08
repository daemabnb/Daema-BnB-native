const formatDate = (startDate: Date, endDate: Date) => {
  return `${startDate.getMonth() +
    1}월 ${startDate.getDate()}일 ~ ${endDate.getMonth() +
    1}월 ${endDate.getDate()}일`;
};

export default formatDate;
