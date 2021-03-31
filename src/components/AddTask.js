const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label htmlFor='Task'>Task</label>
        <input type='text' placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label htmlFor='Time'>Day & Time </label>
        <input type='text' placeholder='Add Day and Time ' />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='Task'>Reminder</label>
        <input type='checkbox' />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
