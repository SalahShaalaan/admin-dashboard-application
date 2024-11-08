export default function OrderStatus({ status }) {

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-[#ccf0eb] dark:bg-[#00b69b] text-[#00b69b]';
      case 'Processing':
        return 'bg-[#e0d4fc] dark:bg-[#6226ef] text-[#6226ef]';
      case 'Rejected':
        return 'bg-[#fcd7d4] dark:bg-[#ef3826] text-[#ef3826]';
      case 'On Hold':
        return 'bg-[#ffeddd] dark:bg-[#ffa756] text-[#ffa756]';
      case 'In Transit':
        return 'bg-[#f1d4ff] dark:bg-[#ba29ff] text-[#ba29ff]';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <span className={`rounded-md text-sm px-2 py-1 font-bold ${getStatusColor(status)} dark:text-darkText`}>
      {status}
    </span>
  );
}