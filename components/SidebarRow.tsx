import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

interface Props {
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className="group flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200">
      <Icon className="h-6 w-6" />
      <p className="hidden group-hover:text-red-600 md:inline-flex text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
