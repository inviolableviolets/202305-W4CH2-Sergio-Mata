export default function AccessForm() {
  return (
    <>
      <form action="#" aria-label="form">
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label htmlFor="repeat-password"></label>
          <input
            type="password"
            name="repeat-password"
            id="repeat-password"
            placeholder="Repeat Password"
            required
          />
        </div>
        <div>
          <label htmlFor="account"></label>
          <select
            name="acount
          "
            id="acount"
            required
          >
            <option selected disabled>
              Acount Type
            </option>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="pro">Pro</option>
            <option value="venezuelan">Venezuelan</option>
          </select>
        </div>
        <div className="controls">
          <button type="button">Previous</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}
