import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    console.log('create job');
    if (isEditing) {
      editJob()
      return
    }
    createJob()
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Editar trabajo' : 'Agregar trabajo'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* posicion */}
          <div>
          <label>Posición</label>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          </div>
          {/* compañia */}
          <div>
          <label>Compañia</label>
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          </div>
          {/* ubicacion */}
          <div>
            <label>Ubicación:</label>
          <FormRow
            type='text'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          </div>
          {/* estado */}
          <FormRowSelect
            name='status'
            labelText='estado'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
         
          {/*  */}
          <FormRowSelect
            name='jobType'
            labelText='tipo de trabajo'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              enviar
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              borrar
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
