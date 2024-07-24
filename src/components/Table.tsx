import { TableHTMLAttributes } from 'react';
import { Batch } from '../types/Batch';
import classNames from 'classnames';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}

function formatPrice(price: number) {
  const [integerPart, _] = price.toFixed(2).split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `₹ ${formattedInteger}`;
}

interface TableProps extends TableHTMLAttributes<TableProps> {
  data: Batch[];
}

const labels = [
  'Title',
  'Start Date',
  'End Date',
  'Price',
  'Validity/Expiry',
  'Status',
];

const Table = ({ data }: TableProps) => {
  const borderClasses = (index: number) => ({
    'border-r': index !== labels.length - 1,
    'rounded-tl-lg': index === 0,
    'rounded-tr-lg': index === labels.length - 1,
  });
  const renderedRows = data.map((batch) => (
    <tr className="text-xs" key={batch.id}>
      <td className={classNames('px-3 py-3 border-black', borderClasses(0))}>
        <div className="flex items-center gap-2">
          <img
            className="object-contain rounded-lg"
            width={100}
            height={90}
            src={batch.imgUrl}
          />
          <div className="text-sm font-medium text-gray-900">{batch.title}</div>
        </div>
      </td>
      <td
        className={classNames(
          'px-6 py-4 whitespace-nowrap border-black ',
          borderClasses(1),
        )}
      >
        {formatDate(batch.startDate)}
      </td>
      <td
        className={classNames(
          'px-6 py-4 whitespace-nowrap border-black ',
          borderClasses(2),
        )}
      >
        {formatDate(batch.endDate)}
      </td>
      <td
        className={classNames(
          'px-6 py-4 whitespace-nowrap border-black ',
          borderClasses(3),
        )}
      >
        {formatPrice(batch.price)}
      </td>
      <td
        className={classNames(
          'px-6 py-4 whitespace-nowrap border-black ',
          borderClasses(4),
        )}
      >
        {batch.validity} days
      </td>
      <td
        className={classNames(
          'px-6 py-4 whitespace-nowrap border-black',
          borderClasses(5),
        )}
      >
        <div
          className={classNames('p-1 inline-block border rounded-md', {
            'bg-pale-mint-green border-lime-300 ': batch.status === 'Published',
            'bg-gray-100 border-gray-300': batch.status !== 'Published',
          })}
        >
          {batch.status}
        </div>
      </td>
    </tr>
  ));

  return (
    <table
      border={10}
      className="min-w-full border border-separate border-black rounded-xl"
    >
      <thead className="">
        <tr className="bg-gray-100 border-b ">
          {labels.map((label, index) => (
            <th
              className={classNames(
                'px-3 py-3 text-xs  tracking-wider text-left text-title font-bold whitespace-nowrap border-black border-b ',
                borderClasses(index),
              )}
              key={label}
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
