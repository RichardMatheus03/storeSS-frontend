
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput({placeholder}) {
  return (
    <div>
        <input 
            id="search"
            type="text" 
            placeholder={placeholder} 
            className="tw-border tw-border-gray-300 tw-rounded-md tw-p-2 tw-w-full focus:tw-outline focus:tw-border-primary-200" 
        />
    </div>
  );
}