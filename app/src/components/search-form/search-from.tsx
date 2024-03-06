import { AutoComplete, Input, SelectProps } from "antd";
import { useState } from "react";
import { useActions } from '../../hooks/useActions';

const SearchForm: React.FC = () => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const { fetchMovies } = useActions()

  const handleSearch = (value: string) => {
    setOptions([]);
  };

  const test = (value: string) => {
    fetchMovies(value);
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ padding: '0 48px', }}
      onSearch={handleSearch}
      options={options}
      size="large"
    >
      <Input.Search size="large" onSearch={test} placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default SearchForm;