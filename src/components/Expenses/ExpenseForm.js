function ExpenseForm() {
  return (
    <div>
      <form>
        <div>
          <div>
            <label for="expense">EXPENSE TITLE</label>
          </div>
          <input type="text" id="expense" required />
        </div>

        <div>
          <label for="amount">EXPENSE AMOUNT</label>
          <div>
            <input type="number" id="amount" />
          </div>
        </div>

        <div>
          <label for="date">EXPENSE Date</label>
          <div>
            <input type="date" id="date" />
          </div>
        </div>
        <div>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
