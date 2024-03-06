import { AutoComplete, Input, SelectProps } from "antd";
import { useState } from "react";

function SearchForm() {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const handleSearch = (value: string) => {
        setOptions([]);
      };

    return (
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{ padding: '0 48px', }}
        onSearch={handleSearch}
        options={options}
        size="large"
      >
        <Input.Search size="large" placeholder="input here" enterButton />
      </AutoComplete>
    );
  };
  
  export default SearchForm;