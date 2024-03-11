import { AutoComplete, Input } from "antd";
import { useState } from "react";
import { useActions, useHistoryActions } from '../../hooks/useActions';
import { DefaultOptionType } from "antd/es/select";
import { Movie } from "../../types/movies";
import { getMovies } from "../../utils/Api";

type PatrialMovie = Partial<Movie>;

const SearchForm: React.FC = () => {
  const { addHistoryAction } = useHistoryActions();
  const { fetchMovies } = useActions()

  const [options, setOptions] = useState<DefaultOptionType[]>([]);

  const handleSearch = async (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const movies = await getMovies(value)
      const someArr = movies.map((movie: PatrialMovie) => movie['#TITLE'])
      setOptions(someArr);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const test = (value: string) => {
    let currentTime = new Date().toLocaleString()
    fetchMovies(value);
    addHistoryAction(value, currentTime.toString())
  };

  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ padding: '0 48px', }}
      onSearch={handleSearch}
      options={options.map((option, index) => ({ value: option, label: option, key: index }))}
      size="large"
    >
      <Input.Search size="large" onSearch={test} placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default SearchForm;
