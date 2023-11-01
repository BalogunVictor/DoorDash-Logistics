import { AiOutlineExport } from 'react-icons/ai';
import { BiCollection, BiMessageSquareDots } from 'react-icons/bi';
import { FaMoneyBill, FaUsers } from 'react-icons/fa';
import { RiEBike2Fill } from 'react-icons/ri';
import classNames from 'classnames';
import { useStateContext } from 'src/context/stateContext';
import { LinkProps } from 'src/models/link';

export const Links = [
  { icon: FaUsers, linkName: 'DashBoard' },
  { icon: FaUsers, linkName: 'Users' },
  { icon: BiCollection, linkName: 'Orders' },
  { icon: FaMoneyBill, linkName: 'Payment-Disbursement' },
  { icon: BiMessageSquareDots, linkName: 'Support' },
  { icon: AiOutlineExport, linkName: 'Log out' },
];

const Logo = ({ className = '' }) => {
  return (
    <div
      className={classNames(
        'flex h-10 items-center justify-center gap-4',
        className
      )}
    >
      <RiEBike2Fill className="text-xl" />
      <h3>DoorDash Logistics</h3>
    </div>
  );
};

const LinkItem = ({ Icon, linkName, onClick }: LinkProps) => {
  return (
    <div
      className="z-10 my-2 h-10 w-full rounded-md bg-white px-3 hover:bg-black "
      onClick={onClick}
    >
      <div className="flex h-full cursor-pointer items-center gap-3 hover:text-[#f0d952]">
        {<Icon />}
        <p>{linkName}</p>
      </div>
    </div>
  );
};

const SideBar = () => {
  const { setTable } = useStateContext();

  return (
    <div className="h-full w-full">
      <div className="mx-auto px-4 lg:px-8">
        <Logo className="my-4" />
        <p className="py-4 font-semibold">Menu</p>
        <LinkItem
          Icon={Links[0].icon}
          linkName={Links[0].linkName}
          onClick={() => setTable(Links[0].linkName)}
        />
        <LinkItem
          Icon={Links[1].icon}
          linkName={Links[1].linkName}
          onClick={() => setTable(Links[1].linkName)}
        />
        <p className="py-4 font-semibold">Transaction</p>
        <LinkItem
          Icon={Links[2].icon}
          linkName={Links[2].linkName}
          onClick={() => setTable(Links[2].linkName)}
        />
        <LinkItem
          Icon={Links[3].icon}
          linkName={Links[3].linkName}
          onClick={() => setTable(Links[3].linkName)}
        />
        <LinkItem
          Icon={Links[4].icon}
          linkName={Links[4].linkName}
          onClick={() => setTable(Links[4].linkName)}
        />
        <LinkItem
          Icon={Links[5].icon}
          linkName={Links[5].linkName}
          onClick={() => setTable(Links[5].linkName)}
        />
      </div>
    </div>
  );
};

export default SideBar;
