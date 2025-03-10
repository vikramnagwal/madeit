import { useForm, SubmitHandler, Form } from 'react-hook-form';
import { Dropdown } from '../ui/dropdown/dropdown-menu';
import carriers from '../data/carrier.json'
import { DatePicker } from '../ui/date-picker';
import { Wallpaper } from './wallpaper';

interface FormProps {
    title: string;
    description: string;
}

export function DataForm({ title, description }: FormProps) {
    
    return (
      <section className='p-3'>
        <div className="flex flex-col gap-1 my-2">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-xl opacity-80 font-thin">{description}</p>
        </div>
        <form>
          <Dropdown variant='cheers' title="Network Providers" data={carriers} />
          <DatePicker variant='cheers' />
          <div>
            <h2>Wallpapers</h2>
            <Wallpaper />
          </div>
        </form>
      </section>
    );
}