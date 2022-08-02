import { FormRow, FormRowSelect } from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext()
  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }
  return (
    <Wrapper>
      <form className='form'>
        <h4>Formulario para buscar trabajo</h4>
        <div className='form-center'>
          {/* search position */}
          <div>
          <label>¿Qué estás buscando?</label>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          </div>
          {/* search by status */}
          <FormRowSelect
            labelText='estado'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['todos', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText='tipo'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['todos', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
